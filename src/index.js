
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (!(matrix) || matrix == 0) {
  return []
}

  for (let i = 1; i < matrix.length; i++ );
  if (i % 2 == 1) {
    matrix[j].reverse();
  }
  return matrix(i).concat(matrix(j))
// return matrix.concat();

// return ([].concat(...matrix));
}



//it('Should return empty array if no params passed', () => {
//  assert.deepEqual(towelSort(), []);
// });

// it('Should return empty array if matrix is empty', () => {