//create a string with the  provided message
//assign a variable using math for 10
//assign a variable using math for 40
//assign a variable using math for 39
// create an alert box displaying vault code 
//create git repo and upload
// create code to display the combination in alert box


const message = `You have received this message because 
you have been chosen to open an important vault. 
Here is the secret combination` // string 

const firstNumber = 8 + 2; // Should equal 10
// console.log (firstNumber) 
const secondNumber = 160 / 4; // Should equal 40
// console.log (secondNumber)
const thirdNumber = 100 - 61; // Should equal 39
// console.log (thirdNumber)
const vaultCode = `${firstNumber}-${secondNumber}-${thirdNumber}`
// console.log (vaultCode)


// alert (`You have received this message because 
//   you have been chosen to open an important vault. 
//   Here is the secret combination: ${vaultCode}`);

  alert (`${message} - ${vaultCode}`);
