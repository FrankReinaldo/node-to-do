//Requires
//const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const toDo = require("./to-do/to-do");
const colors = require("colors");

let command = argv._[0];


switch (command) {

    case 'create':
        let homework = toDo.create(argv.description);
        console.log(homework);
        break;

    case 'list':
        let list = toDo.getList();

        for (let homework of list) {
            console.log('=========ToDo========='.green);
            console.log(homework.description);
            console.log("Status", homework.completed);
            console.log('======================'.green);
        }

        break;

    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);

        break;

    case 'delete':
        let deletee = toDo.deletee(argv.description);
        console.log(deletee);

        break;

    default:
        console.log('Command not recognized');
}