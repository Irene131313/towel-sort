const arr = [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]];
module.exports = function towelSort (arr) {
if (arr === undefined) {
 return [] 
 }

 else if (arr.length === 0) {
  return []
  
 }
 else {
  let result =  arr.reduce((acc, cur, i) => {
    cur.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => acc.push(e));
    return acc;
  }, []);
  return result; 
 }
};