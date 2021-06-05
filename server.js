const mongoose = require("mongoose");
const express = require("express");

const app = express();

const person = require("./model/person.js"); 

//environment variables
require("dotenv").config();

//database connection
const uri = process.env.ATLAS_URL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },(err)=>{
  if (err) throw err
  console.log('database connected')
});

//Create and Save a Record of a Model

 /* const person1 = new person({
          name: "Badis Khachaa  ",
          age: 25,
          favoriteFoods: ["pizza", "tacos"],
        });
      
        person1
          .save()
          .then((doc) => {
            console.log(doc);
          })
          .catch((err) => {
            console.error(err);
          });
      
      
      //Create and Save a Record of a Model
      var arrayOfPeople = [
        {
          name: "Rabeb ",
          age: 22 , 
          favoriteFoods: ["couscous", "pizza"],
        },
        {
          name: "ahmed ",
          age: 27,
          favoriteFoods: ["frites", "pizza"],
        },
        {
          name: "samar",
          age: 20,
          favoriteFoods: ["spaguetti", "salade"],
        },
        {
          name: "imene",
          age: 15,
          favoriteFoods: ["icecream", "lasagne"],
        },
         {
          name: "yassmine",
          age: 27,
          favoriteFoods: ["chips", "chicken"],
        },
         {
          name: "sarrah",
          age: 3,
          favoriteFoods: ["pancake", "chips"],
        },
         {
          name: "Lina",
          age: 20,
          favoriteFoods: ["salade", "couscous"],
        },
      ];
      
        person.create(arrayOfPeople)
          .then((doc) => {
            console.log(doc);
          })
          .catch((err) => {
            console.log(err);
          });  */
      
      
          // Find all the people having a given name
        /*  person.find({name:"yassine"})
          .then ((doc)=>{console.log(doc)})
          .catch((err) => {
            console.log(err);
          }); 
       */
          // Return a Single Matching Document from Your Database
      
          /*  person.findOne({favoriteFoods:"icecream"})
          .then ((doc)=>{console.log(doc)})
          .catch((err) => {
            console.log(err);
          });  */
      
          //Search Your Database By _id
         /*  person.findById({_id: "6082c50d2c0c9335f484e94d"})
          .then ((doc)=>{console.log(doc)})
          .catch((err) => {
            console.log(err);
          });  */
      
          // Perform Classic Updates by Running Find, Edit, then Save
      
        /*   person.findByIdAndUpdate({ _id: "6082c50d2c0c9335f484e94d"}, {$addToSet:{favoriteFoods:"humberger"}}, {new:true},  (err, person)=>{
                 person.save()
            .then((person)=>{console.log(person)})
          .catch((err) => {
            console.log(err);
          });
        })  */
      
      
        //Perform New Updates on a Document Using model.findOneAndUpdate()
      /*   person.findOneAndUpdate({ name: "samar"}, {$set:{age:5}}, {new:true}, (err, doc) => {
          if (err) {console.log("there is an error")}
          console.log(doc);
      });  */
         
      
     //Delete One Document Using model.findByIdAndRemove
 /*  person.findByIdAndRemove({ _id: "6082c50d2c0c9335f484e952"}, function (err, docs) {
          if (err){
              console.log(err)
          }
          else{
              console.log("Removed User : ", docs);
          }
      }); */
  
//MongoDB and Mongoose - Delete Many Documents with model.remove()

/* person.remove({age:{$lt:30}}, function (err, docs) {
          if (err){
              console.log(err)
          }
          else{
              console.log(docs);
          }
      }); */

  //Chain Search Query Helpers to Narrow Search Results    
 /*  person.find({favoriteFoods: {$all:["pizza"]}})
  .limit(2)
  .sort({name:'asc'})
  .select('name')
  .exec()
  .then(docs => {
          console.log(docs)
        })
       .catch(err => {
          console.error(err)
        }) */
 
      
          app.listen(process.env.Port, () => {
           console.log(`The Server is Running ${process.env.Port}....`);
         
      });