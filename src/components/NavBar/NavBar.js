import Logo from "../../assets/logos/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import Upload from "../../assets/icons/upload.svg";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(){
    return (
        <nav className="nav">
            <a href="/home">
            <img className="nav__logo" src={Logo} alt="BrainFlix Logo"></img></a>
            <div className="nav__box">
            <SearchBar />
            <img className="nav__avatar" src={Avatar} alt="Mohan muruge avatar"/>
            <button className="nav__btn">
                <img className="nav__icon" src={Upload} alt="upload icon"/>UPLOAD
            </button>
            </div>
        </nav>
    )
}