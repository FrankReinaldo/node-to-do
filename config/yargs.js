//Requires

const description = {
    demand: true,
    alias: 'd',
    description: "Description of the homework to do"
};

const completed = {
    default: true,
    alias: 'c',
    description: "Mark the homework as completed or pending"
};

const argv = require("yargs")
    .command("create", "Create an element to do", {
        description
    })
    .command("update", "Update the completed status of a howework", {
        description,
        completed
    })
    .command("delete", "Delete an element", {
        description
    })
    .help()
    .argv;


module.exports = {
    argv
};