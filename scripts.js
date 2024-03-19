const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-value").value /*.value -> significa que é so o valor do input*/ 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //moeda real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moeda

    console.log(currencySelect.value)
    const dolarToday = 5.03
    const euroToday = 5.4
    const libraToday = 6.4
    const bitcoinToday = 341.509
    const realToday = 1

   if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
   }

   if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
   }

   if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-UK", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
   }

   if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
   }

   if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / realToday)
   }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
}

function changeCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/brasil.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)