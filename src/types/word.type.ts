interface Pronunciation {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
        name: string;
        url: string;
    };
}

interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

export interface WordData {
    word: string;
    phonetic: string;
    phonetics: Pronunciation[];
    meanings: Meaning[];
    license: {
        name: string;
        url: string;
    };
    sourceUrls: string[];
}