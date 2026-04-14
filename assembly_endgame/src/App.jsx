import Header from './components/Header'
import Main from './components/Main'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Main />
  </>
)