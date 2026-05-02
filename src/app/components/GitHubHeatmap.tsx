import { motion } from "framer-motion";
import { Github, Calendar, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface YearlyData {
  total: number;
  weeks: ContributionDay[][];
  months: { name: string; startWeek: number }[];
  commits: number;
  repos: number;
}

export function GitHubHeatmap() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [yearlyData, setYearlyData] = useState<Record<number, YearlyData>>({});
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const availableYears = [2024, 2025, 2026];
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const username = import.meta.env.VITE_GITHUB_USERNAME || 'lohochris';

  const fetchYearlyContributions = async (year: number): Promise<YearlyData | null> => {
    if (!token) {
      setError("GitHub token not configured. Please add VITE_GITHUB_TOKEN to .env.local");
      return null;
    }

    const startDate = `${year}-01-01T00:00:00Z`;
    const endDate = `${year}-12-31T23:59:59Z`;

    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                  contributionLevel
                }
              }
            }
            totalCommitContributions
            totalRepositoryContributions
          }
          repositories(first: 100) {
            totalCount
          }
        }
      }
    `;

    try {
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { username, from: startDate, to: endDate },
        }),
      });

      const result = await response.json();
      
      if (result.errors) {
        console.error('GraphQL Errors:', result.errors);
        setError(result.errors[0]?.message || 'Failed to fetch data');
        return null;
      }

      const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;
      
      if (!calendar) {
        return null;
      }

      const weeks: ContributionDay[][] = calendar.weeks.map((week: any) =>
        week.contributionDays.map((day: any) => ({
          date: day.date,
          count: day.contributionCount,
          level: (() => {
            const level = day.contributionLevel;
            if (level === 'NONE') return 0;
            if (level === 'FIRST_QUARTILE') return 1;
            if (level === 'SECOND_QUARTILE') return 2;
            if (level === 'THIRD_QUARTILE') return 3;
            return 4;
          })(),
        }))
      );

      const months = [
        { name: 'Jan', startWeek: 0 },
        { name: 'Feb', startWeek: 4 },
        { name: 'Mar', startWeek: 8 },
        { name: 'Apr', startWeek: 13 },
        { name: 'May', startWeek: 17 },
        { name: 'Jun', startWeek: 22 },
        { name: 'Jul', startWeek: 26 },
        { name: 'Aug', startWeek: 31 },
        { name: 'Sep', startWeek: 35 },
        { name: 'Oct', startWeek: 40 },
        { name: 'Nov', startWeek: 44 },
        { name: 'Dec', startWeek: 48 },
      ];

      return {
        total: calendar.totalContributions,
        weeks: weeks,
        months: months,
        commits: result.data?.user?.contributionsCollection?.totalCommitContributions || 0,
        repos: result.data?.user?.repositories?.totalCount || 0,
      };
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Network error. Please check your connection.');
      return null;
    }
  };

  useEffect(() => {
    const loadAllYears = async () => {
      setLoading(true);
      const data: Record<number, YearlyData> = {};
      
      for (const year of availableYears) {
        const yearData = await fetchYearlyContributions(year);
        if (yearData) {
          data[year] = yearData;
        }
      }
      
      setYearlyData(data);
      setLoading(false);
    };

    loadAllYears();
  }, []);

  const currentData = yearlyData[selectedYear];
  // ALL 7 days of the week
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getLevelColor = (level: number) => {
    switch(level) {
      case 0: return 'bg-slate-800';
      case 1: return 'bg-emerald-900/60';
      case 2: return 'bg-emerald-700/80';
      case 3: return 'bg-emerald-500';
      case 4: return 'bg-emerald-400';
      default: return 'bg-slate-800';
    }
  };

  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-semibold text-white">GitHub Activity</h3>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:border-emerald-400 transition-all duration-300 text-white"
              >
                <Calendar className="w-4 h-4" />
                <span>{selectedYear}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-xl z-10">
                  {availableYears.map(year => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-700 transition-colors ${
                        selectedYear === year ? 'text-emerald-400 bg-slate-700' : 'text-white'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white/70 mt-4">Fetching your GitHub contribution data...</p>
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-12">
              <p className="text-red-400 mb-2">⚠️ {error}</p>
              <p className="text-white/50 text-sm">Please add your GitHub token to .env.local file</p>
            </div>
          )}

          {!loading && !error && currentData && (
            <>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">{currentData.total}</span>
                <span className="text-white ml-2">contributions in {selectedYear}</span>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[850px]">
                  {/* Month Labels */}
                  <div className="flex ml-12 mb-2">
                    <div className="w-8"></div>
                    <div className="flex flex-1">
                      {currentData.months.map((month, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-white/50"
                          style={{
                            position: 'relative',
                            left: `${month.startWeek * 14}px`,
                          }}
                        >
                          {month.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Heatmap Grid */}
                  <div className="flex">
                    {/* Weekday Labels - ALL 7 DAYS */}
                    <div className="flex flex-col justify-between mr-3">
                      {weekdays.map((day, idx) => (
                        <div key={idx} className="text-xs text-white/50 h-[18px] flex items-center">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Contribution Cells */}
                    <div className="flex gap-[3px]">
                      {currentData.weeks.map((week, weekIdx) => (
                        <div key={weekIdx} className="flex flex-col gap-[3px]">
                          {week.map((day, dayIdx) => (
                            <div
                              key={dayIdx}
                              className={`w-[18px] h-[18px] rounded-sm ${getLevelColor(day.level)} hover:ring-2 hover:ring-emerald-400 transition-all cursor-pointer`}
                              title={`${day.date}: ${day.count} contribution${day.count !== 1 ? 's' : ''}`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-end gap-2 mt-4">
                    <span className="text-xs text-white/50">Less</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-sm bg-slate-800" />
                      <div className="w-3 h-3 rounded-sm bg-emerald-900/60" />
                      <div className="w-3 h-3 rounded-sm bg-emerald-700/80" />
                      <div className="w-3 h-3 rounded-sm bg-emerald-500" />
                      <div className="w-3 h-3 rounded-sm bg-emerald-400" />
                    </div>
                    <span className="text-xs text-white/50">More</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-700">
                <div className="text-center p-4 rounded-lg bg-slate-800/30">
                  <div className="text-2xl font-bold text-white">{currentData.commits}</div>
                  <div className="text-xs text-white/50">Total Commits</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-slate-800/30">
                  <div className="text-2xl font-bold text-white">{currentData.repos}</div>
                  <div className="text-xs text-white/50">Repositories</div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}