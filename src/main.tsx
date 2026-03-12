import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts.css'
import './styles/globals.css'
import { App } from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Element #root introuvable dans index.html')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
