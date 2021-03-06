const init = require('./init');
const utils = require('../utils');

/**
 * Function for recursive linear search algo
 * @param {array} array - which should be treated
 * @param {number} searchValue - which should be searched
 * @param {number} index - current index
 * @return {*}
 */
const getSearchResult = (array, searchValue, index = 0) => {
  if (index > array.length) {
    return null;
  } else if (array[index] === searchValue) {
    return index;
  }

  return getSearchResult(array, searchValue, index + 1);
};

/**
 * Recursive linear search wrapper
 * @param {array} array - which should be treated
 * @param {number} searchValue - which should be searched
 * @return {*}
 */
const recursiveLinearSearch = (array, searchValue) => {
  const newArray = Array.from(array);
  const time = process.hrtime();
  const result = {
    algoName: 'Recursive Linear search',
    initial: array.length,
  };
  const searchRes = getSearchResult(newArray, searchValue, 0);

  if (searchRes) {
    return Object.assign({}, result, {
      spentTime: utils.calculateTime(time),
      message: utils.showResult(searchRes, time),
      foundedIndex: searchRes,
      foundedValue: searchValue,
    });
  }

  return Object.assign({}, result, {
    spentTime: utils.calculateTime(time),
    message: utils.showResult(null, time),
    foundedIndex: null,
    foundedValue: null,
  });
};

init(recursiveLinearSearch);
