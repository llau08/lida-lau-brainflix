import UploadForm from "../../components/UploadForm/UploadForm";
import UploadVideo from "../../components/UploadVideo/UploadVideo";

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
