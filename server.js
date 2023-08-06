const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hi Welcome to my app</h1>")
});

app.get('/production', (req, res) => {
    res.send("<h1>Hi Welcome to my app : production</h1>")
});

app.get('/development', (req, res) => {
    res.send("<h1>Hi Welcome to my app : Devlopment</h1>")
});

app.get('/home', (req, res) => {
    res.send("<h1>Hi Welcome to my app : Home</h1>")
});

app.get('/about', (req, res) => {
    res.send("<h1>Hi Welcome to my app : About</h1>")
});

app.listen(5000, () => {
    console.log('server is listening on port 5000');
})