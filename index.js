const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const basePath = process.env.BASE_PATH;


app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/shorten/:url', (req,res) => {

});

app.post('/shorten/:url', (req,res) => {
    const defaultURL = req.params.url;
    const shortURL = createUrl();
    //DB CHECK
        //..
    //DB PUSH
        //..

    //RETURN
});

app.listen(port, () => console.log(`Listening on port: ${port}...`));


function createUrl() {
    const length = 8;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = chars.length;
    let result = '';
    for ( let i = 0; i < 8; i++ ) {
        result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}