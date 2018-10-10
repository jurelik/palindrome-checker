let palindrome = function(str) {
  let regex = /\W+|_+/g;
  let strClean = str.toLowerCase().replace(regex, "");
  let arr = strClean.split("");
  let revArr = [];
  let revStr;

  for (let i = 0; i < arr.length ; i++) {
    // arr[i] = arr.splice(arr.length - 1 - i, 1, arr[i]).push;
    revArr.push(arr.slice(arr.length - 1 - i, arr.length - i));
  }
  revArr = revArr.flat();
  revStr = revArr.join("");
  console.log(revStr);

  if (strClean === revStr) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}

palindrome('race&&&_?/.\|{}-+=!!`~CAR');