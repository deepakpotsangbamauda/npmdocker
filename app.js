const express = require ('express')
const app = express()

app.get('/',(req, res) =>res.send('Hello World how vare you today'))
app.listen (3000, () => console.log('server ready note'))
