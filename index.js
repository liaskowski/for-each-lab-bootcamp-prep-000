function iterativeLog(array) {
  array.forEach(index => {
    console.log(`${index - 1}: ${array[index-1]}`);
  })
}

function iterate(callback) {
  var array = [1, 2, 3, 4, 5];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
