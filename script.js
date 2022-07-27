import {
    alphabet,
    alphabetOneChar,
    alphabetTwoChar,
    alphabetThreeChar,
    alphabetFourChar,
} from "./Modules/constants.js";
import { convertEnglishToMorse } from "./Modules/Translator.js";
import { convertMorseToEnglish } from "./Modules/Translator.js";

// console.log(alphabet);
const updateErrorMessage = () => {
    let errorStringE2M = inputText.value.match(/[^A-Za-z ]+/g);
    let errorStringM2E = inputText.value.match(/[^-. /]+/g);

    if (errorStringE2M !== null && engMorse.value == "English->Morse") {
        errorText.innerHTML = errorStringE2M;
    } else if (errorStringM2E !== null && engMorse.value == "Morse->English") {
        errorText.innerHTML = errorStringM2E;
    } else {
        errorText.innerHTML = "No invalid values entered";
    }

    console.log("Error StringM2E: " + errorStringM2E);
    console.log("inputText: " + inputText.value);
    console.log("inputText type: " + typeof inputText.value);
};
let inputText = document.getElementById("inputText");
inputText.addEventListener("click", () => {});

let result = document.getElementById("result");
let errorText = document.getElementById("error");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if (engMorse.value == "Morse->English") {
        result.innerHTML = convertMorseToEnglish(inputText.value); //
    } else if (engMorse.value == "English->Morse") {
        result.innerHTML = convertEnglishToMorse(inputText.value);
    }
    updateErrorMessage();
});

let engMorse = document.getElementById("engMorse");

engMorse.addEventListener("click", () => {
    if (engMorse.value == "Morse->English") {
        engMorse.value = "English->Morse";
    } else if (engMorse.value == "English->Morse") {
        engMorse.value = "Morse->English";
    }
    updateErrorMessage();
});

// Some responsivesnes to not procesed characters
// i .e. cant work on the followign characters &
// Interactive buttons change cursor, change color
// Reduce turns an array into another type...
// array combinators are iterators
