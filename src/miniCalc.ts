function miniCalc(a: number, b: number, c: string | null): string {
  let result: number;
  switch (c) {
    case "a":
      result = a + b;
      return `${a} + ${b}= ${result}`;
    case "s":
      result = a - b;
      return `${a} - ${b}= ${result}`;
    case "d":
      result = a / b;
      return `${a} / ${b}= ${result}`;
    case "m":
      result = a * b;
      return `${a} * ${b}= ${result}`;
    case "p":
      result = a ** b;
      return `${a} ** ${b}= ${result}`;

    default:
      return "unknown operator";
  }
}

let a = Number(prompt("insert first number"));
let b = Number(prompt("insert second number"));
let c = prompt("insert operation letter");

console.log(miniCalc(a, b, c));
