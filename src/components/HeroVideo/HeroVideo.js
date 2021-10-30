import '../../components/HeroVideo/HeroVideo.scss';
import Scrub from "../../assets/icons/scrub.svg";

export default function HeroVideo(props){
    return(
    <article>
        <video className="video" poster={props.heroVideo.image}></video>
        <img className ="video__scrub" src={Scrub} />
    </article>
    )
}