function mul(x)
{
    return x*10;
}
async function fun() {
    await new Promise((resolve,reject)=>{
        if(2%2==0)
            resolve("done");
        else
        reject("not");
    })
    .then((resul)=>{
        console.log(resul);
    })
    .catch((err)=>{
        console.log(err);
    })
    console.log("hai");
    }
fun();