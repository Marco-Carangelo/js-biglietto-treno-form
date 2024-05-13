'use strict'


// Age label

const yearsLabel = document.querySelector('.years-label');
const userAge = document.getElementById('user-age');

yearsLabel.innerText = userAge.value;

userAge.addEventListener('change', function (event) {
    yearsLabel.innerText = userAge.value;
})

// Prevent page reload at form submit and main function
const formMain = document.getElementById('main-form');
console.log(formMain);

formMain.addEventListener('submit', function (event) {
    event.preventDefault();

    //Variables definition
    const userDistance = document.getElementById('user-distance');
    const userAge = document.getElementById('user-age');
    const youngDiscount = 20;
    const seniorDiscount = 40;
    const kmPrice = 0.21;

    let price = 0;
    let discountPrint;

    //fullprice calculation

    price = userDistance.value * kmPrice;
    console.log(price);

    //Discount verification

    if (userAge.value < 18) {

        price -= (price * youngDiscount) / 100;
        console.log("L'utente ha diritto ad uno sconto del 20%");
        discountPrint = "L'utente ha diritto ad uno sconto del 20%."

    } else {
        if (userAge.value > 65) {

            price -= (price * seniorDiscount) / 100;
            console.log("L'utente ha diritto ad uno sconto del 40%");
            discountPrint = "L'utente ha diritto ad uno sconto del 40%."


        } else {

            console.log("L'utente non ha diritto a sconti");
            discountPrint = "L'utente non ha diritto a sconti."


        }
    }

    //Print result
    document.getElementById('discount-print').innerText = discountPrint;
    document.getElementById('result').innerHTML = price.toFixed(2) + '€';




    console.log(price);
});

