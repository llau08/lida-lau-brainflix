const express = require('express');
const app= express();
const videoRoutes = require ('./routes/videosRoutes');
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use ('/videos', videoRoutes);

app.listen(8080, function(){
    console.log('Severus is running on PORT');
})
