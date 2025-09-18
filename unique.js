function unique(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (result.indexOf(value) === -1) {
      result.push(value);
    }
  }
  return result;
}


const input = [1, 2, 2, 3, 4, 4, 5];
const output = unique(input);
console.log(output);