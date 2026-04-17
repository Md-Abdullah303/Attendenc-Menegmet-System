import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './RootRouter/RootRouter'
import StudentDataProvider from './context/StudentDataProvider/StudentDataProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentDataProvider>
    <RouterProvider router={router}></RouterProvider>
    </StudentDataProvider>
  </StrictMode>,
)
