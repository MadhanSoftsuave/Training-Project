function mul(x)
{
    return x*10;
}
async function fun() {
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
    }
fun();