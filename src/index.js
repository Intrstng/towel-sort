
// You should implement your task here.

module.exports = function towelSort (matrix) {

if (matrix === undefined || matrix.length == 0) return [];
else {
    return matrix.reduce((newArr, current, index) => {
        let  arr2 = (index % 2 === 0) ? current : [...current].reverse();
        return [...newArr, ...arr2];      
       }, []);
      };
}
