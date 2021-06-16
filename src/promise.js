function myPromise(executor) {
  this.value = null;
  this.reason = null;
  this.status = 'pending';
  this.onResolvedCallbacks = [];
  this.onRejectedCallbacks = [];

  var self = this;

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'fulfilled';
      self.onResolvedCallbacks.forEach(fn => fn());
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected';
      self.onRejectedCallbacks.forEach(fn => fn());
    }
  }

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  let hasCalled;
  if (promise2 === x) {
    return reject(new TypeError('循环引用'));
  } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then;

      if (typeof then === 'function') {
        // x.then会触发getter
        // then.call(x) 不会触发getter
        then.call(
          x,
          y => {
            if (hasCalled) return;
            hasCalled = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          r => {
            if (hasCalled) return;
            hasCalled = true;
            reject(r);
          },
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (hasCalled) return;
      hasCalled = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
  // 每次调用then都必须返回一个全新的promise
  let promise2 = new myPromise((resolve, reject) => {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = function(x) {
        return x;
      };
    }
    if (typeof onRejected !== 'function') {
      onRejected = function(e) {
        throw e;
      };
    }

    if (this.status === 'fulfilled') {
      setTimeout(() => {
        try {
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      }, 0);
    }
    if (this.status === 'rejected') {
      setTimeout(() => {
        try {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      }, 0);
    }
    // setTimeout(() => { resolve('xxx') }, 1000)
    if (this.status === 'pending') {
      this.onResolvedCallbacks.push(() => {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      });
    }
  });

  return promise2;
};
myPromise.deferred = function () {
  var result = {};
  result.promise = new myPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}
module.exports = myPromise;
