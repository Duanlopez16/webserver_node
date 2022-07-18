import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import hbs from 'hbs';

//dir_name
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;
//handlebars
app.set('View engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//definicion de ruta publica
app.use(express.static('public'));

const datos = {
    titulo: 'curso node',
    nombre: 'duan'
};

//definicion de rutas
app.get('/', function(req, res) {
    res.render('home.hbs', datos);
});

app.get('/hola-mundo', function(req, res) {
    res.send('Hello World')
});

app.get('/generic', function(req, res) {
    res.render('generic.hbs', datos);
});

app.get('/elements', function(req, res) {
    res.render('elements.hbs', datos);
});

app.get('*', (req, res) => {
    res.render('404.hbs');
});

app.listen(port)