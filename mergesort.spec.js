describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    let array = [2, 5, 6, 4, 3, 5, 8, 6, 4, 3, 4];

    expect(split(array)).toEqual([
      [2, 5, 6, 4, 3],
      [5, 8, 6, 4, 3, 4],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    let arr1 = [4, 6, 7, 8];
    let arr2 = [1, 2, 3, 5];

    expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe("MergeSort", function () {
  it("usa split y merge para desarmar el arreglo y ordenarlo correctamente", function () {
    let array = [7, 5, 3, 1, 8, 2, 4, 6];

    expect(mergeSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});