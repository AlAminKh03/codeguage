"use strict";
function letterFrequecny(str) {
    const CODE_LOWERCASE_A = "a".charCodeAt(0);
    let letterCounts = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
    ];
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if ("a" <= str[i] && "z" >= str[i]) {
            letterCounts[str[i].charCodeAt(0) - CODE_LOWERCASE_A]++;
        }
    }
    let output = "";
    for (let i = 0, len = letterCounts.length - 4; i < len; i += 4) {
        output +=
            `${String.fromCharCode(i + CODE_LOWERCASE_A)}: ${letterCounts[i]}    ` +
                `${String.fromCharCode(i + 1 + CODE_LOWERCASE_A)}: ${letterCounts[i + 1]}    ` +
                `${String.fromCharCode(i + 2 + CODE_LOWERCASE_A)}: ${letterCounts[i + 2]}    ` +
                `${String.fromCharCode(i + 3 + CODE_LOWERCASE_A)}: ${letterCounts[i + 3]}\n`;
    }
    output += `y: ${letterCounts[24]}    ` + `z: ${letterCounts[25]}`;
    console.log(output);
}
letterFrequecny("Hello, This is a test");
