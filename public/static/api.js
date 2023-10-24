var text = ""
const marquee = document.createElement('p')
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
    if (!res.error)
      text += " ******************* GOLD: $" + res.price.toFixed(2) + "" + res.currency + "----Low Price: $" + res.low_price.toFixed(2) + "----Gram 24k: $" + res.price_gram_24k.toFixed(2)
    else 
      text = "Gold Prices not available!"
    
    marquee.textContent = text
    document.getElementById('marquee').appendChild(marquee)
  })
  .catch(error => {
    marquee.textContent = error
    document.getElementById('marquee').appendChild(marquee)
  });

fetch("https://www.goldapi.io/api/XAG/USD", requestOptions)
.then(response => response.text())
.then(result => {
    const res = JSON.parse(result)
    if (!res.error)
      text += " ******************* SILVER: $" + res.price.toFixed(2) + "" + res.currency + "----Low Price: $" + res.low_price.toFixed(2) + "----Gram 24k: $" + res.price_gram_24k.toFixed(2)
    else 
      text = "Gold Prices not available!"
    
    marquee.textContent = text
    document.getElementById('marquee').appendChild(marquee)
  })
  .catch(error => {
    marquee.textContent = error
    document.getElementById('marquee').appendChild(marquee)
  });

fetch("https://www.goldapi.io/api/XPT/USD", requestOptions)
.then(response => response.text())
.then(result => {
    const res = JSON.parse(result)
    if (!res.error)
      text += " ******************* PLATINUM: $" + res.price.toFixed(2) + "" + res.currency + "----Low Price: $" + res.low_price.toFixed(2) + "----Gram 24k: $" + res.price_gram_24k.toFixed(2)
    else 
      text = "Gold Prices not available!"
    
    marquee.textContent = text
    document.getElementById('marquee').appendChild(marquee)
  })
  .catch(error => {
    marquee.textContent = error
    document.getElementById('marquee').appendChild(marquee)
  });


