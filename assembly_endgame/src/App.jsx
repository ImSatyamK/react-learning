import Header from './components/Header'
import LangCards from './components/LangCards'
import KeyStage  from './components/KeyStage'
import { createRoot } from 'react-dom/client'
import './index.css'
import { getRandomWord  } from './utils/getRandomWord'

const randomWord = getRandomWord()

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <LangCards />
    <KeyStage 
      word = {randomWord}
    />
  </>
)