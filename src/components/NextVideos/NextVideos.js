import '../../components/NextVideos/NextVideos.scss';
import { Link } from 'react-router-dom';

export default function NextVideos(props){
    return(
        <article className="next">
            <h3>NEXT VIDEOS</h3>
            <ul>
            {props.video.filter((unfilteredVideo)=>{
                return (unfilteredVideo.id !== props.heroVideo.id)
            }).map((video,index)=>{
                if (video.title === props.video.title){return null}
                console.log(props);
                return(
                    <Link key={index} to={"/videos/"+ props.heroVideo.id}>
                    <li className="next__indv-box"onClick={()=>props.handleClick(video)}>
                        <img className="next__img"src={video.image} alt="travel"></img>
                        <div className="next__names">
                            <h3 className="next__video-title">{video.title}</h3>
                            <p>{video.channel}</p>
                        </div>
                    </li>
                    </Link>
                )
            })}
            </ul>
        </article>
    )
}