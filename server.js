const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const public = path.resolve('./public')

app.use(express.static('./client/public'));

app.get('/', (req, res) => {
    res.sendFile(public + '/index.html')
})

app.get('/API/Restaurants', (req, res) => {
    res.sendFile(path.resolve('./API/Restaurants.json'))
})

app.get('/Location/:name', (req, res) => {
    res.sendFile(path.resolve(`./API/${req.params.name}.json`))
})

app.get("/Restaurants/:id", (req,res)=>{
    res.sendFile(public + "/Restaurants.html")
})


app.listen(port, () => console.log(`Example app listening on port: ${port}!`))