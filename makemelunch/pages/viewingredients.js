import {getAllIngredients} from "./helper/fireBaseHelper.js"


export default function ViewIngredients() {
    return (
        <>
            <header>
                <a>MakeMyLunch</a>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/edit">Add/Remove Ingredients</a></li>
                        <li><a href="/viewingredients">View Ingredients</a></li>
                        <li><a href="/getrecipes">Get Recipes</a></li>
                        <li><a href="#">Sign Out</a></li>
                    </ul>
                </nav>
            </header>
            <h1>View ingredients</h1>
            <button onClick={getIngredients()}>Hello</button>
        </>
    )
}
function getIngredients() {
    console.log("GET INGREDIENTS IS CALLED");
    str = getAllIngredients();
}