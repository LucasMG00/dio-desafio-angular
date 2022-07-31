const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/dio-desafio-angular'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/dio-desafio-angular/index.html')
});

app.listen(PORT, () => {
    console.log('Server started at ' + PORT);
})