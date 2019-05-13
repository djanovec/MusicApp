const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const userRoutes = require("./server/routes/users.routes");

app.use(bodyParser.json());

app.use(express.static(__dirname+"/dist/musicApp"));

app.use('/users', userRoutes);

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/dist/musicApp/index.html");
})

app.get('/*', (req, res)=>{
    res.redirect('back');
})

app.listen(process.env.PORT || PORT, console.log(`Listening on Port: ${PORT}`));