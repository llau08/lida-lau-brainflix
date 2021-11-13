const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require ('uniqid');
const public = "http://localhost:8080/941df2196eab0ef4aa9176e7816018aa.jpg"

let videoList = [];

const getVideos = () => {
    fs.readFile ('./data/videos.json', (err, data) => {
        if (err){
        console.log(err);
        }
        videoList = JSON.parse(data);
    })
}
getVideos();

router.get ('/', (req, res) => {
    // res.json(videoList);
    const strippedData = videoList.map((video) => {
        return {
            id: video.id,
            title: video.title,
            image: video.image,
            channel: video.channel,
        }
    })
    res.json(strippedData); //Mimic sprint-2
})

router.get('/:id', (req, res) => {
    console.log(req.params);
    const video1 = videoList.find ((video) => {
        return video.id === req.params.id;
        })
        if (!video1){
            res.status(404).send('Video not found')}
        res.json(video1);
    }) 

router.post('/', (req, res) => {
    const {title,description,image} = req.body
    const newVid = {title,
        image: public,
        channel: "ARvinMichael",
        description,
        id: uniqid(),
        views: "252,162",
        likes: "151,062",
        duration: "4:01",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [{name:"Flexbox Froggy",comment:"Justify content!",likes:500,timestamp:1632227521000}]
    }
    videoList.push(newVid);
    fs.writeFile('./data/videos.json', JSON.stringify(videoList), (err) =>{
        if (err){
            res.status(500).send('Update unsucessful')
        }
    res.json(videoList);
    })
})
   

module.exports = router;