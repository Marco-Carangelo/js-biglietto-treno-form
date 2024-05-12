'use strict'

const formMain = document.getElementById('main-form');
console.log(formMain);

formMain.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log("Ho inviato il form");

}
)