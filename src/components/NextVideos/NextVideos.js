import '../../components/NextVideos/NextVideos.scss';
import { Link } from 'react-router-dom';

export default function NextVideos(props){
    return(
        <article className="next">
            <h3>NEXT VIDEOS</h3>
            <ul>
            {props.video.filter((unfilteredVideo)=>{
                return (unfilteredVideo.id !== props.heroVideo.id)
            }).map((video,i)=>{
                if (video.title === props.video.title){return null}
                return(
                    <li key={i} className="next__indv-box">
                        <Link to={"/videos/"+ video.id}>
                        <img className="next__img"src={video.image} alt={video.title}></img>
                        <div className="next__names">
                            <h3 className="next__video-title">{video.title}</h3>
                            <p>{video.channel}</p>
                        </div>
                        </Link>
                    </li>
                )
            })}
            </ul>
        </article>
    )
}