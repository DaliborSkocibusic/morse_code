import convertEnglishToMorse, {
    convertMorseToEnglish,
} from "./Modules/Translator.js";
// import { convertSingleEnglishLetterToMorse } from "./script";

// Describe block
// Allows us to group tests together

describe("Tests for correct English to Morse translation", () => {
    // also same as test(). it() === test()
    // // CORRECT FORMATTING
    test("Should have the following values as output", () => {
        expect(convertEnglishToMorse("A")).toBe(".-");
    });
    test("Should have the following values as output", () => {
        expect(convertEnglishToMorse("G")).toBe("--.");
    });
    test("Should have the following values as output", () => {
        expect(convertEnglishToMorse("Z")).toBe("--..");
    });

    test("Should have the following values as output", () => {
        expect(convertEnglishToMorse("Lorem ipsum dolor sit amet")).toBe(
            ".-.. --- .-. . -- / .. .--. ... ..- -- / -.. --- .-.. --- .-. / ... .. - / .- -- . -",
        );
    });
});

describe("Tests for correct Morse to English translation", () => {
    test("Should have the following values as output", () => {
        expect(convertMorseToEnglish(".-")).toBe("A");
    });
    test("Should have the following values as output", () => {
        expect(convertMorseToEnglish("--.")).toBe("G");
    });
    test("Should have the following values as output", () => {
        expect(
            convertMorseToEnglish(
                ".-.. --- .-. . -- / .. .--. ... ..- -- / -.. --- .-.. --- .-. / ... .. - / .- -- . - / ... --- -- . / -- --- .-. . / .-- --- .-. -.. ...",
            ),
        ).toBe("Lorem ipsum dolor sit amet some more words".toUpperCase());
    });
});
