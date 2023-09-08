//console.log("hola mundo");
const express= require('express');
const app=express();

/*
verbos http
GET   obtener (url)
POST  guardar, publicar
PATCH   actualizar
PUT     == un recurso en especifico
DELETE  borrar 
 */

app.get("/",(req,res,next)=>
{
    res.status(200);
    res.send("Bienvenido");
});

app.listen(3000,()=>
    {
        console.log("Server is running... ");
    }
);
