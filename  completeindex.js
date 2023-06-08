const envxpress = require("express")
const cookieParser = require('cookie-parser')
const cors = require('cors') 
require('dotenv').config()

const connectDB = require('./config')
require('./services')

const port = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser()) //coolie parser
app.use(cors()) //enable CORS

//Routes
const ussdRoute =require('./ussd.route')

app.use('/',ussdRoute)

app.listen(port, () =>{
    console.log(Server, is ,running ,on ,port$,{port})

    connectDB()
})