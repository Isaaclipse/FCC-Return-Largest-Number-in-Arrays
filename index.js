function largestOfFour(arr) {
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
    let largestNumber = arr[i][0];
    for(var j = 0; j < arr[i].length; j++){
      if (arr[i][j] > largestNumber){
          largestNumber = arr[i][j];
      }
      }
       newArray[i] = largestNumber;
    }
    arr = newArray
  return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);