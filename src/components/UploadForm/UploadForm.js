import '../UploadForm/UploadForm.scss';
import { Link } from "react-router-dom";

export default function UploadForm() {
    return(
        <form className="upl-form">
            <label className="upl-form__lbl" htmlFor="videoname">TITLE YOUR VIDEO</label>
            <input className="upl-form__box"type="text" name="videoname" placeholder="Add a title to your video"></input>
            <label className="upl-form__lbl" htmlFor="videodescription">ADD A VIDEO DESCRIPTION</label>
            <textarea className="upl-form__txt-box"name="videodescription" placeholder="Add a description to your"></textarea>
            <div>
                <Link to="/">
                    <button className="upl-form__btn" onClick={()=>{alert('Uploaded. Thanks Michael!')}}>PUBLISH</button>
                </Link>
                <Link to="/">
                    <p>CANCEL</p>
                </Link>
            </div>
        </form>
    )
}