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
  console.log(revStr);

  if (strClean === revStr) {
    alert.textContent = 'true';
    console.log(true);
    return true;
  }
  alert.textContent = 'false';
  console.log(false);
  return false;
}