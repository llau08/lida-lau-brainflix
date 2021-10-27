import Data from '../../data/video-details.json';

export default function HeroVideo(){
    return(
        <video>
            <source width="750" src={Data[0].video} type={Data[0].video}></source>
        </video>
    )
}