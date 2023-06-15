const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const goggins = {
    'exercise': {
        'quote': 'There is no time to allow yourself to think about being tired when you know that you have a target on your back for all of the other competitors trying to hunt you down.'
    },
    'life': {
        'quote': 'Your best self might be buried deep within you. It might require you to become obsessed with finding out what you are capable of! I had to leave normal behind.'
    },
    'random': {
        'quote': 'Some of you may be working with pennies rather than nickels and dimes. A lot of you may need to get loans from the bank before you’re ready for the money! We all start somewhere!'
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