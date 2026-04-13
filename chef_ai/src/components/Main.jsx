import { useState, useEffect, useRef } from "react"
import  IngredientsList from './IngredientsList.jsx'
import {getRecipeFromHF} from '../../ai'

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    
    const recipeView = useRef(null)
    useEffect(()=>{
        if (recipe && recipeView.current) {
            recipeView.current.scrollIntoView({behavior : 'smooth'})
        }
    }, [recipe])

    function deleteIngredient(ingredient){
        setIngredients(prevIngredients => {
            let newarr = prevIngredients.filter(item => item !== ingredient)
            return newarr
        })
    }

    async function getRecipe(ingredients) {
        const recipeMarkdown = await getRecipeFromHF(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient (formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <h3>ADD SOME INGREDIENTS AND GET A RECIPE</h3>
            <form action={addIngredient}>
                <input type="text" 
                id="ingredient"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"/>
                <button>+ ADD INGREDIENT</button>
            </form>
            {ingredients.length > 0 ? 
            <IngredientsList
                ref={recipeView}
                ingredients={ingredients}
                getRecipe={getRecipe}
                deleteIngredient={deleteIngredient}
            />
            :undefined}
            {recipe ? <section className="recipe-by-ai" dangerouslySetInnerHTML={{__html: recipe}} /> : undefined}
        </main>
    )
}