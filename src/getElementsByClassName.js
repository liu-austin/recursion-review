// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var elementList = [];
  function checkClass(element) {
      if (element.classList && Array.prototype.slice.apply(element.classList).includes(className)) {
        elementList.push(element);
      }
      for (var index = 0; index < element.childNodes.length; index++) {
        checkClass(element.childNodes[index]);
      }
  }
  checkClass(document.body);
  return elementList;
};
