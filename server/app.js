//Importing all Dependencies 
const dotev = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');




const app = express();

//Configurartion of ENV & Connection File
dotev.config({path: './config.env'});
require('./db/conn');
const port = process.env.PORT;

//Require Model

const Users = require('./models/userSchema');

//GET DATA INPUT FRONT END
app.use(express.json());
app.use(express.urlencoded({extended : false }));
app.use(cookieParser());


app.get('/', (req,res) =>{
    res.send("Hello World");
})

//Registration
app.post("/register", async (req, res)=>{
    try{
        //GET
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });
        //Save method
        const created = await createUser.save()
        console.log(created);
        res.status(200).send("You have Registered")

    } catch (error){
        res.status(400).send(error)

    }
})

//Login
app.post('/login', async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        //to find user
        const user = await Users.findOne({email : email});
        if(user){
            // to verify password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Sessions exp
                    expires : new Date(Date.now() + 14400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

//Server
app.listen(port, ()=>{
    console.log("Server is Listening")
})