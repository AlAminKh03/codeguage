// let num: number = Number(prompt("please enter greater than 10"));

// if (num < 10) {
//   document.write("invalid number");
// }
let code: number = Number(prompt("Enter any http code"));
let msg: string;
switch (code) {
  case 200:
    msg = "Ok";
    break;
  case 300:
    msg = "Found";
    break;
  case 404:
    msg = "Not Found";
    break;
  case 500:
    msg = "Server Error";
    break;

  default:
    msg = "not a valid number";
    break;
}

document.write(code + " " + msg);
console.log(code + " " + msg);
