export default function UploadForm() {
    return(
        <form className="upl-form">
            <label htmlFor="videoname">TITLE YOUR VIDEO</label>
            <input type="text" name="videoname" placeholder="Add a title to your video"></input>

            <label htmlFor="videodescription">ADD A VIDEO DESCRIPTION</label>
            <textarea name="videodescription" placeholder="Add a description to your"></textarea>
            <button>CANCEL</button>
            <button>PUBLISH</button>
        </form>
    )
}