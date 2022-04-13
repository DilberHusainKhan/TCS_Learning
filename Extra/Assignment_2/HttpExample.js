let express = require('express')

let app = express()

app.use(express.static(__dirname))

let server = app.listen(8888, () => console.log("server is running on port 8888"));