const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get("id");

const getRecipeDetails = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await res.json();
  const meal = data.meals[0];

  const leftHTML = `
        <h1>${meal.strMeal}</h1>
        <h3>Category: ${meal.strCategory}</h3>
        <h3>Area: ${meal.strArea}</h3>
        <p><strong>Instructions:</strong><br>${meal.strInstructions}</p>
        <a href="${meal.strYoutube}" target="_blank">Watch on YouTube</a>
    `;

  const rightHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    `;

  document.getElementById("recipeDetails").innerHTML = leftHTML;
  document.getElementById("recipeImage").innerHTML = rightHTML;
};

getRecipeDetails();
