export default function IngredientsList (props) {
    const listItems = props.ingredients.map( (ingredient, index) => {
    return (<li className="ingredients-list"
        key={index}>
        {ingredient}
        <button onClick={()=>props.deleteIngredient(ingredient)}>×</button></li> 
    )})

    return (
        <section>
            <h3>Your Ingredients:</h3>
            <ul>{listItems}</ul>
            {props.ingredients.length > 3 ? 
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={()=>props.getRecipe(props.ingredients)}>Get a recipe</button>    
            </div>
            :undefined
            }
        </section>
    )
}