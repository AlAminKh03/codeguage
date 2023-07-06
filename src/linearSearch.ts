function linearSerach(
  arr: Array<string | number>,
  target: string | number
): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
linearSerach([3, 4, 16, 18, 97, 67, 2, 9, 0], 4);
