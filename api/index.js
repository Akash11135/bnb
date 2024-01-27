const express = require('express')
const app = express()

app.get('/test' , (req ,res)=>{
    res.json('test ok')
    console.log("Done..")
})

app.listen(4000 )
console.clear()