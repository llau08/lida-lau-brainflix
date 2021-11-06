import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';
import "../../components/AboutVideo/AboutVideo.scss";

export default function AboutVideo (props){
    const formatTimestamp = Intl.DateTimeFormat('en-US',{
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(props.video.timestamp);

    return(
    <section className="about-video">
        <h1 className="about-video__title">{props.video.title}</h1>
        <ul className="about-video__list">
            <li className="about-video__list-i--bold">By {props.video.channel}</li>
            <li className="about-video__list-i"><img className="about-video__icon" src={views} alt="eye icon"/>{props.video.views}</li>
            <li className="about-video__list-i">{formatTimestamp}</li>
            <li className="about-video__list-i"><img className="about-video__icon" src={likes} alt="heart icon"/>{props.video.likes}</li>  
        </ul>
        <p className="about-video__description">{props.video.description}</p>
        <h3 className="about-video__count">{props.video.comments.length} Comments</h3>
    </section> 
    )
}