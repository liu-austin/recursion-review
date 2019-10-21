// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var unstringValues = ["undefined", "function"];

var stringifyJSON = function(obj) {
  // your code goes here
  var outputStr = '';
  var value;
  var converted;
  function convertToStr(element) {
    converted = '';
    if (Array.isArray(element)) {
        converted += '[';
      for (var i = 0; i < element.length; i++) {
        if (i === element.length - 1) {
          converted += convertToStr(element[i]);
        } else {
          converted += convertToStr(element[i]) + ',';
        }
      }
      converted += ']';
      return converted;
    } else if (typeof(element) === 'object' && element !== null) {

      var keys = [];
      for (var k in element) {
        if (!unstringValues.includes(typeof(element[k]))) {
          keys.push(k);
        }
      }

      converted += '{';
      for (var j = 0; j < keys.length; j++) {
        if (j === keys.length - 1) {
          converted += convertToStr(keys[j]) + ':' + convertToStr(element[keys[j]]);
        } else {
          converted += convertToStr(keys[j]) + ':' + convertToStr(element[keys[j]]) + ',';
        }
      }
      converted += '}';
      return converted;

    } else if (typeof(element) === 'number') {
      return String(element);
    } else if (typeof(element) === 'function') {
      return null;
    } else if (typeof(element) === 'string') {
      return '"' + element + '"';
    } else if (typeof(element) === 'boolean') {
      return String(element);
    } else if (typeof(element) === 'undefined') {
      return element;
    } else {
      return String(element);
    }
  }
  outputStr += convertToStr(obj);
  return outputStr;
};
