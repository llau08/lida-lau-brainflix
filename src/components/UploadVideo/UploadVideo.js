import UploadThumb from '../../assets/images/Upload-video-preview.jpg';
import '../UploadVideo/UploadVideo.scss';

export default function UploadVideo() {
    return(
        <article className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <label className="upload__lbl">VIDEO THUMBNAIL</label>
            <img className="upload__img"src={UploadThumb} alt="bicycle"/>
        </article>
    )
}