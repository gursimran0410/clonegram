const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')

require('./models/user')
app.use(express.json()) //--To parse the incoming post requests to JSON format.
app.use(require('./routes/auth'))
//mongoose.model("User")

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("Connected to mongo instance")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})