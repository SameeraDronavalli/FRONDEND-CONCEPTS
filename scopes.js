//(1) global scope
// ...global variables  can be accessed from anywhere in the code...//
let a = 50;
{
  const b = 90; 
  console.log(b);
}
console.log(a);

//(2) functional scope
// ..only within the functin we can access the variable .. //we declare the function then assign the values in function finally call the function//

function value()
{
    m = 100;
    n = 100;
    sum = m + n;
    console.log(sum);
}
value();
 
//(3) block scope 
//....let and const are provide block scope. blocK scope means variables declaring inside the braces {}  we can access the variable but outside the {} we can't access the variable...//
{
    let firstName = "anjani";
    console.log(firstName);
}
{
let secondName = "sameera";

console.log(secondName);
}
// const block scope
{
const lastName = "dronavalli";
console.log(lastName);
}
{
    const age = "24";
    console.log(age);
}

