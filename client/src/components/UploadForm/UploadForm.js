import '../UploadForm/UploadForm.scss';

export default function UploadForm() {
    return(
        <form className="upl-form">
            <div className="upl-form__ctnr">
                <label className="upl-form__lbl" htmlFor="videoname">TITLE YOUR VIDEO</label>
                <input className="upl-form__box"type="text" name="videoname" placeholder="Add a title to your video"></input>
            </div>
            <div className="upl-form__ctnr">
                <label className="upl-form__lbl" htmlFor="videodescription">ADD A VIDEO DESCRIPTION</label>
                <textarea className="upl-form__txt-box"name="videodescription" placeholder="Add a description to your video"></textarea>
            </div>
        </form>
    )
}