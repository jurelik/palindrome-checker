let palindrome = function(str) {
  let regex = /\W+|_+/g;
  let strClean = str.toLowerCase().replace(regex, "");
  let arr = strClean.split("");
  let revArr = [];
  let revStr;

  let alert = document.querySelector('#result');

  for (let i = 0; i < arr.length ; i++) {
    revArr.push(arr.slice(arr.length - 1 - i, arr.length - i));
  }
  revArr = revArr.flat();
  revStr = revArr.join("");
  // console.log(revStr);

  if (strClean.length === 0) {
    alert.textContent = "please enter text";
    return -1;
  }

  else if (strClean === revStr) {
    alert.textContent = `${strClean} is a palindrome!`;
    // console.log(true);
    return true;
  }
  alert.textContent = `${strClean} is not a palindrome.`;
  // console.log(false);
  return false;
}

let enterKey = document.querySelector('#word');

enterKey.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.querySelector('#check-btn').click();
  }
});

let removeFocus = function() {
  document.querySelector('#check-btn').blur();
}