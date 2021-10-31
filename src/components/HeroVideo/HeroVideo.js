import '../../components/HeroVideo/HeroVideo.scss';

export default function HeroVideo(props){
    return(
    <article className="video">
        <video className="video__poster" controls poster={props.heroVideo.image}></video>
    </article>
    )
}