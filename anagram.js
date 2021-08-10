const SIZE = 26;

const printCharWithFreq = (str) => {
  const n = str.length;
  const strTest = str.toUpperCase();

  let result = "";

  let freq = new Array(SIZE);
  for (let i = 0; i < freq.length; i++) {
    freq[i] = 0;
  }

  for (let i = 0; i < n; i++)
    freq[strTest[i].charCodeAt(0) - "A".charCodeAt(0)]++;

  for (let i = 0; i < SIZE; i++) {
    result += String.fromCharCode("A".charCodeAt(0) + i) + freq[i];
  }

  return result;
};

const anagramGrouping = (array) => {
  let result = [];
  let objects = {};

  for (let i = 0; i < array.length; i++) {
    const temp = printCharWithFreq(array[i]);
    if (objects[temp]) {
      objects[temp] = [...objects[temp], array[i]];
    } else {
      objects[temp] = [array[i]];
    }
  }

  for (subArr in objects) {
    result = [...result, objects[subArr]];
  }

  return result;
};

console.log(anagramGrouping(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']));

export default anagramGrouping;