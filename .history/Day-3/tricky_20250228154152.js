let arr=[{firstname:"rahul",lastname:"kannan",age:21},
    {firstname:"raj",lastname:"kumar",age:21}];
let output=arr.reduce(function(out,x){
    if(out[x.age])
        out[x.age]=++out[x.age];
    else
    out[x.age]=1;
return out;
},{});
// let output=arr.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=++acc[curr.age];
//     }
//     else {

//     }
// })l
console.log(output);