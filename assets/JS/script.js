//Creates varibles to target in later functions
var apiKey = "b4dd755d08fe4f26b45a899f6b20d882";
var searchInputElement = document.getElementById("search");
var searchInputElement2 = document.getElementById("search2");
var searchBtn = document.getElementById("btn");
var main = document.getElementById("main");

console.log({ searchInputElement, searchInputElement2, searchBtn });

//registers user input
function handleSearch() {
  var calorieInput = searchInputElement.value;
  var calorieInput2 = searchInputElement2.value;
  console.log(calorieInput);
  if (calorieInput === "") {
    window.alert("please enter a value between 0-1100");
  }
  //If 0-1100 calories are inputed then it calls the min and max calorie portion of the api
  if (calorieInput !== "") {
    var searchUrl = `https://api.spoonacular.com/recipes/findByNutrients?maxCalories=${calorieInput}&minCalories=${calorieInput2}&apiKey=${apiKey}`;
    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i ++)
        console.log(data);
        //clears the html per search input
        main.innerHTML = "";
        data.forEach((item) => {
          var recipeMarkup = createMarkUp(item);
          main.innerHTML += recipeMarkup;
        });
      });
  }
}

//moves the data from the index to the page
function createMarkUp(data) {
  var titleArray = data.title.split(" ");
  var titleUrl = titleArray.join("-");
  var id = data.id;
  //pulls the recipe for the selected item from api
  var recipeUrl = `https://spoonacular.com/recipes/${titleUrl}-${id}`;
  var markup = `
    <div class="recipe container">
        <a class="link container" href=${recipeUrl}>
        <h1 class="title" >${data.title}</h1>
        <img class="image" src=${data.image}>
        </a>
    </div>`;
    

  return markup;
}

//starts the first function on the button click
searchBtn.addEventListener("click", handleSearch);


