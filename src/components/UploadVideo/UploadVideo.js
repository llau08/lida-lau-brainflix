import Data from '../../data/videos.json';

export default function UploadVideo() {
    return(
        <article>
            <h1>Upload Video</h1>
            <label>VIDEO THUMBNAIL</label>
            <img src={Data.image} alt="bicycle"/>
        </article>
    )
}