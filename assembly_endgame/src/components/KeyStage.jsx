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

let resultShown = false
let lives = 8
const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function Main(props) {
    console.log(props.word)
    let letterArr = [...props.word]
    const [correctLetters, setCorrectLetters] = useState(Array(props.word.length).fill(null))
    const [guessedLetter, setGuessedLetter] = useState({})

    function keyPress(key) {
        if (lives === 0) return
        if (guessedLetter[key]) return
        setGuessedLetter(prev => ({ ...prev, [key]: true }))

        const indexes = letterArr.reduce((acc, char, i) => {
            if (char.toLowerCase() === key.toLowerCase()) acc.push(i)
            return acc
        }, [])
        console.log(indexes)
        if (indexes.length > 0) {
            indexes.forEach((i)=> {
                setCorrectLetters(prev => {
                let updated = [...prev]
                updated[i] = key
                return updated
            })})
        } else {
            lives -= 1
            console.log(lives)
        }
    }

    function showResult() {
        if (!correctLetters.includes(null)) {
            resultShown = true
            return <div id="resultCard" style={{ backgroundColor: 'green' }}>
                <h3 style={{ backgroundColor: 'green' }}>You win!</h3>
                <p style={{ backgroundColor: 'green' }}>Well done!</p>
            </div>
        } else if (lives === 0) {
            resultShown = true
            return <div id="resultCard" style={{ backgroundColor: 'red' }}>
                <h3 style={{ backgroundColor: 'red' }}>Game over!</h3>
                <p style={{ backgroundColor: 'red' }}>You lose! Better start learning Assembly!</p>
            </div>
        }
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
            {showResult()}
            <div id='langDiv'>
                <div id='langDivRow1'>{langCards.slice(0, 5)}</div>
                <div id='langDivRow2'>{langCards.slice(5)}</div>
            </div>

            <section className="wordStage">{wordStage}</section>

            <div id="btns">
                <div>{keyboard}</div>
                {resultShown ? <button id="newGameBtn">NEW GAME</button>: undefined}
            </div>
        </>
    )
}