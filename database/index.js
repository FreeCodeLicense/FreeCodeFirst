const { mongoose } = require("../index");
const Schema=mongoose.Schema

const personSchema= new Schema({
    name: { type:String, required:true, unique:true },
    age: Number,
    favoriteFoods: [String]
})

const Person=mongoose.Model("User",personSchema)


module.exports={
    Person
}