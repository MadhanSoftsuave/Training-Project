function mul(x)
{
    return x*10;
}
 function fun() {
    let result=await new Promise((resolve,reject)=>{
        if(2%2==0)
            resolve("done");
        else
        reject("not");
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })
    console.log("hai");
    }
fun();