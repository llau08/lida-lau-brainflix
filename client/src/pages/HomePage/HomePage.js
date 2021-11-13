import AboutVideo from "../../components/AboutVideo/AboutVideo";
import Comments from "../../components/Comments/Comments";
import DisplayedComments from "../../components/DisplayedComments/DisplayedComments";
import NextVideos from "../../components/NextVideos/NextVideos";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import { Component } from 'react';
import './HomePage.scss';
import axios from "axios";
import { apiURL } from "../../utilities/Utilities";


class HomePage extends Component {
    state = {
        video: [], 
        heroVideo: null,
        }

        componentDidMount(){
          axios
          .get(`${apiURL}videos`).then ((response) => {
            console.log(response);
            this.setState({video: response.data});
            let videoid = response.data[0].id;
          if (this.props.match.params.id){
            videoid = this.props.match.params.id;
          }
            return axios.get(`${apiURL}videos/${videoid}`)
          .then ((response)=>{
            this.setState ({heroVideo: response.data})
          }).catch((error)=>{
            return (error);
          });
        })}

          componentDidUpdate (prevProps){
            if (prevProps.match.params.id !== this.props.match.params.id)
            {
              if (this.props.match.params.id){
              axios.get (`${apiURL}videos/${this.props.match.params.id}`).then ((response) => {
              this.setState ({heroVideo: response.data})
            }).catch((error)=>{
              console.log(error);
            });
          } else{
            axios.get (`${apiURL}videos/${this.state.video[0].id}`).then ((response) => {
              this.setState ({heroVideo: response.data})
            }).catch((error)=>{
              console.log(error);
            });
          }
        }}

    render(){
      if (this.state.heroVideo === null)
      return <p>Loading...</p>
    return (
      <>
       <HeroVideo heroVideo={this.state.heroVideo} />
        <main className="main">
            <div className="main__content">
                <AboutVideo video={this.state.heroVideo} />
                <Comments />
                <DisplayedComments comment={this.state.heroVideo.comments}/>
            </div>
            <NextVideos heroVideo={this.state.heroVideo} video={this.state.video}/>
      </main>
    </>
    )}
}

export default HomePage;