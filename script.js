function shortcut(s1, s2) {
    let result = "";

    // Loop through s1 to find the first non-space character
    for (let i = 0; i < s1.length; i++) {
        let currChar1 = s1[i];
        if (currChar1 !== " ") {
            result += currChar1;
            break; // You should break out of the loop once you find a non-space character
        }
    }

    // Loop through s2 to find the first non-space character
    for (let i = 0; i < s2.length; i++) {
        let currChar2 = s2[i];
        if (currChar2 !== " ") {
            result += currChar2;
            break; // You should break out of the loop once you find a non-space character
        }
    }

    // Check if the result is not " " (space) and return it, or return " "
    if (result !== " ") {
        return result;
    } else {
        return " ";
    }
}

// Example usage:
  

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
     