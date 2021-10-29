import '../../components/HeroVideo/HeroVideo.scss';

export default function HeroVideo(props){
    return(
    <article>
        <video className="video" poster={props.heroVideo.image}></video>
    </article>
    )
}