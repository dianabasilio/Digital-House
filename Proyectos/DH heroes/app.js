const express = require('express');

const app= express();

//Requerir path 
const path = require('path');

app.use(express.static('public'));


//Ruta/home
//ruta de accesso del navegador y un callback

app.get('/', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/index.html'))

});


app.get('/baggage', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/baggage.html'))

});

app.get('/berners-lee', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/berners-lee.html'))

});
app.get('/clarke', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/clarke.html'))

});
app.get('/hamilton', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/hamilton.html'))

});

app.get('/hopper', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/hopper.html'))

});

app.get('/lovelace', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/lovelace.html'))

});

app.get('/turing', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/turing.html'))

});


//Para cuando no encuentre la ruta
app.get('*', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.status(404).send('404 not found. <br> ¡Houston tenemos problemas! ')

});

app.listen(3030, ()=> {
    console.log('Server running at port 3030');
});