require("dotenv").config()
const mongoose=require("mongoose")
const Schema=mongoose.Schema

//mongoose.connect(`${process.env.DB_EGINE}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect(process.env.MONGO_URI).catch(err=>{
    console.log(err)
})
mongoose.set('useCreateIndex', true)

const personSchema= new Schema({
    name: { type:String, required:true, unique:true },
    age: Number,
    favoriteFoods: [String]
})
const Person=mongoose.model("Person",personSchema)

const userSchema=new Schema({
    username:String,
})

const User=mongoose.model("User",userSchema)

const exerciseSchema=new Schema({
    username: String,
    description: String,
    duration: Number,
    date: String,
    _id:String

})

const Exercise=mongoose.model("Exercise",exerciseSchema)

module.exports={
    Person,
    User,
    Exercise
}