# 🍽️ Cooksy – Recipe Finder Website

**Cooksy** is a simple and responsive recipe finder web application that allows users to search for recipes, view dish details, and watch cooking tutorials.

## 🌐 Live Features
- 🔍 Search recipes by name
- 📷 View images of dishes
- 📄 See category, area, and instructions
- 🎥 YouTube link for step-by-step cooking tutorials
- 📱 Mobile-friendly and responsive design

## 📁 Project Structure

cooksy/ │ ├── index.html # Main search page ├── recipe.html # Recipe details page │ ├── style.css # Styling for the main page ├── recipestyle.css # Styling for the recipe details page │ ├── script.js # JavaScript for fetching search results ├── recipescript.js # JavaScript for displaying recipe details │ ├── assets/ │ └── logo.png # Website logo │ └── README.md # Project description


## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- [TheMealDB API](https://www.themealdb.com/api.php)

## 🧠 How It Works

1. **Search Page (`index.html`)**
   - Users enter a recipe name.
   - The app fetches data using `TheMealDB` API and displays a grid of recipes.

2. **Recipe Page (`recipe.html`)**
   - On clicking **View Recipe**, the user is redirected with the recipe ID in the URL.
   - JavaScript fetches full details using that ID and displays the recipe, image, instructions, and a YouTube link.

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cooksy.git
