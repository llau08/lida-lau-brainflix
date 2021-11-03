import UploadForm from "../../components/UploadForm/UploadForm";
import UploadVideo from "../../components/UploadVideo/UploadVideo";
import { Switch, Route, Link } from "react-router-dom";

export default function UploadPage (props){
    return(
        <>
        <main>
           <UploadVideo />
            <UploadForm video={props.video}/>
        </main>
        </>
    );
}
