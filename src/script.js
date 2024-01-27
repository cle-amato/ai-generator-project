function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Recipe here",
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

let recipeFormELement = document.querySelector("#recipe-generator-form");

recipeFormELement.addEventListener("submit", generateRecipe);
