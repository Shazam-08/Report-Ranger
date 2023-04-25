const express = require('express');
const app = express();
const db = require('./models');
const router = express.Router();
const {users} = require('./users.js');

router.get('/', async (req, res) => {
    // const listOfUsers = await users.findAll();
    // res.json(listOfUsers);
}); 

router.post('/signup', async(req, res) => {
    const user = req.body;
    await users.create(post);
    res.json(user);
});


const PORT = process.env.PORT || 3001;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

