function toTitleCase(str: string): string {
  const arrayStr = str.split(" ");
  for (let i = 0; i < arrayStr.length; i++) {
    arrayStr[i] =
      arrayStr[i] && arrayStr[i][0].toUpperCase() + arrayStr[i].slice(1);
  }
  let titleCasedStr = arrayStr[0];
  for (let i = 0; i < arrayStr.length; i++) {
    titleCasedStr += " " + arrayStr[i];
  }
  return titleCasedStr;
}
console.log(toTitleCase(" "));
