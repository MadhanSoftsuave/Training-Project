// let app=new Promise((resolve,reject)=>{
//     if(2%2==0)
//         resolve("done");
//     else 
//         reject("not");
// });
// app.then((message)=>{
//     console.log(message);
// })
// .catch((Error)=>{
//     console.log(Error);
// })

Promise.all([
    Promise.reject("task 1"),
    Promise.resolve
])