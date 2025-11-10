This guide walks you through setting up a basic Express server connected to a PostgreSQL database.

---

# setup express server
```bash
mkdir server
cd server
npm init -y
npm install express cors dotenv

create server.js file
create .gitignore file
create .env file
add node_modules and .env to gitignore file
```
 ## env variables
 ```bash
 PORT=5000
```

 # load env variables (add to very top of file)
```bash 
require('dotenv').config(); 
```

 # routes 
 GET: /users

 GET: /user/:id 

 POST: /users

 # start server
 ```bash
 node server.js
 ```

# database setup

## installation
https://www.postgresql.org/download/windows/

https://www.pgadmin.org/download/pgadmin-4-windows/

## ensure postgres is installed
in your computers command prompt run

```bash 
psql --version
```

## setup system enviornment variable for postgres
https://youtu.be/anVEKogpfLg?si=hykP2o1QrT-c5Afd


## add database credentials to .env file
DB_HOST=localhost

DB_PORT=ENTER YOUR DATABASE PORT HERE

DB_USER=ENTER YOUR DATABASE USER NAME HERE

DB_PASSWORD=ENTER YOU DATABASE PASSWORD HERE

DB_NAME=ENTER YOUR DATABASE NAME HERE

## setup postgres connection
```bash
npm install pg
```

```bash
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test connection
pool.connect()
  .then(client => {
    console.log("Connected to PostgreSQL!");
    client.release();
  })
  .catch(err => console.error("Connection error", err.stack));

module.exports = pool;
```
