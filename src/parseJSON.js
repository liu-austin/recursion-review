// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var returnObj = objectOrArray(json);
  function parser(string) {
    var sliceAt = 0;
    if (string[sliceAt] === '"') {
      sliceAt += 1;
      while (string[sliceAt] !== '"') {
        sliceAt += 1;
      }
      returnObj.push(string.slice(0, sliceAt + 1));
    }
  }

  function objectOrArray(string) {
    if (string[0] === '[' && string[string.length - 1] === ']') {
      return [];
    } else if (string[0] === '{' && string[string.length - 1] === '}') {
      return {};
    } else {
      throw 'SyntaxError';
    }
  }


};
