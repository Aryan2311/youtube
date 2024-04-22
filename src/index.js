import dotenv from "dotenv"
console.log('Aryan Aggarwal')
import connectDB from './db/index.js'
dotenv.config({
    path: './.env'
})

connectDB()