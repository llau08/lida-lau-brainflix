import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';
import Data from '../../data/video-details.json';

const formatTimestamp = Intl.DateTimeFormat('en-US',{
    year: "numeric",
    month: "numeric",
    day: "2-digit",
}).format(Data[0].timestamp);

export default function AboutVideo (){
    return(
    <section>
        <h1>{Data[0].title}</h1>
        <hr />
        <ul>
            <li>{Data[0].channel}</li>
            <li><img src={likes}/>{Data[0].likes}</li>
            <li>{formatTimestamp}</li>
            <li><img src={views}/>{Data[0].views}</li>
        </ul>
        <hr />
        <p>{Data[0].description}</p>
        <h4>3 Comments</h4>
    </section> 
    )
}