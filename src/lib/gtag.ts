/* eslint-disable @typescript-eslint/no-explicit-any */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID; // Replace with your ID
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
// Log page views
export const pageview = (url: any) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
