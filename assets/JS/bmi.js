var weightEl = document.getElementById("weight")
var feetEl = document.getElementById("feet")
var incheEl = document.getElementById("inches")
var calculateEl = document.getElementById("bmiCalcBtn")
var main = document.getElementById("main1")
var age = document.getElementById("age")
var sex = document.getElementById("sex")
var key ="34619bdb3cmsh1e17a3c0aafd886p1f07eajsna05b014a1841"


calculateEl.addEventListener('click', runBmi)

function runBmi() {
    var ageEl = ageEl.value
    var sexEl = sexEl.value
    var weightvalue = weightEl.value
    var feetvalue = feetEl.value
    var inchvalue = parseInt(inches.value)
    var feetinches = feetvalue * 12
    var totalinches = parseInt(inchvalue + feetinches * 2.54)
    console.log(totalinches, weightvalue, feetvalue, feetinches, inchvalue)
var options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '34619bdb3cmsh1e17a3c0aafd886p1f07eajsna05b014a1841',
		'X-RapidAPI-Host': 'bmi.p.rapidapi.com'
	},
	body: `{"weight":{"value":"${weightvalue}","unit":"lb"},"height":{"value":"${totalinches}","unit":"cm"},"sex":"${sexEl}","age":"${ageEl}"}`
};
console.log(options)
fetch('https://bmi.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)

    })
  
}

// $('main').append('btn')
// MAKE SURE THE NEW INPUTS HAVE AN ID VALUE THAT MATCHES THE VARIABLE IN JAVASCRIPT


