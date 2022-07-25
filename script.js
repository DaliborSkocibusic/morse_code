// Once Char Morse
const TMorse = "-";
const EMorse = ".";
const SpaceMorse = "/";

// Two Char Morse
const AMorse = ".-";
const IMorse = "..";
const MMorse = "--";
const NMorse = "-.";

// Three Char Morse
const DMorse = "-..";
const GMorse = "--.";
const KMorse = "-.-";
const OMorse = "---";
const RMorse = ".-.";
const SMorse = "...";
const WMorse = ".--";
const UMorse = "..-";

// 4 Char Morse
const BMorse = "-...";
const QMorse = "--.-";
const PMorse = ".--.";
const LMorse = ".-..";
const JMorse = ".---";
const HMorse = "....";
const FMorse = "..-.";
const CMorse = "-.-.";
const VMorse = "...-";
const XMorse = "-..-";
const YMorse = "-.--";
const ZMorse = "--..";

let convertedText = "";

let inputText = document.getElementById("inputText");
inputText.addEventListener("click", () => {
    // console.log(inputText.value);
});

let result = document.getElementById("result");

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    if (engMorse.value == "Morse->English") {
        result.innerHTML = convertMorseToEnglish(inputText.value); //
    } else if (engMorse.value == "English->Morse") {
        // console.log("calling english to morse on: " + inputText.value);

        result.innerHTML = convertEnglishToMorse(inputText.value);
    }

    // console.log("Input is " + inputText.value);
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

    // console.log("input for converrt E to M is " + input + typeof input);
    input = input.split("");

    for (let i = 0; i < input.length; i++) {
        retStr += convertSingleEnglishLetterToMorse(input[i]);
        // console.log("converted " + retStr);
        // console.log("Loopingthsi time" + retStr + " " + i);
        // console.log("input legnth is " + input);

        // Adding spaces
        if (i !== input.length - 1) {
            retStr += " ";
        }
    }
    // console.log("Returning this is " + retStr);
    return retStr;
};

const convertSingleEnglishLetterToMorse = (input) => {
    let retStr = "";
    switch (input) {
        case "A":
            return AMorse;

        case "a":
            return AMorse;

        case "B":
            return BMorse;

        case "b":
            return BMorse;

        case "C":
            return CMorse;

        case "c":
            return CMorse;

        case "D":
            return DMorse;

        case "d":
            return DMorse;

        case "E":
            return EMorse;

        case "e":
            return EMorse;

        case "F":
            return FMorse;

        case "f":
            return FMorse;

        case "G":
            return GMorse;

        case "g":
            return GMorse;

        case "H":
            return HMorse;

        case "h":
            return HMorse;

        case "I":
            return IMorse;

        case "i":
            return IMorse;

        case "J":
            return JMorse;

        case "j":
            return JMorse;

        case "K":
            return KMorse;

        case "k":
            return KMorse;

        case "L":
            return LMorse;

        case "l":
            return LMorse;

        case "M":
            return MMorse;

        case "m":
            return MMorse;

        case "N":
            return NMorse;

        case "n":
            return NMorse;

        case "O":
            return OMorse;

        case "o":
            return OMorse;

        case "P":
            return PMorse;

        case "p":
            return PMorse;

        case "Q":
            return QMorse;

        case "q":
            return QMorse;

        case "R":
            return RMorse;

        case "r":
            return RMorse;

        case "S":
            return SMorse;

        case "s":
            return SMorse;

        case "T":
            return TMorse;

        case "t":
            return TMorse;

        case "U":
            return UMorse;

        case "u":
            return UMorse;

        case "V":
            return VMorse;

        case "v":
            return VMorse;

        case "W":
            return WMorse;

        case "w":
            return WMorse;

        case "X":
            return XMorse;

        case "x":
            return XMorse;

        case "Y":
            return YMorse;

        case "y":
            return YMorse;

        case "Z":
            return ZMorse;

        case "z":
            return ZMorse;

        case " ":
            return SpaceMorse;

        default:
            return "";
    }
};

