function bubbleSort(array = []) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(arr, i, j) {
  /* tu codigo acá */
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
