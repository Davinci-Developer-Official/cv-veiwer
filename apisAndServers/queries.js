const { get } = require('http');
const { Result } = require('postcss');

const Pool = require('pg').Pool; //node-postgres module is called upon only when Pool is invocked too.
const pool = new Pool({
    user: 'test', //role or postgres user being used. 
    host: 'localhost', //default offline host .
    database: 'cvs', //database name  
    password: 'test', //password for the user used.
    port: 5432, //localhost port being used.
}); //connection between a posgresSQL database and nodejs




const getUsers = (req, res) => {
    pool.query('SELECT * FROM cv ORDER BY id ASC', (error, result => {
        if (error) throw error; // throw an  error if it exists.
        res.status(200).json(results.row); //status 200 shows the server is working properly and .json displays table contents in json format ie readable .ie get results from rows in the cv table.
    }));
}; //gets results from the cv tableand displays it in id order following ASCII characters.

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM cv WHERE id=$1', [id], (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
        //get result from rows in cv table. ie 200 status server running ok



    });
};