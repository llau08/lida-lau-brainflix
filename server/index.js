const express = require('express');
const app= express();
const videoRoutes = require ('./routes/videosRoutes');
const path = require("path");
const cors = require("cors");

//set port to process.env.port and if it doesnt work set to 8000
require("dotenv").config();
const PORT=process.env.PORT || 8000;
//to connect to localhost
app.use(cors());
//gives access to request body
app.use(express.json());
//serve static assets when requests from the client are made such as images
app.use(express.static(path.join(__dirname, "/public/images")));

app.use('/videos', videoRoutes);

app.listen(PORT, function(){
    console.log('Express Severus is running on PORT 8080');
})
