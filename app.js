const express = require('express')
const compression = require('compression')
const app = express()
app.use(compression())
app.use(express.static('./dist'))
app.listen(80,()=>{
    console.log('Server running at http://127.0.0.1')

})
