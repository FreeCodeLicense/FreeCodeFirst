require("dotenv").config()
const mongoose=require("mongoose")
const Schema=mongoose.Schema

mongoose.connect(`${process.env.DB_EGINE}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useCreateIndex', true)

const personSchema= new Schema({
    name: { type:String, required:true, unique:true },
    age: Number,
    favoriteFoods: [String]
})

const Person=mongoose.model("User",personSchema)


module.exports={
    Person
}