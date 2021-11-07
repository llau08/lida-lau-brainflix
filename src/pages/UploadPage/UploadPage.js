import UploadForm from "../../components/UploadForm/UploadForm";
import UploadVideo from "../../components/UploadVideo/UploadVideo";
import './UploadPage.scss';
import { Link } from "react-router-dom";
import Publish from '../../assets/icons/publish.svg';

export default function UploadPage ({video}){
    return(
        <>
        <main className="main-upload">
            <h1 className="main-upload__title">Upload Video</h1>
        <div className="main-upload__content">
            <UploadVideo />
            <UploadForm video={video}/>
        </div>
        <div className="main-upload__btn-box">
                <Link to="/">
                    <button className="main-upload__btn--1" onClick={()=>{alert('Uploaded. Thanks Michael!')}}><img className="main-upload__icon" src={Publish}/>PUBLISH</button>
                </Link>
                <Link to="/">
                    <p className="main-upload__btn--2">CANCEL</p>
                </Link>
            </div>
        </main>
        </>
    );
}
