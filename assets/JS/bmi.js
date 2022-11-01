var weightEl = document.getElementById("weight")
var feetEl = document.getElementById("feet")
var incheEl = document.getElementById("inches")
var calculateEl = document.getElementById("bmiCalcBtn")
var main = document.getElementById("main1")
var age = document.getElementById("age")
var sex = document.getElementById("sex")
var bmiResultsEl = document.getElementById('bmiResults')
var key ="34619bdb3cmsh1e17a3c0aafd886p1f07eajsna05b014a1841"


calculateEl.addEventListener('click', runBmi)

function runBmi() {
    var ageEl = age.value
    var sexEl = sex.value
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
console.log(ageEl, sexEl)
console.log(options)
fetch('https://bmi.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        console.log(response.bmi.risk)

        var bmiCard = $('<div>').addClass('bmicard')
        var statusCard = $('<div>').addClass('bmicard')
        var riskCard = $('<div>').addClass('bmicard')
        
        var bmiResults = 'BMI:  ' + response.bmi.value
        var bmiStatus = 'BMI status:  ' + response.bmi.status
        var bmiRisk = 'Risks in correspondence with BMI:  ' + response.bmi.risk
        
        for (let i = 0; i < 2; i ++)
        bmiResultsEl.innerHTML = "";
        bmiCard.append(bmiResults)
        statusCard.append(bmiStatus)
        riskCard.append(bmiRisk)

        $('#bmiResults').append(bmiCard, statusCard, riskCard)
    
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