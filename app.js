const express = require("express")
const app = express()

app.listen(8080, function(){
    console.log('Servidor Ativo!')
})

app.get('/', function (req, res){
    res.send("Pagina Principal")
})

app.get('/cadastrar', function (req, res){
    res.send("Cadastrar")
})

app.get('/produtos/:item/:quantidade', function (req, res){
    res.send('item: '+req.params.item+ ' Quantidade: '+req.params.quantidade)
})

app.get("/contato", function(req, res){
    res.send("Pagina contato")
})


