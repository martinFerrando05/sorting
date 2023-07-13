function split(wholeArray) {
  let length = wholeArray.length;
  let firstHalf = wholeArray.splice(0, length / 2);
  let secondHalf = wholeArray;
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      newArr.push(firstHalf[i]);
      i++;
    } else {
      newArr.push(secondHalf[j]);
      j++;
    }
  }
  while (j < secondHalf.length) {
    newArr.push(secondHalf[j]);
    j++;
  }
  while (i < firstHalf.length) {
    newArr.push(firstHalf[i]);
    i++;
  }
  console.log(newArr);
  return newArr;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let [primeraMitad, segundaMitad] = split(array);
  let primeraMitadOrdenada = mergeSort(primeraMitad);
  let segundaMitadOrdenada = mergeSort(segundaMitad);
  // console.log(primeraMitadOrdenada, segundaMitadOrdenada);
  return merge(primeraMitadOrdenada, segundaMitadOrdenada);
}