//object creation 
// let obj={
//     name:"madhan",
//     age:21,
//     class:"ece"
// }
// console.log(obj);

//using new keyword
// let a=new Object;
// a.name="madhan";
// a.age=21;
// console.log(a);


let obj={
         name:"madhan",
        age:21,
        class:"ece"
     }

//accessing object properties
     //console.log(obj.name);
     //console.log(obj["name"])

     //modifing object value
    //  obj.name="kumar";
    //  console.log(obj);

    //adding properties
    // obj.section="A";
    // console.log(obj);

    //removing properties from an object
    // delete obj.class;
    // console.log(obj);

    //checking for property
    console.log("name" in obj); // using in operator
    console.log(obj.hasOwnProperty("name"));