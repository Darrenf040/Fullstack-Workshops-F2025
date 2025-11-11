const express = require('express')
const app = express()
const cors = require('cors')
const db = require("./db");

app.use(cors());
app.use(express.json());

const port = 5000

const users = [{
    id: 0,
    name: "josh",
    email: "fake@gmail.com",
    role: "admin",
    location: "PGH 563"
}];

app.get('/', (req, res) => {
    db.query("SELECT * from users")
  res.send('Hello World!');
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    if (id >= users.length)
        res.status(404).send(`User with id ${id} is not found.`);

    res.json(users[id]);
})

app.post('/users', async (req, res) => 
{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    res.json(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
