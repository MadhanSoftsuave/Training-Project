//template literals
// let a="madhan";
// console.log(`this is ${a}`);

//with expression
// let a=10,b=2;
// console.log(`ans: ${a+b}`);

//tagged template literals
function fun(str,name)
{
    console.log(`${str[0]} ${name} ${str[1]}`);
}
const name="hai";
console.log(fun`hello, !${name}`);