const removeFromArray = function (arr, ...element) {
  for (let i = 0; i < element.length; i++) {
    removeElementFromArray(arr, element[i]);
  }
  return arr;
};

function removeElementFromArray(arr, element) {
  if (arr.includes(element)) {
    let indexOfElement = arr.indexOf(element);
    arr.splice(indexOfElement, 1);
  }
}

module.exports = removeFromArray;