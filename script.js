var key = 'b4dd755d08fe4f26b45a899f6b20d882'
var searchEl = document.getElementById('#container1')

// fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${key}&maxCarbs=30`)
// .then(response => response.json())
// .then(data => console.log(data))


fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${key}&maxCalories=400&minCalories=100`)
.then(response => response.json())
.then(data => {

    // var item0 = data[0]
    // var item1 = data[1]
    // var item2 = data[2]
    // var item3 = data[3]
    // var item4 = data[4]
    // var item5 = data[5]
    // var item6 = data[6]
    // var item7 = data[7]
    // var item8 = data[8]
    // var item9 = data[9]
    
    
    // var recipesArray = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9,]



    for (let i = 0; i < data.length; i++){
        var cell = $('<div>').addClass('cell')
        var card = $('<div>').addClass('card')
        var title = $('<h1>').text(data[i].title)
        console.log(data)
        
        var picEl = data[i].image
        var picture = $('<img>')
        picture.attr('src', picEl)
        card.append(title,picture)
        cell.append(card)
        $('#container1').append(cell)
    }
})


    
    // var recepiesEl =
    
    // for (let i = 0; i< recepiesEl; i++){}


