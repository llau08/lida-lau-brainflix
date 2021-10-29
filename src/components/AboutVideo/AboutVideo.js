import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';
import "../../components/AboutVideo/AboutVideo.scss";

export default function AboutVideo (props){
    const formatTimestamp = Intl.DateTimeFormat('en-US',{
        year: "numeric",
        month: "numeric",
        day: "2-digit",
    }).format(props.video.timestamp);

    return(
    <section className="about">
        <h1>{props.video.title}</h1>
        <hr />
        <ul>
            <li>{props.video.channel}</li>
            <li><img src={likes}/>{props.video.likes}</li>
            <li>{formatTimestamp}</li>
            <li><img src={views}/>{props.video.views}</li>
        </ul>
        <hr />
        <p>{props.video.description}</p>
        <h4>3 Comments</h4>
    </section> 
    )
}