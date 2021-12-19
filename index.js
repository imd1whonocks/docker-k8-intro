const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'/index.html'));
})
app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'/page.html'));
})
app.post('/post', (req, res) => {
    console.log('Parameter : ', req.body.field);
    res.redirect('/');
})

app.get('/crash', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'/crashed.html'));
    setTimeout(() => {
        console.error('Something bad happening')
        process.exit(1)
    }, 2000)
})

app.listen(8080, () => {
    console.log('Server running on 8080')
})

