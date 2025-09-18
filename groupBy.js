function groupBy(arr, key) {
  const result = {};
  for (let item of arr) {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
}

const data = [
  { name: "Alice", role: "dev" },
  { name: "Bob", role: "designer" },
  { name: "Charlie", role: "dev" }
];

console.log(groupBy(data, "role"));

