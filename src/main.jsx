import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import CrossContextProvider from './Context/CrossContext.jsx';
import { initPixel, pageView as trackMetaPageView } from './lib/metaPixel';
import { initGA, trackPageView } from './lib/googleAnalytics.js';

// initialize google pixel
initPixel();
trackMetaPageView();

// Initialize Google Analytics
initGA();
trackPageView(window.location.pathname, document.title);

createRoot(document.getElementById('root')).render(
  <CrossContextProvider>
    <App />
    <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="light"
      />
  </CrossContextProvider>,
)
