const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    let a = "Hello"

    let b = "Vietnam"

    let c = a+b
  
    return res.send('Hello World! Hello everyone!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})