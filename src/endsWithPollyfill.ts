function endsWithPollyFill(
  str: string,
  subStr: string,
  limit: number = str.length
) {
  if (str.indexOf(subStr) + subStr.length - 1 === str.length - 1) return true;
  else return false;
}
console.log(endsWithPollyFill("Umbrella", "b", 3));
