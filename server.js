const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hi Welcome to my app</h1>")
});


app.listen(5000, () => {
    console.log('server is listening on port 5000');
})