const convertMorseToEnglish = (input) => {
    let retStr = "";
    let iter = input.length;

    // console.log(
    //     "input for convert from Morse to English is " +
    //         input +
    //         " " +
    //         typeof input,
    // );

    input = input.split(" ");
    console.log("Input into loop is " + input);
    console.log("Input1 into loop is " + input[0]);
    console.log("Input2 into loop is " + input[1]);
    console.log("Input3 into loop is " + input[2]);

    // while (iter >= 0) {
    let parseMorse = "";
    let escSqInc = 0;

    // fourCharacters = input.slice(0, 4);
    // console.log("Four characters is " + fourCharacters);
    // threeCharacters = input.slice(0, 3);
    // twoCharacters = input.slice(0, 2);
    // oneCharacter = input.slice(0, 1);
    input.forEach((element) => {
        console.log("Input " + element);

        if (element.length === 4) {
            console.log("Get 4 called");
            retStr += getFourCharacterMorse(element);
            console.log("returned this " + retStr);
        }

        if (element.length === 3) {
            console.log("Get 3 called");
            console.log("returned this " + retStr);
            retStr += getThreeCharacterMorse(element);
        }

        if (element.length === 2) {
            console.log("Get 2 called");
            retStr += getTwoCharacterMorse(element);
            console.log("returned this " + retStr);
        }

        if (element.length === 1) {
            console.log("Get 1 called");
            retStr += getOneCharacterMorse(element);
            console.log("returned this " + retStr);
        }
    });
    // while (input[escSqInc] !== "," && escSqInc < input.length) {

    // escSqInc += 1;
    // console.log("Parese Morse is " + parseMorse);
    // // console.log(" Loop no is " + escSqInc);
    // console.log("Input b4 slicing " + input);

    // }

    // console.log("Input hase been sliced it is now " + input);

    // console.log("Loop exited it we are testing this string" + parseMorse);

    // if (getOneCharacterMorse(oneCharacter)) {
    //     input = input.slice(2, input.length);
    //     if (getOneCharacterMorse(oneCharacter)) {
    //         retStr += getOneCharacterMorse(oneCharacter);
    //     }
    //     console.log("Got this letter g2s " + retStr);
    //     console.log("Input now is " + input);
    // } else if (getTwoCharacterMorse(twoCharacters)) {
    //     input = input.slice(2, input.length);
    //     if (getTwoCharacterMorse(twoCharacters)) {
    //         retStr += getTwoCharacterMorse(twoCharacters);
    //     }
    //     console.log("Got this letter g2s " + retStr);
    //     console.log("Input now is " + input);
    // } else if (getThreeCharacterMorse(threeCharacters)) {
    //     input = input.slice(3, input.length);
    //     if (getThreeCharacterMorse(threeCharacters)) {
    //         retStr += getThreeCharacterMorse(threeCharacters);
    //     }
    //     console.log("Got this letter g3s" + retStr);
    //     console.log("Input now is " + input);
    // } else if (getFourCharacterMorse(fourCharacters)) {
    //     input = input.slice(4, input.length);
    //     if (getFourCharacterMorse(fourCharacters)) {
    //         retStr += getFourCharacterMorse(fourCharacters);
    //     }
    //     console.log("Got this letter g4s " + retStr);
    //     console.log("Input now is " + input);
    // }

    // iter--;

    // if (iter == 0) {
    //     console.log("Iter broke");
    //     break;
    // }

    // break;

    // retStr += input;
    // console.log("Loopingthsi time" + retStr + " " + i);
    // console.log("input legnth is " + input);
    console.log("Returning this is " + retStr);
    return retStr;
};
// };

const getFourCharacterMorse = (input) => {
    switch (input) {
        case BMorse:
            return "B";
        case QMorse:
            return "Q";
        case PMorse:
            return "P";
        case LMorse:
            return "L";
        case JMorse:
            return "J";
        case HMorse:
            return "H";
        case FMorse:
            return "F";
        case CMorse:
            return "C";
        case VMorse:
            return "V";
        case XMorse:
            return "X";
        case YMorse:
            return "Y";
        case ZMorse:
            return "Z";
        default:
            return false;
    }
};

const getThreeCharacterMorse = (input) => {
    switch (input) {
        case DMorse:
            return "D";
        case GMorse:
            return "G";
        case KMorse:
            return "K";
        case OMorse:
            return "O";
        case RMorse:
            return "R";
        case SMorse:
            return "S";
        case WMorse:
            return "W";
        case UMorse:
            return "U";
        default:
            return false;
    }
};

const getTwoCharacterMorse = (input) => {
    switch (input) {
        case AMorse:
            return "A";
        case IMorse:
            return "I";
        case MMorse:
            return "M";
        case NMorse:
            return "N";
        default:
            return false;
    }
};

const getOneCharacterMorse = (input) => {
    switch (input) {
        case TMorse:
            return "T";
        case EMorse:
            return "E";
        case SpaceMorse:
            return " ";
        default:
            return false;
    }
};
