var key = 'b4dd755d08fe4f26b45a899f6b20d882'
var searchEl = document.getElementById('container1')
var searchButtonEl = document.getElementById('srchbtn')
var maxcalEl = document.getElementById('maxcal')
var mincalEl = document.getElementById('mincal')

//display 9 items instead of 10

//adds click function to the submit button to call get food
searchButtonEl.addEventListener('click',(e) => getfood(e))

function getfood(event) {
    event.preventDefault()

    //refreshes page on new input
    searchEl.innerHTML = ''

    //uses variables to get results based off user inputs
    var maxcalVal = maxcalEl.value
    var mincalVal = mincalEl.value
    fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${key}&maxCalories=${maxcalVal}&minCalories=${mincalVal}`)
.then(response => response.json())
.then(data => {
    
    //runs array of items, adds items to a card/title/ and cell
    for (let i = 0; i < data.length; i ++){
        var cell = $('<div>').addClass('cell')
        var card = $('<div>').addClass('card')
        var title = $('<h2>').text(data[i].title)
        console.log(data)
    
        //takes cell made above and appends to make
        var picEl = data[i].image
        var picture = $('<img>')
        picture.attr('src', picEl)
        card.append(title,picture)
        cell.append(card)
        $('#container1').append(cell)
    }
})
}

// navbar hamburger JS
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }