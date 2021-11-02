// import { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import UploadForm from "../../components/UploadForm/UploadForm";
import UploadVideo from "../../components/UploadVideo/UploadVideo";


export default function UploadPage (props){
    return(
        <>
        <header>
            <NavBar />
        </header>
        <main>
           <UploadVideo />
            <UploadForm video={this.state.video}/>
        </main>
        </>
    );
}
