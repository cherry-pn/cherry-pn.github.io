
var express=require('express');
var app = express();
var port = 3000;
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => console.log( `Example app listening on port `,+port));
