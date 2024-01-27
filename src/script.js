function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: `Here are three ideas for your meal: <br /> ${response.data.answer}`,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
  console.log(response.data.answer);
}

function generateRecipe(event) {
  event.preventDefault();

  let userInputElement = document.querySelector("#userInput");
  let userInputValue = userInputElement.value;
  let apiKey = "ca0094f431ob9cbfef2ed6ce95bt0cc7";
  let context =
    "You are a food expert and you love to create simple and short recipes. Provide 3 ideas of recipe in a bullet point format in HTML.";
  let prompt = `Provide 3 recipes titles that include ${userInputValue}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
  console.log("Generating recipe");
  console.log(context);
  console.log(prompt);
}

let recipeFormELement = document.querySelector("#recipe-generator-form");

recipeFormELement.addEventListener("submit", generateRecipe);
