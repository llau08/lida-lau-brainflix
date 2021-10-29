import Logo from "../../assets/logos/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import Upload from "../../assets/icons/upload.svg";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(){
    return (
        <nav className="nav">
            <a href="#">
            <img className="nav__logo" src={Logo} alt="BrainFlix Logo"></img></a>
            <SearchBar />
            <img className="nav__avatar" src={Avatar} alt="avatar image"/>
            <button className="nav__btn">
                <img src={Upload}/>UPLOAD
            </button>
        </nav>
    )
}