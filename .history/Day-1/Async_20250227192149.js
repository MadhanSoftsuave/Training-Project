function mul(x)
{
    return x*10;
}
async function fun() {
    awsetTimeout(()=>{
    let a=mul(10);
    console.log(a)},1000);
    console.log(12);
}
fun();