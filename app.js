const { guardarDB, leerDb } = require('./helpers/gardarArchivo');
const { inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,

} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDb();
    if (tareasDB) {//cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }



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
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesComletadas(true);
                break;
            case '4':
                tareas.listarPendientesComletadas(false);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== '0'){
                    const confirmacion = await confirmar('¿Estas seguro que desea borrar?');
                    if(confirmacion){
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada');
                    }
                }
              
                break;
        }

        guardarDB(tareas.listadoArr);
        await pausa();

    } while (opt !== '0')



    //   pausa();

}
main();