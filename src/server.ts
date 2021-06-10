import { json } from "express";
const express = require('express');
import { QRCode } from 'qrcode'
import connection from "./models/connection";
const app = express()
app.use(express(json))

  app.get("/qrcode", async (require, response) => {
    const text = 'text'
    const code =  await QRCode.toDataURL(text, {type:'svg'})
    
    response.type('svg')
    code.pipe(response)
  });
  
  app.post('/create-user', async (req, res) => {
    const data = req.body
    const name = req.name
    const connection = require('connection')
    const save = connection('INSERT INTO user(name, email) VALUES (?, ?, ?)',)
    return res.json({sucess: true, save})
  })
  
app.listen(3333, () =>{
    const sms = 'testando o ts-node-dev'
    console.log(sms)
})
//res.status(200).send({sucess: true, data: url})

931679706