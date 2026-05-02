import React, { useEffect } from 'react';

// Simple analytics tracking without external dependencies
export function Analytics() {
  useEffect(() => {
    // Track page view on mount
    const trackPageView = () => {
      const pageData = {
        page: window.location.pathname + window.location.search,
        title: document.title,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };
      
      console.log('[Page View]', pageData);
      
      // You can send this to your own endpoint if needed
      // fetch('/api/analytics', { method: 'POST', body: JSON.stringify(pageData) });
    };
    
    trackPageView();
  }, []);

  // Track route changes
  useEffect(() => {
    const handleRouteChange = () => {
      const pageData = {
        page: window.location.pathname + window.location.search,
        title: document.title,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };
      console.log('[Page View]', pageData);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return null;
}

// Custom hook for tracking events (works with Vercel Analytics)
export const useAnalytics = () => {
  const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    // Log to console for debugging
    console.log(`[Analytics] ${category} - ${action} - ${label || ''}`, { value });
    
    // If you have Vercel Analytics, events are automatically tracked
    // For custom events, you can use:
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va('event', {
        event_name: `${category}_${action}`,
        payload: { category, action, label, value },
      });
    }
  };

  const trackCVDownload = (cvType: 'Academic' | 'Technical') => {
    trackEvent('CV', 'Download', cvType);
    
    // Detailed tracking data
    const downloadData = {
      cvType,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      page: window.location.pathname,
    };
    
    console.log('📄 CV Download Tracked:', downloadData);
    
    // Optional: Send to a webhook (e.g., Discord, Slack, Google Sheets)
    // fetch('YOUR_WEBHOOK_URL', {
    //   method: 'POST',
    //   body: JSON.stringify(downloadData),
    // });
  };

  const trackProjectClick = (projectName: string) => {
    trackEvent('Project', 'Click', projectName);
    console.log(`🔗 Project Click: ${projectName}`);
  };

  const trackContactFormSubmit = (success: boolean) => {
    trackEvent('Contact', success ? 'Success' : 'Error', 'Form Submission');
    console.log(`📧 Contact Form: ${success ? 'Success' : 'Failed'}`);
  };

  const trackOutboundLink = (url: string) => {
    trackEvent('Outbound', 'Click', url);
    console.log(`🔗 Outbound Link: ${url}`);
  };

  return {
    trackEvent,
    trackCVDownload,
    trackProjectClick,
    trackContactFormSubmit,
    trackOutboundLink,
  };
};