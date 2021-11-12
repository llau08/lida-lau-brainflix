import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';
import "../../components/AboutVideo/AboutVideo.scss";
import {formatTimestamp} from '../../utilities/Utilities';

export default function AboutVideo ({video}){
    return(
    <section className="about-video">
        <h1 className="about-video__title">{video.title}</h1>
        <ul className="about-video__list">
            <li className="about-video__list-i--bold">By {video.channel}</li>
            <li className="about-video__list-i"><img className="about-video__icon" src={views} alt="eye icon"/>{video.views}</li>
            <li className="about-video__list-i">{formatTimestamp(video.timestamp)}</li>
            <li className="about-video__list-i"><img className="about-video__icon" src={likes} alt="heart icon"/>{video.likes}</li>  
        </ul>
        <p className="about-video__description">{video.description}</p>
        <h3 className="about-video__count">{video.comments.length} Comments</h3>
    </section> 
    )
}