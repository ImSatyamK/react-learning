import Header from './components/Header'
import KeyStage  from './components/KeyStage'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <KeyStage />
  </>
)


