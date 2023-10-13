var text = ""
const marquee = document.createElement('marquee')
var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-3nw0v3rlnohyxhe-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
.then(response => response.text())
.then(result => {
    const res = JSON.parse(result)
    text += " ******************* GOLD: $" + res.price.toFixed(2) + "" + res.currency + "----Low Price: $" + res.low_price.toFixed(2) + "----Gram 24k: $" + res.price_gram_24k.toFixed(2)
    marquee.textContent = text
    document.getElementById('marquee').appendChild(marquee)
    console.log(JSON.parse(result))
  })
  .catch(error => console.log('error', error));
fetch("https://www.goldapi.io/api/XAG/USD", requestOptions)
.then(response => response.text())
.then(result => {
    const res = JSON.parse(result)
    text += " ******************* SILVER: $" + res.price.toFixed(2) + "" + res.currency + "----Low Price: $" + res.low_price.toFixed(2) + "----Gram 24k: $" + res.price_gram_24k.toFixed(2)
    marquee.textContent = text
    document.getElementById('marquee').appendChild(marquee)
    console.log(JSON.parse(result))
  })
  .catch(error => console.log('error', error));
fetch("https://www.goldapi.io/api/XPT/USD", requestOptions)
.then(response => response.text())
.then(result => {
    const res = JSON.parse(result)
    text += " ******************* PLATINUM: $" + res.price.toFixed(2) + "" + res.currency + "----Low Price: $" + res.low_price.toFixed(2) + "----Gram 24k: $" + res.price_gram_24k.toFixed(2)
    marquee.textContent = text
    document.getElementById('marquee').appendChild(marquee)
    console.log(JSON.parse(result))
  })
  .catch(error => console.log('error', error));


