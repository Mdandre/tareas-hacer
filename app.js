require('colors');

const {mostrarMenu}= require('./helpers/mensajes')

console.clear();

const main = async ()=>{
 console.log('Es el main');

 mostrarMenu();


}
main();