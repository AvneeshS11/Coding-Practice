const BASE_URL ="https://2024-03-06.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const btn = document.querySelector("button")
const msg = document.querySelector(".msg")


for(let select of  dropdowns){
    for(let currcode in CountryList){
        const newoption = document.createElement("option")
        newoption.innerText = currcode;
        newoption.value = currcode
        if(select.name === "form" && currcode === "USD"){
            newoption.selected = "selected"
        }else if(select.name === "to" && currcode === "INR"){
            newoption.selected = "selected"
        }
        select.append(newoption)
    }
    select.addEventListener("change",(evt)=>{
        updateFlage(evt.target);
    })
}

const updateExchangeRate = async()=>{
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = 1;
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`

    let response = await fetch(URL)
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]
    let total = amtVal * rate;

    msg.innerText = `${amtVal} ${fromCurr.value} = ${total} ${toCurr.value}`
    console.log(total)
}

const updateFlage = (evt)=>{
    let currcode = evt.value;
    let countryCode = CountryList[currcode]
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = evt.parentElement.querySelector("img")
    img.src = newsrc;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault()
    updateExchangeRate()
})



// const getData = async()=>{
//     let response = await fetch(BASE_URL);
//     console.log(response)
//     let data = await response.json();
//     console.log(data.usd.inr)
// }
