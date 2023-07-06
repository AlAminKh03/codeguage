function toUpperCase(str: string): string {
  const UPPERCASE_DIFFERENTIATIVE = -32;
  let ourStr = " ";
  for (let i = 0; i < str.length; i++) {
    if ("a" <= str[i] && str[i] <= "z") {
      ourStr += String.fromCharCode(
        str[i].charCodeAt(0) + UPPERCASE_DIFFERENTIATIVE
      );
    } else {
      ourStr += str[i];
    }
  }
  return ourStr;
}
// function strToUpper(str: string) {
//   const UPPERCASE_OFFSET = -32;
//   var uppercaseStr = "";

//   for (var i = 0; i < str.length; i++) {
// If the character is anything from lowercase 'a' to lowercase 'z',
// uppercase it.
//     if ("a" <= str[i] && str[i] <= "z") {
//       uppercaseStr += String.fromCharCode(
//         str[i].charCodeAt(0) + UPPERCASE_OFFSET
//       );
//     }

// Otherwise, use the character as it is.
//     else {
//       uppercaseStr += str[i];
//     }
//   }

//   return uppercaseStr;
// }
console.log(toUpperCase("hello, I am Al Amin Khan"));
