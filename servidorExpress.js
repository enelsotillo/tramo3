import "dotenv/config";
import express from 'express';
//import { startDb } from './src/config/basededatos.js';

//const express = require('express')

const app = express()
const router = express.Router();

/* constante */
const port = 3001;
const host = "localhost";
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(port, () =>{
  console.log(`servidor corriendo http://${host}:${port}`)
 //startDb();
 console.log(process.env.port)
})