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

// Promise.all([
//     Promise.resolve("task 1"),
//     Promise.resolve("task 2"),
//     Promise.resolve("task 3")
// ]).then((result)=>{
//     console.log(result);
// }).catch((Error)=>{
//     console.log(Error);
// })

//promise.allsettled
// Promise.allSettled([
//     Promise.resolve("task 1"),
//     Promise.resolve("task 2"),
//     Promise.resolve("task 3")
// ])
// .then((message)=>{
//     console.log(message);
// })
// .catch((Error)=>{
//     console.log(Error);
// })

//promise.race()
Promise.race([
    new Promise((resolve)=>
        setTimeout(() => {
            console.log("task 1");
        }, 1000)),
    new Promise((resolve)=>{
        setTimeout(() => {
            console.log("task 2");
        }, 100);
    })
]);