import { useState } from "react"
import { languages } from '../data/languages'

const langCards = languages.map((language) => {
    return (
        <h5
            className='langCards'
            key={language.name}
            style={{
                backgroundColor: language.backgroundColor,
                color: language.color
            }}
        >
            {language.name}
        </h5>
    )
})

const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function Main(props) {

    let letterArr = [...props.word]
    const [correctLetters, setCorrectLetters] = useState(Array(props.word.length).fill(null))
    const [guessedLetter, setGuessedLetter] = useState({})

    function keyPress(key) {
        if (guessedLetter[key]) return
        setGuessedLetter(prev => ({ ...prev, [key]: true }))

        letterArr.forEach((char, i) => {
            if (char.toLowerCase() === key.toLowerCase()) {
                setCorrectLetters(prev => {
                    let updated = [...prev]
                    updated[i] = key
                    return updated
                })
            } else {

            }
        })
    }

    const keyboard = ALPHABETS.map((key) => <button
        key={key}
        onClick={() => keyPress(key)}
        style={{ backgroundColor: guessedLetter[key] ? (correctLetters.includes(key) ? 'green' : 'red') : 'rgb(218, 186, 92)' }}
    >{key}</button>)

    const wordStage = props.word.split('').map((_, i) => (
        <div key={i} className="letterBox">{correctLetters[i]}</div>
    ))

    return (
        <>
            <div id="resultCard">
                <h3>YOU WON!</h3>
                <p>Lorem, ipsum dolor sit amet consectetur</p>
            </div>

            <div id='langDiv'>
                <div id='langDivRow1'>{langCards.slice(0, 5)}</div>
                <div id='langDivRow2'>{langCards.slice(5)}</div>
            </div>

            <section className="wordStage">{wordStage}</section>

            <div id="btns">
                <div>{keyboard}</div>
                <button id="newGameBtn">NEW GAME</button>
            </div>
        </>
    )
}