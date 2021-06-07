import { json } from "express";
const express = require('express');
import { QRCode } from 'qrcode'
const fs = require('fs');

const app = express()
app.use(express(json))
  // app.get('/:text', async (req, res) => {
  //   const text = req.params
  //   const salt = await bcrypt.genSalt(10)
  //   const cript = await bcrypt.hash(text, salt)

  //   return res.json({cript});
  // })
  app.get("/qrcode", (require, response) => {
    const dataPerson = 'simpleText'
    //const qrcode = QRCode.toDataURL("http://asyncawait.net");
    const res = QRCode.toString(
      JSON.stringify(dataPerson),
      { type: "svg" },
      function (err, url) {
        try{
          console.log(url);
          response.send(url);
        }catch(err){
          console.log(err);
          response.send(err);
        }
      }
    );
  });
  
app.listen(3333, () =>{
    const sms = 'testando o ts-node-dev'
    console.log(sms)
})
//res.status(200).send({sucess: true, data: url})