(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['ConsoleHooker'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['ConsoleHooker'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  return function (callback) {
    const original = console.log;
    console.log = function (...args) {
      if (typeof callback === 'function') {
        callback(...args);
      }
      original.apply(console, args);
    };
    const restore = function restore() {
      console.log = original;
    };
    return { restore, original };
  };

});