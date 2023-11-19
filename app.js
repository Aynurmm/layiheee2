
 let inp1 = document.querySelector(".inp1");
 let inp2 = document.querySelector(".inp2");
 let span1=document.querySelector(".classSpan1");
 let span2=document.querySelector(".classSpan2")
 let b = document.querySelector("button.active");
let buttons1 = document.querySelectorAll(".btnAll1 button");
let buttons2 = document.querySelectorAll(".btnAll2 button");


  
 function validateInput(input) {
  input.value = input.value.replace(/[^0-9.]/g, '');
}

const apiKey="B4x61W7Z4zwIT1MhLlqbbtapOnzCMa8X";
const apiUrl="https://api.currencybeacon.com/v1/convert"
let fromCurrency="RUB"
let toCurrency="USD"

inp1.addEventListener("input", function () {
  const amount1 = inp1.value;
  const apiUrl1 = `${apiUrl}?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount1}`;
  fetch(apiUrl1)
    .then((res) => res.json())
    .then((data) => {
      inp2.value = data.value.toFixed(4);
      if (inp1.value === "") {
        inp2.value = "";
      }
      console.log(data);
    });
});

inp2.addEventListener('input' , function(){
  const amount2=inp2.value
  const apiUrl2=`${apiUrl}?api_key=${apiKey}&from=${toCurrency}&to=${fromCurrency}&amount=${amount2}`
  fetch(apiUrl2)
  .then(res=>res.json())
  .then(data=>{
    inp1.value=data.value.toFixed(4);
    if(inp2.value===""){
      inp1.value=""
    }
    console.log(data)
  })
})
buttons1.forEach((button)=>{
 button.addEventListener("click",()=>{
  buttons1.forEach((btn) => {
    btn.classList.remove("active");
    });
    button.classList.add("active");
  fromCurrency=button.innerText;
  const amount3=inp2.value;
  const apiUrl3=`${apiUrl}?api_key=${apiKey}&from=${toCurrency}&to=${fromCurrency}&amount=${amount3}`
  fetch(apiUrl3)
  .then(res=>res.json())
  .then(data=>{
    inp1.value=data.value.toFixed(4);
    if(inp2.value===""){
      inp1.value=""
    }
    console.log(data);
  })
 })
})

buttons2.forEach((button)=>{
  button.addEventListener("click",()=>{
    buttons2.forEach((btn) => {
      btn.classList.remove("active2");
      });
      button.classList.add("active2");
    toCurrency=button.innerText
    const amount4=inp1.value;
    const apiUrl4=`${apiUrl}?api_key${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount4}`;
    fetch(apiUrl4)
    .then(res=>res.json())
    .then(data=>{
      inp2.value=data.value.toFixed(4);
      if(inp1.value===""){
        inp2.value=""
      }
      console.log(data)
    })

  })
})
const apiUrl5 = `${apiUrl}?api_key=${apiKey}&from=RUB&to=USD&amount=${1}`;  
        fetch(apiUrl5)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        span1.innerText = `1 RUB = ${data.value} USD`
})

    const apiUrl6 = `${apiUrl}?api_key=${apiKey}&from=USD&to=RUB&amount=${1}`;  
    fetch(apiUrl6)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    span2.innerText = `1 USD = ${data.value} RUB`
})



buttons1.forEach(button=> {
    button.addEventListener('click', () => {
         fromCurrency = button.innerText;
        const apiUrl7= `${apiUrl}?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${1}`;
        fetch(apiUrl7)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                span1.innerText = `1 ${fromCurrency} = ${data.value} ${toCurrency}`
            });
        const apiUrl8 = `${apiUrl}?api_key=${apiKey}&from=${toCurrency}&to=${fromCurrency}&amount=${1}`;

            fetch(apiUrl8)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                span2.innerText = `1 ${toCurrency} = ${data.value} ${fromCurrency}`
            });
    });
});

buttons2.forEach((button) => {
  button.addEventListener("click", () => {
    toCurrency = button.innerText;
    // const amount4=inp1.value
    const apiUrl9= `${apiUrl}?api_key=${apiKey}&from=${toCurrency}&to=${fromCurrency}&amount=${1}`;
    fetch(apiUrl9)
      .then((res) => res.json())
      .then((data) => {
        inp2.value = data.value.toFixed(4);
        if (inp1.value === "") {
          inp2.value = "";
        }
        console.log(data);
        span1.innerText = `1 ${toCurrency} = ${data.value} ${fromCurrency}`

      });
      const apiUrl10 = `${apiUrl}?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${1}`;

            fetch(apiUrl10)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                span2.innerText = `1 ${fromCurrency} = ${data.value} ${toCurrency}`
                
  });
});
});