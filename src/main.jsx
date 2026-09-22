import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Pastikan ini mengarah ke index.css yang sudah kita ubah
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)