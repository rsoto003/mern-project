const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());


app.get('/api/get-stuff', (req, res) => {
    res.send({sucess: true, message: 'Here is stuff from the back-end'});
})

app.get('/', (req,res) => {
    res.send('<h1> Will Cheng is a boo boo ass dude hahahahahahahahaha </h1><p> jk ily bro <3 </p>');
});

app.listen(PORT, () => {
    console.log('will is lame af on port: ', PORT)
});