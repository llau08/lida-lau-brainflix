const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get ('/', (req, res) => {
    fs.readFile ('./data/videos.json', (err, data) => {
        const videos = JSON.parse(data);
        res.json (videos);
    })
})

router.get ('/:id', (req, res) => {
    fs.readFile ('./data/videos.json', (err, data) => {
        const videos = JSON.parse(data);
        const video1 = videos.find ((video) => {
        return video.id === req.params.id;
        })
        if (!video1){
            res.status(404).send('Video not found')}
        res.json (video1);
    }) 
})

module.exports = router;