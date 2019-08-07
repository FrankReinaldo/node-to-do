//Requires
const fs = require('fs');

let listToDo = [];

const saveDDBB = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile('DDBB/data.json', data, (err) => {
        if (err) {
            throw new Error(`Could not saved ${ err }`);
        }
    });
};

const loadDDBB = () => {

    try {
        listToDo = require("../DDBB/data.json");

    } catch (error) {

        listToDo = [];
    }

};

const create = (description) => {

    loadDDBB();

    let toDo = {
        description,
        completed: false
    };

    listToDo.push(toDo);

    saveDDBB();

    return toDo;
};

const getList = () => {

    loadDDBB();

    return listToDo;
};

const update = (description, completed = true) => {

    loadDDBB();

    let index = listToDo.findIndex(homework => homework.description === description);

    if (index >= 0) {

        listToDo[index].completed = completed;
        saveDDBB();

        return true;

    } else {

        return false;
    }
};

const deletee = (description) => {

    loadDDBB();

    let newListToDo = listToDo.filter(homework => homework.description !== description);

    if (newListToDo.length === listToDo.length) {
        return false;

    } else {

        listToDo = newListToDo;
        saveDDBB();

        return true;
    }
};

module.exports = {
    create,
    getList,
    update,
    deletee
};