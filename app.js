const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())


app.use("/data/menu",(req,res,next)=> {
    return res.status(200).json({
        dataMenu: [
            {
              namaMenu: "Caffe Latte",
              jenisMenu: "Hot / Ice",
              deskripsi:
                "di racik oleh barista handal dan dari biji coffe pilihan",
                images:"../../assets/image/1.jpg"
            },
            {
                namaMenu: "Cappuccino",
                jenisMenu: "Hot / Ice",
                deskripsi:
                  "di racik oleh barista handal dan dari biji coffe pilihan",
                  images:"../../assets/image/2.jpg"
              },{
                namaMenu: "Americano",
                jenisMenu: "Hot / Ice",
                deskripsi:
                  "di racik oleh barista handal dan dari biji coffe pilihan",
                  images:"../../assets/image/3.jpeg"
              },{
                namaMenu: "Espresso",
                jenisMenu: "Hot / Ice",
                deskripsi:
                  "di racik oleh barista handal dan dari biji coffe pilihan",
                  images:"../../assets/image/3.jpg"
              },{
                namaMenu: "V60",
                jenisMenu: "Hot / Ice",
                deskripsi:
                  "di racik oleh barista handal dan dari biji coffe pilihan",
                  images:"../../assets/image/4.jpg"
              },
          ]
    })
})



module.exports = app;