const express=require('express');
const cors= require('cors');
const mysql = require('mysql');

const app=express();

const selectAll = 'SELECT * FROM centers';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'charbel22',
    database: 'omnielle'
});

connection.connect(err =>{
    if(err){
        return err;
    }
});


app.use(cors());


app.listen(4000,function(){
	console.log('listen on 4000')
});
 
app.get('/',(req,res) =>{
    res.send('go to /products to see products  ')

});    
 
app.get('/products',(req,res) =>{
    connection.query(selectAll,(err,results) =>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data: results
            })
        }
    });

});    