const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());

app.use(express.static(resolve(__dirname, 'client','dist')));

function log(msg){
    return (req, res, next) => {
        console.log(msg);
        next();
    }
}

function getUser() {
    return(req, res, next) => {
        req.user = {name }
    }
}

app.use('/api/get-stuff',log('you\'re on the get stuff route, my guy my guy'));


app.post('/', (req,res) => {
    res.send('<h1>Testing<3 </p>');
});

app.post('/api/get-user', (req, res) => {
    res.send({sucess: true, user: {name: 'Will Cheng', age: 20}});
});

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(PORT, () => {
    console.log('port: ', PORT)
});

