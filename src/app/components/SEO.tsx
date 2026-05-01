import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  author?: string;
}

export function SEO({ 
  title = "Loho Christopher Dondo | Mathematics Lecturer | Software Engineer | Cybersecurity Researcher",
  description = "Ph.D. Candidate in Applied Mathematics specializing in Stochastic Processes, Full-Stack Engineering, and Cybersecurity. Building digital resilience through mathematical certainty.",
  keywords = "Mathematics Lecturer, Software Engineer, Cybersecurity Researcher, PhD Candidate, Stochastic Processes, Digital Resilience, Nigeria, Applied Mathematics",
  image = "/og-image.png",
  url = "https://your-domain.com",
  type = "website",
  publishedTime,
  author = "Loho Christopher Dondo"
}: SEOProps) {
  const siteTitle = "Loho Christopher Dondo";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
    </Helmet>
  );
}

export function SEOProvider({ children }: { children: React.ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}