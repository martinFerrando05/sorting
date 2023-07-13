describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it("un arreglo desordenado que termine ordenado", function(){
    expect(bubbleSort([4,2,5,3,1])).toEqual([1,2,3,4,5])
  })

  it("un arreglo ordenado que debe mantenerse ordenado", function () {
    expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4])
  })

  it("un arreglo a la inversa que termine ordenado", function () {
    expect(bubbleSort([4,3,2,1])).toEqual([1,2,3,4])
  })
});

// testing code
// testing code
describe('probando spies', function() {
  it('', function () {
    spyOn(window, 'swap').and.callThrough();
    const arreglo = [4,2,5,3,1]
  // la cantidad de veces q se invoca depende de que tan desordenado este el arreglo. 
    bubbleSort(arreglo)
    expect(window.swap.calls.count()).toEqual(7);
  });
});




