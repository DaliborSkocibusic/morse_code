const AMorse = ".-";
const BMorse = "-...";
const CMorse = "-.-.";
const DMorse = "-..";
const EMorse = ".";
const FMorse = "..-.";
const GMorse = "--.";
const HMorse = "....";
const IMorse = "..";
const JMorse = ".---";
const KMorse = "-.-";
const LMorse = ".-..";
const MMorse = "--";
const NMorse = "-.";
const OMorse = "---";
const PMorse = ".--.";
const QMorse = "--.-";
const RMorse = ".-.";
const SMorse = "...";
const TMorse = "-";
const UMorse = "..-";
const VMorse = "...-";
const WMorse = ".--";
const XMorse = "-..-";
const YMorse = "-.--";
const ZMorse = "--..";
const SpaceMorse = "/";

let convertedText = "";

let inputText = document.getElementById("inputText");
inputText.addEventListener("click", () => {
    console.log(inputText.value);
});

let result = document.getElementById("result");

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    if (engMorse.value == "Morse->English") {
        result.innerHTML = convertEnglishToMorse(inputText.value); //
    } else if (engMorse.value == "English->Morse") {
        result.innerHTML = convertMorseToEnglish(inputText.value);
    }

    console.log("Input is " + inputText.value);
});

let engMorse = document.getElementById("engMorse");
engMorse.addEventListener("click", () => {
    // engMorse.value == "English->Morse";
    if (engMorse.value == "Morse->English") {
        engMorse.value = "English->Morse";
    } else if (engMorse.value == "English->Morse") {
        engMorse.value = "Morse->English";
    }
});

const convertEnglishToMorse = (input) => {
    let retStr = "";

    switch (input) {
        case "A":
            retStr += AMorse;
    }

    return retStr;
};

const convertMorseToEnglish = (input) => {
    let retStr = "";

    switch (input) {
        case AMorse:
            retStr += "A";
    }

    return retStr;
};
