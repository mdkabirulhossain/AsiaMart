import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import StoreContextProvider from './Context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <div className="bg-white">
    <div className="max-w-screen-lg mx-auto px-4">
      <StrictMode>
        <StoreContextProvider>
          <RouterProvider router={router} />
        </StoreContextProvider>
      </StrictMode>
    </div>
  </div>
)
