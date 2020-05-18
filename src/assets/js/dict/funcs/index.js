import {
  removeDuplicates,
  TStoC,
  GtoK,
  VtoF,
  DtoT,
  ZtoS,
  BtoP,
  UtoY,
  EtoI,
  OtoA,
  IOtoI,
  normalize,
} from './for_cyr_metaphone';
export { jsonReader } from './jsonReader';
export { testWithRandomData } from './testWithRandomData';
export const toTransliteration = (string) => {
  let ruEngMatches = {
    // В соответствие с правилами международной телеграммы
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'j',
    з: 'z',
    и: 'i',
    й: 'i',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'sc',
    ъ: '',
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'iu',
    я: 'ia',
  };
  let newString = '';
  [...string].forEach((char) => {
    let newChar =
      // Если в объекте есть ключ, соответствующий очередной букве входной
      // Строки, то newChar присваивается значение, соответствующее
      // Этому ключу
      ruEngMatches[char] ||
      // Если в объекте отсутствует ключ, соответствующий очередной букве
      // Входной строки в нижнем регистре, то newChar присваивается этой букве.
      // Например, для Q, newChar становится равным Q
      (ruEngMatches[char.toLowerCase()] == undefined && char) ||
      // Если в объекте есть ключ, соответствующий очередной букве
      // Строки в нижнем регистре, то newChar присваивается значение,
      // Соответствующее этому ключу в верхнем регистре
      ruEngMatches[char.toLowerCase()].toUpperCase();
    newString += newChar;
  });
  return newString;
};
export const cyrMetaphone = (string) => {
  return removeDuplicates(
    TStoC(
      GtoK(
        VtoF(
          DtoT(
            ZtoS(
              BtoP(UtoY(EtoI(OtoA(IOtoI(removeDuplicates(normalize(string)))))))
            )
          )
        )
      )
    )
  );
};
export const normString = (string) => {
  return string
    .replace(/[\r?\n+]|[\\n\\n]/g, '')
    .replace(/['!"#$%&\\'()*+,\-./:;<=>?@[\\\]^_`{|}~']/g, '')
    .split(' ');
};
