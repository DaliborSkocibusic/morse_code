import { convertMorseToEnglish } from "./script";
import { convertSingleEnglishLetterToMorse } from "./script";

// Describe block
// Allows us to group tests together

describe("Tests for correct Morse Code output", () => {
    // also same as test(). it() === test()
    // // CORRECT FORMATTING
    test("Should have the followign values as output", () => {
        expect(() => {
            convertMorseToEnglish("A");
        }).toBe(".-");
    });
});
