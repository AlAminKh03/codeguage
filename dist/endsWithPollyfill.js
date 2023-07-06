"use strict";
function endsWithPollyFill(str, subStr, limit = str.length) {
    if (str.indexOf(subStr) + subStr.length - 1 === str.length - 1)
        return true;
    else
        return false;
}
console.log(endsWithPollyFill("Umbrella", "b", 3));
