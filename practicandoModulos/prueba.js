const hola = require('./app.js');

console.log(hola);

let fs = require ('fs');

let data = fs.readFileSync(__dirname+'/prueba.txt', 'utf-8');

console.log (data);

let moment= require('moment');

console.log(moment().format('MM Do YYYY'));