const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const goggins = {
    'exercise': {
        'age' : 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London'
    },
    'life': {
        'age' : 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago'
    },
    'funny': {
        'age' : 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:inputtedQuote', (request, response)=>{
   const inputtedQuote = request.params.inputtedQuote.toLowerCase()
   if(goggins[inputtedQuote]){
    response.json(goggins[inputtedQuote])
   } else {
    response.json(goggins['dylan'])
   }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('server running better catch it')
}) 