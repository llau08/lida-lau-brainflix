import axios from 'axios';
import '../UploadForm/UploadForm.scss';
import image from '../../assets/images/941df2196eab0ef4aa9176e7816018aa.jpg';

export default function UploadForm ({history}) {

    const uploadVideo = (event) => {
        event.preventDefault();
        let newVid = {
            title: event.target.title.value,
            image: image,
            description: event.target.description.value,
        }
        console.log (newVid);
        axios.post('http://localhost:8080/videos', newVid)
        .then ((res) => {
           console.log (res);
        })
        .catch ((err) => {
            console.log (err);
        })
        //should send me to home
        alert('Uploaded. Thanks Michael!');
        console.log(history);
        history.push('/');
    }

    return(
        <form className="upl-form" id="uploadForm" onSubmit={uploadVideo}>
            <div className="upl-form__ctnr">
                <label className="upl-form__lbl" htmlFor="title">TITLE YOUR VIDEO</label>
                <input className="upl-form__box" type="text" name="title" placeholder="Add a title to your video"></input>
            </div>
            <div className="upl-form__ctnr">
                <label className="upl-form__lbl" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                <textarea className="upl-form__txt-box" name="description" placeholder="Add a description to your video"></textarea>
            </div>
        </form>
    );
}

    
