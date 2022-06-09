import { API_URL } from './config.js'
import { getJSON } from './helpers.js'
import recipeViews from './views/recipeViews.js'

export const state = {
    recipe: {}
}

export const loadRecipe = async function (id) {
    try {

        const data = await getJSON(`${API_URL}/${id}`)
        const { recipe } = data.data
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sorceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            coookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        }
        console.log(state.recipe)
    }
    catch (err) {
        alert(err)
    }

}

