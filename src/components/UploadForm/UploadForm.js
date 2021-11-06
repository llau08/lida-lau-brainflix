import '../UploadForm/UploadForm.scss';
import { alert } from 'react-alert';

export default function UploadForm() {
    return(
        <form className="upl-form">
            <label className="upl-form__lbl" htmlFor="videoname">TITLE YOUR VIDEO</label>
            <input className="upl-form__box"type="text" name="videoname" placeholder="Add a title to your video"></input>

            <label className="upl-form__lbl" htmlFor="videodescription">ADD A VIDEO DESCRIPTION</label>
            <textarea className="upl-form__txt-box"name="videodescription" placeholder="Add a description to your"></textarea>
            <button>CANCEL</button>
            <button className="upl-form__btn">PUBLISH</button>
        </form>
    )
}