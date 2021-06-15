const myPromise = require('./promise.js')

const pp = new myPromise((resolve, reject) => {
  resolve(1)
});

pp.then(function(res) {
  console.log('res:', res);
})