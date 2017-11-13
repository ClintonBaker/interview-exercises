const pal1 = 'Sore was I ere I saw Eros';
const pal2 = 'Referrer';
const pal3 = 'NotApnlindrome';
const pal4 = 'Heh';

const secLongestPal = (pal) => {
  pal = pal.toLowerCase();
  let firstPal = nextPal(pal);
  //Checks to make sure there is a first Palindrome before checking for a second one
  let secondPal = firstPal ? nextPal(firstPal.slice(0, firstPal.length-1)) : undefined;

  return secondPal ? 'Found Palindrome: ' + secondPal : firstPal ? 'No second Palindrome exists' : 'No Palindrome exists';
}

const nextPal = (pal) =>{
  for(let x = pal.length; x >= 2; x--){
    //Scans the string for a palindrome, getting one character shorter each time
    for(let y = 0; y < (pal.length - x); y++){
      let tempPal = pal.slice(y,x+1+y);
      if(checkPal(tempPal)) return tempPal;
    }
  }
  return undefined;
}
const checkPal = (pal) =>{
  for(let i = 0; i <= pal.length/2; i++){
    if(pal[i] !== pal[pal.length-1-i]) return false;
  }
  return true;
}

console.log(secLongestPal(pal1));
console.log(secLongestPal(pal2));
console.log(secLongestPal(pal3));
console.log(secLongestPal(pal4));
