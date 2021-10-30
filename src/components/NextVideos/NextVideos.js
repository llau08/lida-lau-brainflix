import '../../components/NextVideos/NextVideos.scss';

export default function NextVideos(props){
    return(
        <article className="next">
            <h3>NEXT VIDEOS</h3>
            {props.video.filter((unfilteredVideo)=>{
                return (unfilteredVideo.id !== props.heroVideo.id)
            }).map((video)=>{
                if (video.title === props.video.title){return null}
                return(
                    <div className="next__indv-box"onClick={()=>props.handleClick(video)}>
                        <img className="next__img"src={video.image} alt="travel video"></img>
                        <div className="next__names">
                            <h3 className="next__video-title">{video.title}</h3>
                            <p>{video.channel}</p>
                        </div>
                    </div>
                )
            })}
        </article>
    )
}