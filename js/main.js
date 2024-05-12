'use strict'

// Prevent page reload at form submit
const formMain = document.getElementById('main-form');
console.log(formMain);

formMain.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log("Ho inviato il form");

}
)

// Age label

const yearsLabel = document.querySelector('.years-label');
const userAge = document.getElementById('user-age');

yearsLabel.innerText = userAge.value;

userAge.addEventListener('change', function (event) {
    yearsLabel.innerText = userAge.value;
})