const { guardarDB } = require('./helpers/gardarArchivo');
const { inquirerMenu,
    pausa,
    leerInput,

} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');

const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    do {
        //imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear opcion
                const descripcion = await leerInput('Descripción:  ');
                tareas.crearTarea(descripcion);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
        }

        guardarDB(tareas.listadoArr);
        await pausa();

    } while (opt !== '0')



    pausa();

}
main();