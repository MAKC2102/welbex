const pg = require('pg');
const express = require("express");

//подключение к БД
const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'postgres',
    port: 5432
});

client.connect();

//Обработка GET запроса
const app = express();
app.use(express.static(__dirname + '/public'));
app.get('/tabel', function (reqest, response) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    response.header("Access-Control-Allow-Methods", "GET");
    client.query('SELECT * FROM welbex;').then(res => {
        const rows = res.rows;
        response.end(JSON.stringify(rows));
    }).catch(err => {
        console.log(err);
    });
});

app.listen(3000, function () {
    console.log('Сервер работает');
});