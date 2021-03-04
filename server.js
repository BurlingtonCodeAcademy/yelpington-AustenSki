const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const public = path.resolve('./public')

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(public + '/index.html')
})

app.get("/Restaurants/:id", (req,res)=>{
    res.sendFile(public + "/restaurants.html")
})


app.listen(port, () => console.log(`Example app listening on port: ${port}!`))