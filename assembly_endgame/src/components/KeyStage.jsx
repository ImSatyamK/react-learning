import { useState, useEffect } from "react"
import { languages } from '../data/languages'
import { getRandomWord } from '../utils/getRandomWord'
import { getFarewellText } from '../utils/getFarewellText'

const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function Main() {
    const [word, setWord] = useState(getRandomWord())
    // console.log(word)
    const letterArr = [...word]
    const [correctLetters, setCorrectLetters] = useState(Array(word.length).fill(null))
    const [guessedLetter, setGuessedLetter] = useState({})
    const [lives, setLives] = useState(8)
    const [isWrong, setIsWrong] = useState(false)

    const corrected = [...(word.toUpperCase())]
    const isWon = !correctLetters.includes(null)
    const isLost = lives === 0
    const isOver = isWon || isLost

    function farewell() {
        const lostCount = 8 - lives

        if (lostCount <= 0) return null

        return getFarewellText(languages[lostCount - 1].name)
    }

    const langCards = languages.map((language, index) => (
        <h5
            className={`langCards ${index < 8 - lives ? 'lost' : ''}`}
            key={language.name}
            style={{ backgroundColor: language.backgroundColor, color: language.color }}
        >
            {language.name}
        </h5>
    ))

    function keyPress(key) {
        if (isOver) return
        if (guessedLetter[key]) return
        setGuessedLetter(prev => ({ ...prev, [key]: true }))

        const indexes = letterArr.reduce((acc, char, i) => {
            if (char.toLowerCase() === key.toLowerCase()) acc.push(i)
            return acc
        }, [])

        if (indexes.length > 0) {
            setIsWrong(false)
            setCorrectLetters(prev => {
                let updated = [...prev]
                indexes.forEach((i) => {
                    updated[i] = key    
                })
                return updated
            })
        } else {
            setIsWrong(true)
            setLives(prev => prev - 1)
        }
    }

    function resetGame() {
        const newWord = getRandomWord()
        setWord(newWord)
        setCorrectLetters(Array(newWord.length).fill(null))
        setGuessedLetter({})
        setLives(8)
        setIsWrong(false)
    }

    const keyboard = ALPHABETS.map((key) => (
        <button
            key={key}
            onClick={() => keyPress(key)}
            style={{
                backgroundColor: guessedLetter[key]
                    ? (letterArr.some(c => c.toLowerCase() === key.toLowerCase()) ? 'green' : 'red')
                    : 'rgb(218, 186, 92)'
            }}
        >
            {key}
        </button>
    ))

    const wordStage = word.split('').map((_, i) => (
        <div
            key={i}
            className={correctLetters[i] ? 'letterBox' : (isLost ? 'missingLetter' : 'letterBox')}
        >{correctLetters[i] ? correctLetters[i] : (isLost ? corrected[i] : correctLetters[i])}
        </div>
    ))

    return (
        <>
            {isWon && (
                <div id="resultCard" style={{ backgroundColor: 'green' }}>
                    <h3 style={{ backgroundColor: 'green' }}>You win!</h3>
                    <p style={{ backgroundColor: 'green' }}>Well done!</p>
                </div>
            )}
            {isLost && (
                <div id="resultCard" style={{ backgroundColor: 'red' }}>
                    <h3 style={{ backgroundColor: 'red' }}>Game over!</h3>
                    <p style={{ backgroundColor: 'red' }}>Better start learning Assembly!</p>
                </div>
            )}
            {isWrong && !isLost ? (<div id="resultCard" style={{ backgroundColor: 'purple' }}>
                <h3 style={{ backgroundColor: 'purple' }}>{farewell()}</h3>
            </div>) : undefined
            }

            <div id='langDiv'>
                <div id='langDivRow1'>{langCards.slice(0, 5)}</div>
                <div id='langDivRow2'>{langCards.slice(5)}</div>
            </div>

            <section className="wordStage">{wordStage}</section>

            <div id="btns">
                <div
                className={isLost || isWon ? 'disableKeys' : 'keyboard'}
                >{keyboard}</div>
                {isOver && <button id="newGameBtn" onClick={resetGame}>NEW GAME</button>}
            </div>
        </>
    )
}