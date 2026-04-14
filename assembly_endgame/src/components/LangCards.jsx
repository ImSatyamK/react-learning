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



export default function LangCards(props) {
  return (
    <div id='langDiv'>
      <div id='langDivRow1'>
        {langCards.slice(0, 5)}
      </div>
      <div id='langDivRow2'>
        {langCards.slice(5)}
      </div>
    </div>
  )
}