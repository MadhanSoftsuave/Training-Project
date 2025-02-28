function mul(x)
{
    return x*10;
}
async function fun() {
    let result= new Promise((resolve,reject)=>{
        if(2%2==0)
            resolve("done");
        else
        reject("not");
    })
    result.then((resul)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })
    console.log("hai");
    }
fun();