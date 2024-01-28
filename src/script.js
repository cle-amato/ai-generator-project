function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: `Here are three ideas for your meal: <br /> ${response.data.answer}`,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInputElement = document.querySelector("#userInput");
  let userInputValue = userInputElement.value;
  let apiKey = "ca0094f431ob9cbfef2ed6ce95bt0cc7";
  let context =
    "You are a food expert and you love to create simple and short recipes. Provide 3 ideas of recipe in a bullet point format in HTML. Only provide titles, not ingredients or directions.";
  let prompt = `Provide 3 recipes titles that include ${userInputValue}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let responseContainerElement = document.querySelector("#response-container");
  responseContainerElement.classList.remove("hidden");
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = `<div class="blink">Generating response...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormELement = document.querySelector("#recipe-generator-form");

recipeFormELement.addEventListener("submit", generateRecipe);
