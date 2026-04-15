import Header from './components/Header'
import KeyStage  from './components/KeyStage'
import { createRoot } from 'react-dom/client'
import './index.css'
import { getRandomWord  } from './utils/getRandomWord'

const randomWord = getRandomWord()

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <KeyStage 
      word = {randomWord}
    />
  </>
)