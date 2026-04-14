import { languages } from '../data/languages'

const langCards = languages.map((language)=>{
  return (
    <h5
      key={language.name} 
      style={{
          backgroundColor:language.backgroundColor,
          color:language.color
        }}
      >
        {language.name}
      </h5>
  )
})



export default function Main (props) {
  return (
    <>
      {langCards}
    </>
  )
}