function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; 
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone); 
  }

  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]); 
    }
  }
  return clonedObj;
}
const original = {
  name: 'Alice',
  details: {
    age: 25,
    hobbies: ['reading', 'swimming']
  }
};

const copy = deepClone(original);
copy.details.age = 30;
copy.details.hobbies.push('cycling');

console.log('Original age:', original.details.age); // 25 (unchanged)
console.log('Copied age:', copy.details.age); // 30 (changed)
console.log('Original hobbies:', original.details.hobbies); // ['reading', 'swimming'] (unchanged)
console.log('Copied hobbies:', copy.details.hobbies); // ['reading', 'swimming', 'cycling'] (changed)