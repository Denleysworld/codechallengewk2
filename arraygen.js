// the function thats to arguements
function arrayGen(no1, no2) {
    //declares the arrary
  let gen = [];
  //this is a loop setting the initial value to the first parameter and increasing until it reaches thne no2
  let i = no1;
  while (i < no2 + 1) {
    //here passes arguements are passed to the array
    gen.push(i);
    i++;
  }
  return gen;
}
//example
console.log(arrayGen(-4, 7));
