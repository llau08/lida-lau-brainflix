import logo from "../../assets/logos/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

export default function Header(){
    return(
    <header>
        <img src={logo}></img>
        <img src={search}></img>
        <img src={avatar}></img>
        <img src={upload}></img>
    </header>
    )
}