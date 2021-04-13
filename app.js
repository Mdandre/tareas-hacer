const { inquirerMenu } = require('./helpers/inquirer');

require('colors');

const main = async () => {
    let opt = '';

    do {
        opt = await inquirerMenu();
        //if (opt !== 0)await pausa();
    } while (opt !== '0')

    //pausa();

}
main();