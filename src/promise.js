function myPromise(executor) {
  this.value = null;
  this.reason = null;
  this.status = 'pending';

  var self = this;

  function resolve(value) {
    self.value = value;
    self.status = 'fulfilled';
  }

  function reject(reason) {
    self.reason = reason;
    self.status = 'rejected';
  }

  executor(resolve, reject);
}

myPromise.prototype.then = function (onResolved, onRejected) {
  if (typeof onResolved !== 'function') {
    onResolved = function(x) { return x };
  }
  if (typeof onRejected !== 'function') {
    onRejected = function(e) {throw e};
  }

  if (this.status === 'fulfilled') {
    onResolved(this.value)
  }
  if (this.status === 'rejected') {
    onRejected(this.reason);
  }
}

module.exports = myPromise