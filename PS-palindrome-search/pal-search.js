const pal1 = "Sore was I ere I saw Eros";
const pal2 = "Referrer";
const pal3 = "NotApnlindrome";
const pal4 = "Heh";

const secLongestPal = pal => {
  pal = pal.toLowerCase();
  const pals = [];

  //Scans the string for a palindrome, getting one character shorter each time
  for (let x = pal.length; x >= 2; x--) {
    for (let y = 0; y < pal.length - x; y++) {
      if (pals.length > 1) {
        break;
      } else {
        let tempPal = pal.slice(y, x + 1 + y);
        if (checkPal(tempPal)) pals.push(tempPal);
      }
    }
  }

  return !pals.length
    ? "No Palindrome Exists"
    : pals.length === 1
      ? "No second Palindrome exists"
      : "Found Palindrome: " + pals[1];
};

const checkPal = pal => {
  const firstHalf = pal.slice(0, pal.length / 2);
  const secondHalf = pal.slice(Math.ceil(pal.length / 2));
  return secondHalf.search(reverse(firstHalf)) >= 0 
    ? true 
    : false;
};

const reverse = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

console.log(secLongestPal(pal1));
console.log(secLongestPal(pal2));
console.log(secLongestPal(pal3));
console.log(secLongestPal(pal4));
