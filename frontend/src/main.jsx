import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import StoreContextProvider from './Context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  </StrictMode>,
)
