import { useState } from "react"
import { languages } from '../data/languages'
import { getRandomWord } from '../utils/getRandomWord'

const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function Main() {
    const [word, setWord] = useState(getRandomWord())
    const letterArr = [...word]
    const [correctLetters, setCorrectLetters] = useState(Array(word.length).fill(null))
    const [guessedLetter, setGuessedLetter] = useState({})
    const [lives, setLives] = useState(8)

    const isWon = !correctLetters.includes(null)
    const isLost = lives === 0
    const isOver = isWon || isLost

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
            indexes.forEach((i) => {
                setCorrectLetters(prev => {
                    const updated = [...prev]
                    updated[i] = key
                    return updated
                })
            })
        } else {
            setLives(prev => prev - 1)
        }
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
        <div key={i} className="letterBox">{correctLetters[i]}</div>
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

            <div id='langDiv'>
                <div id='langDivRow1'>{langCards.slice(0, 5)}</div>
                <div id='langDivRow2'>{langCards.slice(5)}</div>
            </div>

            <section className="wordStage">{wordStage}</section>

            <div id="btns">
                <div>{keyboard}</div>
                {isOver && <button id="newGameBtn">NEW GAME</button>}
            </div>
        </>
    )
}