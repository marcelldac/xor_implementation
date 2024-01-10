function encriptDecript(input: string) {
  const separatedStr = input.split('');
  const xor_term = 'X'; //any character will work here
  for (let i = 0; i < separatedStr.length; i++) {
    separatedStr[i] = String.fromCharCode(separatedStr[i].charCodeAt(0) ^ xor_term.charCodeAt(0));
  }
  return separatedStr.join('');
}

const encriptedInput = encriptDecript('Marcell');
console.log(encriptedInput);
const decriptedOutput = encriptDecript(encriptedInput);
console.log(decriptedOutput);
