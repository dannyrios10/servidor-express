const express = require('express');
const app = express();
const hbs = require('hbs');


const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public') );

// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Helpers

hbs.registerHelper('getAnio', () =>{
    return new Date().getFullYear();
})

app.get('/', (req,res) => {

    res.render('home', {
        nombre: 'Daniel'
    });
});

app.get('/about', (req,res) => {

    res.render('about'); 
});


app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`);
});