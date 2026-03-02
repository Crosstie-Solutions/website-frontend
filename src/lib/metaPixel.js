import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

// Initialize the pixel
export const initPixel = () => {
  if (PIXEL_ID) {
    ReactPixel.init(PIXEL_ID, undefined, {
      autoConfig: true,
      debug: import.meta.env.DEV, // true in dev, false in prod
    });
    console.log('Meta Pixel initialized:', PIXEL_ID);
  } else {
    console.warn('Meta Pixel ID not found');
  }
};

// Track page views
export const pageView = () => {
  ReactPixel.pageView();
};

// Standard Events
export const trackLead = () => {
  ReactPixel.track('Lead');
};

export const trackCompleteRegistration = (data = {}) => {
  ReactPixel.track('CompleteRegistration', data);
};

export const trackPurchase = (value, currency = 'USD') => {
  ReactPixel.track('Purchase', { value, currency });
};

export const trackAddToCart = (contentName, value) => {
  ReactPixel.track('AddToCart', { 
    content_name: contentName, 
    value 
  });
};

export const trackInitiateCheckout = () => {
  ReactPixel.track('InitiateCheckout');
};

export const trackSearch = (searchString) => {
  ReactPixel.track('Search', { 
    search_string: searchString 
  });
};

export const trackViewContent = (contentName, contentType = 'page') => {
  ReactPixel.track('ViewContent', { 
    content_name: contentName, 
    content_type: contentType 
  });
};

export const trackContact = () => {
  ReactPixel.track('Contact');
};

// Custom Events
export const trackCustomEvent = (eventName, data = {}) => {
  ReactPixel.trackCustom(eventName, data);
};

// Convenience exports for common custom events
export const trackFormSubmission = (formName, data = {}) => {
  ReactPixel.trackCustom('FormSubmitted', { 
    form_name: formName, 
    ...data 
  });
};

export const trackDownload = (fileName, fileType) => {
  ReactPixel.trackCustom('Download', { 
    file_name: fileName, 
    file_type: fileType 
  });
};

export const trackButtonClick = (buttonName, location) => {
  ReactPixel.trackCustom('ButtonClicked', { 
    button_name: buttonName, 
    location 
  });
};