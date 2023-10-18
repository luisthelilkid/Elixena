const express=require('express')
const app=express()
const port = 8000;
//servir un contenidor estatico
app.use(express.static('templated-roadtrip'));

app.get('/templated-roadtrip', function(req, res){
    res.send('home page')
});
app.get('/templated-roadtrip/generic', function(req, res){
    res.send('hola mundo con su respectiva ruta')
});
app.get('*', (req, res)=>
{
    res.sendFile(__dirname+ '/templated-roadtrip/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })