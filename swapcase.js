//below is a function that takes can take any inpput as a string and returns it with the case switched
function swapCase(text) {
  return text
  // .split takes the argument entered in text and creates an array
  //there is no space in the split parameter thus the elements of the array is each individual character
    .split("")
    // .map transforms the elements in the array to the described function
    .map(function (letter) {
        //here it checks the case each element denoted as letter and switchs it accordingly
      if (letter === letter.toUpperCase()) {
        return letter.toLowerCase();
      } else {
        return letter.toUpperCase();
      }
    })
    // join is used to combine the elements of the array back together into a single string
    .join("");
}
//example
console.log(swapCase('The Quick Brown Fox' ));