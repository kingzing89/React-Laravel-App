import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import router from './Router.jsx'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import ContextProvider from './contexts/ContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ContextProvider>
          <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
