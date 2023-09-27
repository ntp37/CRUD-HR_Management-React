const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection(process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log('Error connection to MySQL database = ', err);
        return;
    }
    console.log('MySQL successfully connected..!');
});

// create new employee data
app.post('/employee/create', async (req, res) => {
    const { name, gender, position, tel_num, email, address, salary } = req.body
    try {
        connection.query(
            "INSERT INTO employee(name, gender, position, tel_num, email, address, salary) VALUES(?,?,?,?,?,?,?)", 
            [name, gender, position, tel_num, email, address, salary],
            (err, result, fields) => {
                if (err) {
                    console.log("Error cannot be inserted new employee data into the database", err);
                    return res.status(400).send()
                } 
                    return res.status(201).json({message: "New employee data successfully created"});
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(500).send()
    }
})

// get all employee data
app.get('/employee/all', async (req, res) => {
    try {
        connection.query("SELECT * FROM employee", (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(result);
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

// get data 1 employee
app.get('/employee/:id', async (req, res) => {
    const id = req.params.id
    try {
        connection.query("SELECT * FROM employee WHERE id = ?", [id], (err, result, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send()
            } 
                // res.status(200).send(result);
                return res.status(200).json(result);
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send()
    }
})

// update employee data
app.put('/employee/update/:id', async (req, res) => {
    const id = req.params.id
    const { name, gender, position, tel_num, email, address, salary } = req.body

    try {
        connection.query(
            "UPDATE employee SET name = ?, gender = ?, position = ?, tel_num = ?, email = ?, address = ?, salary = ? WHERE id = ?", 
            [name, gender, position, tel_num, email, address, salary, id], 
            (err, result, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send()
                } 
                res.status(200).json({message: "Employee data been updated"});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send()
    }
})

// delete employee data
app.delete('/employee/delete/:id', async (req, res) => {
    const id = req.params.id
    try {
        connection.query("DELETE FROM employee WHERE id = ?", [id] , (err, result, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send()
            } 
            if (result.affectedRows === 0) {
                return res.status(404).json({message: "Not found employee"});
            }
            return res.status(200).json({message: "Deleted employee data successfully"});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send()
    }
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running on port 3000'));

