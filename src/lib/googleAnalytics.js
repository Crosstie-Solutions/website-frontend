import ReactGA from 'react-ga4';

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID, {
      gaOptions: {
        debug_mode: import.meta.env.DEV, // Enable debug in development
      },
    });
    console.log('Google Analytics initialized:', MEASUREMENT_ID);
  } else {
    console.warn('Google Analytics Measurement ID not found');
  }
};

// Track page views
export const trackPageView = (path, title) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: title || document.title 
  });
};

// Track events
export const trackEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Specific event trackers
export const trackButtonClick = (buttonName, location) => {
  ReactGA.event({
    category: 'Button',
    action: 'Click',
    label: `${buttonName} - ${location}`,
  });
};

export const trackFormSubmission = (formName) => {
  ReactGA.event({
    category: 'Form',
    action: 'Submit',
    label: formName,
  });
};

export const trackDownload = (fileName) => {
  ReactGA.event({
    category: 'Download',
    action: 'Click',
    label: fileName,
  });
};

export const trackSearch = (searchTerm) => {
  ReactGA.event({
    category: 'Search',
    action: 'Submit',
    label: searchTerm,
  });
};

export const trackOutboundLink = (url) => {
  ReactGA.event({
    category: 'Outbound Link',
    action: 'Click',
    label: url,
  });
};

// Track custom events
export const trackCustomEvent = (eventName, params = {}) => {
  ReactGA.event(eventName, params);
};

// Track timing (e.g., how long something takes)
export const trackTiming = (category, variable, value, label) => {
  ReactGA.event({
    category: 'Timing',
    action: category,
    label: `${variable} - ${label}`,
    value,
  });
};

// Set user properties (optional)
export const setUserProperties = (properties) => {
  ReactGA.gtag('set', 'user_properties', properties);
};

// Track exceptions/errors (optional)
export const trackException = (description, fatal = false) => {
  ReactGA.gtag('event', 'exception', {
    description,
    fatal,
  });
};