const toTitleCase = (str: string, wordsToRemove: string[] = []) => {
  if (!str) return '';
  const wordsToLowerCase = [
    'and',
    'or',
    'in',
    'on',
    'at',
    'to',
    'from',
    'by',
    'with',
    'as',
    'for',
    'of',
    'the',
    'a',
    'an',
    'is',
    'not',
  ];
  const wordsToTitleCase = ['dev', 'get', 'set'];
  const wordsToUpperCase = ['ui'];

  const regex = new RegExp(wordsToRemove.join('|'), 'g');
  return str
    ?.replace(/_/g, ' ')
    ?.replace(regex, '')
    ?.split(' ')
    ?.map((word) =>
      word.length > 3 || wordsToTitleCase.includes(word.toLowerCase())
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : wordsToUpperCase.includes(word.toLowerCase())
        ? word.toUpperCase()
        : wordsToLowerCase.includes(word.toLowerCase())
        ? word.toLowerCase()
        : word.toUpperCase()
    )
    ?.join(' ');
};

const commonUtils = {
  toTitleCase,
};

export default commonUtils;
