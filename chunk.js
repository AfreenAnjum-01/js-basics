function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const chunks = chunkArray(originalArray, chunkSize);

console.log(chunks);
