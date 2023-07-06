function not(str: string): string {
  let invertedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      invertedStr += "1";
    } else {
      invertedStr += "0";
    }
  }
  return invertedStr;
}

console.log(not("101011"));
