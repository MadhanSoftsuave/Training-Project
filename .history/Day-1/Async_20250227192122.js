function mul(x)
{
    return x*10;
}
async function fun() {
    setTimeout(()=>{
    let a=mul(10);
    console.log(a)});
    console.log(12);
}
fun();