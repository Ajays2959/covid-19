let baseUrl = "https://disease.sh/v3/covid-19/all"

let activeCases = document.querySelector(".active-cases")
let totalCases = document.querySelector(".total-cases")
let criticalCases = document.querySelector(".critical-cases")
let deathss = document.querySelector(".death-cases")
let recoveredCases = document.querySelector(".recovered-cases")
let totalTests = document.querySelector(".total-tests")


window.onload = () => {
    fetch(baseUrl)
        .then((response)=>{
            getResults(response.json())
        })
}

getResults = (result) =>{
    // console.log("result", result)
    Promise.resolve(result).then((val)=>{
        // console.log("val", val)
        // console.log("active cases", val.active)
        // console.log("Total cases", val.cases)
        // console.log("critical cases", val.critical)
        // console.log("Deaths", val.deaths)
        // console.log("Recovered cases", val.recovered)
        // console.log("Total Tests ", val.tests)
        activeCases.innerHTML = val.active;
        totalCases.innerHTML = val.cases;
        criticalCases.innerHTML = val.critical;
        deathss.innerHTML = val.deaths;
        recoveredCases.innerHTML = val.recovered;
        totalTests.innerHTML = val.tests;

    })
} 