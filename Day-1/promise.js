// let result=new Promise((resolve,reject)=>{
//     let a=10;
//     if(a==10)
//     {
//         resolve("done");
//     }
//     else reject("fail");
// });
// result.then((message)=>{console.log("hello");
//     console.log(message);
// })
// .catch((error)=>{console.log("hai")});

//promise.all()
// Promise.all(
// [
//     Promise.resolve("task 1 completed"),
//     Promise.resolve("task 2 completed"),
//     Promise.reject("task 3 rejected")
// ])
// .then((result)=>console.log(result))
// .catch((Error)=>console.log(Error));

//promise.allsettled()
Promise.allSettled([
    Promise.resolve("task 1"),
    Promise.reject("task 2"),
    Promise.resolve("task 3")
])

//promise.race()
// Promise.race([
//     Promise.resolve("task 1"),
//     Promise.reject("task 2"),
// ])
