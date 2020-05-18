// import { jsonReader } from './funcs';
import { testForSimilarityEntireData } from './testWordForSimilarity';
/* import { RU_DICTIONARY } from './env';
let obj = jsonReader(RU_DICTIONARY);
export const dictionary = obj; */
/**
 * @param data {string[]} Массив нормализованных слов
 * @param dictionary {{
    word: string;
    translit: string;
    metaphone: string;
    cyrMetaphone: string;
}[]} Словарь
 * @returns Массив слов с предложениями по исправлению
 */
export const spellCheck = (data, dictionary) => {
  return testForSimilarityEntireData(data, dictionary);
};
