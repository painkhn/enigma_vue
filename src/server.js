const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Используем CORS
app.use(cors());
app.use(express.json()); // Для парсинга JSON

// Настройка подключения к базе данных
const db = mysql.createConnection({
    host: 'pma.web.edu',
    user: '21073',
    password: 'zruvwh',
    database: '21073_enigma'
});

// Подключение к базе данных
db.connect((err) => {
    if (err) throw err;
    console.log('Подключено к базе данных MySQL!');
});

// Пример маршрута для получения данных
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM ваша_таблица', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});