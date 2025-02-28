let arr=[{firstname:"rahul",lastname:"kannan",age:21},
    {firstname:"raj",lastname:"kumar",age:22}];
let output=arr.reduce(function(out,x)=>{
    if(out[x.age])
        out[x.age]=++out[x.age];
    else
    out[x.age]=1;
},[]);
console.log(output);