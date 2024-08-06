///////////////////////// solution 2 /////////////////////////////////
/*function StringChallenge(sen) {
  const words = sen.match(/\b\w+\b/g);
  let emptystr = '';
  for (let word of words) {
    if (word.length > emptystr.length) {
      emptystr = word;
    }
  }
  const ChallengeToken = 'd5yv7mah9210';
  let finalOutput = '';
  for (let char of emptystr) {
    if (!ChallengeToken.toLowerCase().includes(char.toLowerCase())) {
      finalOutput += char;
    }
  }
  return finalOutput === '' ? 'EMPTY': finalOutput;
}

console.log(StringChallenge("fun&!! time"));
console.log(StringChallenge("I love dogs"));*/


///////////////////////// solution 2 /////////////////////////////////
/*function StringChallenge(str) {
  let emptystr = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      emptystr += count + str[i];
      count = 1;
    }
  }
  const ChallengeToken = 'd5yv7mah9210';
  let finalOutput = '';
  for (let char of emptystr) {
    if (!ChallengeToken.toLowerCase().includes(char.toLowerCase())) {
      finalOutput += char;
    }
  }
  return finalOutput === '' ? 'EMPTY': finalOutput;
}

console.log(StringChallenge("aabbcde"));
console.log(StringChallenge("wwwbbbw"));*/

/*for (var i = 0; i < 3; i++) {

  setTimeout(function() { alert(i); }, 1000 + i);

}*/

/*(function() {

  var a = b = 5;

})();



console.log(b);*/

var x = 4 + "4";

console.log(x);
