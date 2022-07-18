import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 8080;
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('public'));

app.get('/hola-mundo', function(req, res) {
    res.send('Hello World')
});

app.get('/generic', function(req, res) {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', function(req, res) {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});
app.listen(port)