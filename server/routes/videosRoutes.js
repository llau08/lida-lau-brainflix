const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require ('uniqid');


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
        image,
        channel: "ARvinMichael",
        description,
        id: uniqid(),
        views: "100",
        likes: "0",
        duration: "4:01",
        timestamp: Date.now(),
        comments: [{name:"Jesse Cruz",comment:"There’s no place quite like the open ocean. Wind in your sails. The cool mist is perfect to wake you up in the morning and lull you to sleep in the evening. What an experience.",likes:0,timestamp:1632227521000}]
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