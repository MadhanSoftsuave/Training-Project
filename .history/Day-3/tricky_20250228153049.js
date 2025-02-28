let arr=[{firstname:"rahul",lastname:"kannan",age:"21"},
    {firstname:"raj",lastname:"kumar",age:"22"}];
let output=arr.reduce((out,x)=>{
    if(out[x.age])
        ++output[x.age];
    else
    output[x.age]=1;
})
console.log(output);