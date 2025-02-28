let app=new Promise((resolve,reject)=>{
    if(2%2==0)
        resolve("done");
    else 
        reject("not");
});
app.