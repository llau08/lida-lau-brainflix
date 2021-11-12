const express = require('express');
const app= express();
const videoRoutes = require ('./routes/videosRoutes');
const path = require("path");
const cors = require("cors");

//to connect to localhost
app.use(cors());
//gives access to request body
app.use(express.json());
//serve static assets when requests are made such as images
app.use(express.static(path.join(__dirname, "public")));

app.use('/videos', videoRoutes);

app.listen(8080, function(){
    console.log('Express Severus is running on PORT 8080');
})
