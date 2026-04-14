export default function KeyStage(props) {

    const alphabets = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
    const keyboard = alphabets.split(' ').map((key) => {
        return (
            <button
                key={key}
            >
                {key}
            </button>)
    })

    const wordStage = props.word.split('').map((_, i) => (
        <div key={i} className="letterBox"></div>
    ))

    return (
        <>
            <div id="resultCard">
                <h3>YOU WON!</h3>
                <p>Lorem, ipsum dolor sit amet consectetur</p>
            </div>
            <section className="wordStage">{wordStage}</section>
            <div id="btns">
                <div>{keyboard}</div>
                <button id="newGameBtn">NEW GAME</button>
            </div>
        </>
    )
}