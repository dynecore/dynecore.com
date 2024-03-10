const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {res.send('server working')})
app.get('/api/v1', (req, res) => {res.send('api/v1 working')})
app.get('*', (req, res) => {res.status(404).send('404 not found')})

app.listen(port, () => {
    console.log('listen on port', port)
    
})
