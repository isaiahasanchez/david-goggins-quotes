const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const goggins = {
    'exercise': {
        'quote': 'There is no time to allow yourself to think about being tired when you know that you have a target on your back for all of the other competitors trying to hunt you down.',
        'quote': 'Before you go to bed at night, you must ask yourself just one question. Have I done enough today? If the answer is no, you must find it within yourself to forego sleep and be willing to go the extra mile.',
        'quote': 'Never underestimate a person who trains every single day of their life. They might just know something you don’t!'
    },
    'life': {
        'quote': 'Your best self might be buried deep within you. It might require you to become obsessed with finding out what you are capable of! I had to leave normal behind.',
        'quote': 'You must realize that if you are in search of finding that new realm, you must be willing to extend yourself to the limit without any guarantee of success.',
        'quote': 'Very few people go after anything anymore like there is no tomorrow. Those who do are the outliers and are often looked at or perceived as crazy.',
    },
    'random': {
        'quote': 'Some of you may be working with pennies rather than nickels and dimes. A lot of you may need to get loans from the bank before you’re ready for the money! We all start somewhere!',
        'quote': 'Bottom line- keep showing up! And if you are going to show up, you might as well show the fuck out!',
        'quote': 'There is a massive infestation of weak people in today’s world. Just by sheer numbers, the weak voice is becoming the voice of the world.'
    }
    
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
    console.log(response.json(goggins));
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