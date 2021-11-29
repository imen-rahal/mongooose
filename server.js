const express = require("express");

const app = express();
require("dotenv").config({ path: "./.env" });
const connectDB = require("./config/connectDB");

const Person=require("./model/Person");
 //const newPerson=new Person({name:"Ahmed",age:45,favoriteFoods: ["salade","brik"]});
 //newPerson
  //  .save()
   //  .then((Person)=>console.log(Person))
  // .catch((err)=>console.log(err));
 //  const newPerson=new Person({name:"Sami",age:26,favoriteFoods: ["couscous","scalope"]});
 //newPerson
   // .save()
   //  .then((Person)=>console.log(Person))
   // .catch((err)=>console.log(err));
 //const newP=new Person();
   // newP.insertMany([{name:"salem",email: "saleme@gmail.com",age:23,phone: 4455555544,},
      //   {name:"nour",email: "saleme@gmail.com",age:5,phone: 3355555533,}])
   //  .then((newP)=>console.log(newP))
    //   .catch((err)=>console.log(err));

//Person.find().then((Person)=>console.log(Person)).catch((err)=>console.log(err));
// Person.findOne({name:"kaka"}).then((Person)=>console.log(Person)).catch((err)=>console.log(err));
// Person.findById({_id:"5ff070520635840cf47a455e"}).then((Person)=>console.log(Person)).catch((err)=>console.log(err));
//Person.findById({_id:"61a20d99e6335a0101c9efc8"},function (err,Person){
  //     Person.name="amir"
    //     Person.save(function (err,Person) {
      //       if(err){
        //         console.log(err)
          //   }
            // console.log(Person)
    // })
 //});
//Person.findOneAndUpdate({id:"61a20d99e6335a0101c9efc8"},{$set:{age:20}},{new:true, useFindAndModify: false}).then(Person=>console.log(Person)).catch(err=>console.log(err));
//Person.findByIdAndRemove({_id:"61a20d99e6335a0101c9efc8"}).then(Person=>console.log(Person)).catch(err=>console.log(err));
//Person.find().then((Person)=>console.log(Person)).catch((err)=>console.log(err));
app.listen(process.env.Port, () => {
    console.log(`The Server is Running ${process.env.Port}....`);
});
