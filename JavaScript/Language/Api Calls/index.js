const URL = "https://uselessfacts.jsph.pl/api/v2/facts/random"
const useless = document.querySelector("#heloo")
const btn = document.querySelector("#get")
const getData = async () => {
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json()
    console.log(data.text)
    useless.innerText = data.text
}
btn.addEventListener('click',getData)