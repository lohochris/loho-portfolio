import { useEffect } from 'react';

// Track page view
const trackPageView = () => {
  const data = {
    page: window.location.pathname,
    referrer: document.referrer,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };
  
  // Send to your webhook or logging service
  console.log('Page view tracked:', data);
  
  // Option: Send to Google Sheets via Apps Script webhook
  // fetch('YOUR_GOOGLE_SHEETS_WEBHOOK_URL', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // });
};

export function SimpleAnalytics() {
  useEffect(() => {
    trackPageView();
  }, []);
  
  return null;
}