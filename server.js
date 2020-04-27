const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/' , function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('*' , function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.post('/submit-name' , function(req,res) {
    const name = req.body.name;
    console.log(name);
    res.send(`Your name is ${name}. The data has been printed in the console.`);
    res.end();
});

app.listen(5000 , function(err) {
    if(err){
        console.log(err);
    }
    console.log('Started on port 5000.');
});