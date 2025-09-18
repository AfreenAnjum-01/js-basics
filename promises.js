function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = []
    let completed = 0

    if (promises.length === 0) {
      resolve(results)
      return
    }

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(value => {
          results[index] = value
          completed++
          if (completed === promises.length) {
            resolve(results)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  })
}
const p1 = Promise.resolve(10)
const p2 = new Promise(resolve => setTimeout(() => resolve(20), 500))
const p3 = 30 // non-promise value

myPromiseAll([p1, p2, p3])
  .then(results => {
    console.log('Results:', results)
  })
  .catch(error => {
    console.error('Failed:', error)
  })



