const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("search-btn");
const recipeContainer = document.querySelector(".recipe-container");
const topText = document.querySelector('.top-txt');

const fetchRecipe =async (query) => {
    topText.innerHTML="<h2>Fetching recipe...</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    console.log(response);

     recipeContainer.innerHTML = "";

    topText.innerHTML = "<h2>Search your favourite recipe</h2>";
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = 
        `<img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        <p>${meal.strArea} Dish<p>
        <p>${meal.strCategory}<p>
        `;

       const view = document.createElement("button");
       view.textContent = "VIEW RECIPE";
       view.addEventListener("click", () => {
         window.location.href = `recipe.html?id=${meal.idMeal}`;
       });
        recipeDiv.appendChild(view);
        
        recipeContainer.appendChild(recipeDiv); 
    });

}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const searchInput = searchBox.value.trim();
    fetchRecipe(searchInput);
    console.log("Hello");
});



const fetchRandomRecipes = async () => {
  topText.innerHTML = "<h1>Suggestion</h1>";
  recipeContainer.innerHTML = "";

  for (let i = 0; i < 12; i++) {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    const meal = data.meals[0];

    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `<img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        <p>${meal.strArea} Dish</p>
        <p>${meal.strCategory}</p>`;

    const view = document.createElement("button");
    view.textContent = "VIEW RECIPE";
    view.addEventListener("click", () => {
      window.location.href = `recipe.html?id=${meal.idMeal}`;
    });

    recipeDiv.appendChild(view);
    recipeContainer.appendChild(recipeDiv);
  }
};
window.addEventListener("DOMContentLoaded", fetchRandomRecipes);
