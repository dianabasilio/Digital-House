const bcrypt= require('bcrypt');
const password = '123456';
const hash =bcrypt.hashSync(password, 10);

console.log(hash);

const hash1 = bcrypt.hashSync('123456', 10);

// Escribir tu código aquí
const hash2 =bcrypt.hashSync(hash1, 10);

if (hash1 == hash2){
    console.log( 'los hash son iguales');
}

const password = '123456';
const passwordEncriptada = bcrypt.hashSync(password, 10);


// Escribir tu código aquí
if (bcrypt.compareSync(password, passwordEncriptada)){
    console.log('El password es correcto');
}