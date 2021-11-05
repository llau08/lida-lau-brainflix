import Logo from "../../assets/logos/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import Upload from "../../assets/icons/upload.svg";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


export default function NavBar(props){
    return (
        <nav className="nav">
            <Link to="/">
            <img className="nav__logo" src={Logo} alt="BrainFlix Logo"></img>
            </Link>
            <div className="nav__box">
            <SearchBar />
            <img className="nav__avatar" src={Avatar} alt="Mohan muruge avatar"/>
            <button className="nav__btn">
            <Link to="/upload">
                <img className="nav__icon" src={Upload} alt="upload icon"/>UPLOAD
                </Link>
            </button>
            </div>
        </nav>
    )
}