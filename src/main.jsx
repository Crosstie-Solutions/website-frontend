import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import CrossContextProvider from './Context/CrossContext.jsx';


createRoot(document.getElementById('root')).render(
  <CrossContextProvider>
    <App />
    <ToastContainer 
      position="top-center" // Set position to top center
      autoClose={5000} // Optional: Set auto close duration
      hideProgressBar={false} // Optional: Show progress bar
      closeOnClick // Optional: Allow closing on click
      pauseOnHover // Optional: Pause on hover
      draggable // Optional: Allow dragging
      theme="light" // Optional: Set theme (light/dark)
      />
  </CrossContextProvider>,
)
