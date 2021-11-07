import UploadThumb from '../../assets/images/Upload-video-preview.jpg';
import '../UploadVideo/UploadVideo.scss';

export default function UploadVideo() {
    return(
        <div className="upload">
            <div className="upload__box">
                <label className="upload__lbl">VIDEO THUMBNAIL</label>
                <img className="upload__img"src={UploadThumb} alt="bicycle"/>
            </div>
        </div>
    )
}