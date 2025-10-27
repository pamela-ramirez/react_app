import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const raiz= document.getElementById('root');
createRoot(raiz).render(<App/>)
