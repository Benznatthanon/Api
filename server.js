const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = [{
    name : 'Natthanon',
    phoneNumber : '0876714077'
},{
    name : 'Phanuwat',
    phoneNumber : '0616189062'
},{
    name : 'Chatcha',
    phoneNumber : '097190611'
}
]

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts
app.get('/contacts',(req,res) => {
    let newContacts = req.body
    contacts.push(newContacts)
    res.json(newContacts)
})


/// TODO: Develop POST /contacts
app.post('/contacts',(req,res) => {
    let newContacts =req.body
    contacts.push(newContacts)
    res.json(newContacts)
})


app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
