const express = require('express');
const app = express();
// const db = require('./models');
// const router = express.Router();
// const userDefination = require('./models/users');
const cors = require('cors');
const md5 = require('md5');
// const { DataTypes } = require('sequelize');
// const users = userDefination(db.sequelize, DataTypes);

// test
const mysql = require('mysql2');

const db = mysql.createConnection({
    user: "root",
    password: "1LuvCoff33!",
    database: "report_ranger",
    host: "127.0.0.1",
})

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    // const listOfUsers = await users.findAll();
    // res.json(listOfUsers);
    res.send('HELLO');
});

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const phoneNo = req.body.phoneNo;
    const regId = req.body.regId;
    const password = md5(req.body.password);
    // const user = {
    //     username: req.body.username,
    //     phoneNo: req.body.phoneNo,
    //     reqId: req.body.regId,
    //     password: req.body.password
    // }

   
    // const user = req.body;
    // console.log(user);
    db.query("INSERT INTO Users (username, phoneNumber, registrationID, password) values (?, ?, ?, ?)",[username, phoneNo, regId, password],(err, result) => {
        console.log(err);
    });

    // await users.create(user);
    // res.json(user);

    // try {
    //     const newUser = await users.create(user);
    //     res.json(newUser);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Internal server error' });
    // }
});


const PORT = process.env.PORT || 3001;
// db.sequelize.sync().then(() => {
    
// });
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
