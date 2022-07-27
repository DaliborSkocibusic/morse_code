import {
    alphabet,
    alphabetOneChar,
    alphabetTwoChar,
    alphabetThreeChar,
    alphabetFourChar,
} from "./constants.js";

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}

export const convertEnglishToMorse = (input) => {
    return input
        .split("")
        .map((value) => {
            {
                if (value === " ") {
                    return "/";
                } else {
                    return alphabet[value.toUpperCase()] ;
                }
            }
        })
        .join(" ");
};

export const convertMorseToEnglish = (input) => {
    let retStr = "";
    input.split(" ").forEach((element) => {
        if (element.length === 4) {
            retStr += getKeyByValue(alphabetFourChar, element);
        }

        if (element.length === 3) {
            retStr += getKeyByValue(alphabetThreeChar, element);
        }

        if (element.length === 2) {
            retStr += getKeyByValue(alphabetTwoChar, element);
        }

        if (element.length === 1) {
            retStr += getKeyByValue(alphabetOneChar, element);
        }
    });

    return retStr;
};

export default convertEnglishToMorse;
