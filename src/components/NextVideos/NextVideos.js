import '../../components/NextVideos/NextVideos.scss';

export default function NextVideos(props){
    return(
        <article className="next">
            {props.video.filter((unfilteredVideo)=>{
                return (unfilteredVideo.id !== props.heroVideo.id)
            }).map((video)=>{
                if (video.title === props.video.title){return null}
                return(
                    <div className="next__indv-box"onClick={()=>props.handleClick(video)}>
                        <img className="next__img"src={video.image} alt="travel video"></img>
                        <div>
                            <h3>{video.title}</h3>
                            <p>{video.channel}</p>
                        </div>
                    </div>
                )
            })}
        </article>
    )
}