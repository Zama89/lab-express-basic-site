const express = require ("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/works', (request, response) => {
    response.sendFile (__dirname + '/views/works.html');
});

app.get('/about-me', (request, response) => {
    response.sendFile (__dirname +'/views/about-me.html');
});

app.listen(port, () => {
    console.log(`Ejemplo en el lab en http://localhost:${port}`);
});