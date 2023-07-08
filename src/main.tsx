import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/UserContext.tsx'
import { AdminProvider } from './providers/AdminContext.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AdminProvider>
          <App />
          <ToastContainer />
        </AdminProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
