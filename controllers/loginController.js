const { db } = require("../db");
const jwt = require("jsonwebtoken");
const path = require("path")
const fsPromises = require("fs/promises");

const SECRET_KEY = "Corbin";

const loginController = (req, res, next) => {
    const { username, password } = req.body;
    const user = db.users.find(user => user.username === username);
    if(user.password === password){
        const token = jwt.sign({
            iss: user.id
        }, SECRET_KEY);

        res.status(200);

        return res.json(
            {
                access_token: token
            }
        )
    }
}

module.exports = loginController;