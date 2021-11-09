import '../../components/HeroVideo/HeroVideo.scss';

export default function HeroVideo({heroVideo}){
    return(
    <article className="video">
        <video className="video__poster" controls poster={heroVideo.image}></video>
    </article>
    )
}