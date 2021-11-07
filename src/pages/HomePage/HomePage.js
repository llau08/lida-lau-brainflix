import AboutVideo from "../../components/AboutVideo/AboutVideo";
import Comments from "../../components/Comments/Comments";
import DisplayedComments from "../../components/DisplayedComments/DisplayedComments";
import NextVideos from "../../components/NextVideos/NextVideos";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import { Component } from 'react';
import './HomePage.scss';
import axios from "axios";
const apiURL = "https://project-2-api.herokuapp.com/"
const apiKey = "e70655b6-d394-49a3-b58f-194cce535d6b";


class HomePage extends Component {
    state = {
        video: [], 
        heroVideo: null,
        }

        componentDidMount(){
          axios
          .get(`${apiURL}videos/?api_key=${apiKey}`).then ((response) => {
            this.setState({video: response.data});
            return axios.get(`${apiURL}videos/${response.data[0].id}/?api_key=${apiKey}`)
          .then ((response)=>{
            this.setState ({heroVideo: response.data});
          }).catch((error)=>{
            return (error);
          });
        })}

          componentDidUpdate (prevProps){
            if (prevProps.match.params.id !== this.props.match.params.id)
            {axios.get (`${apiURL}videos/${this.props.match.params.id}/?api_key=${apiKey}`).then ((response) => {
              this.setState ({heroVideo: response.data})
            }).catch((error)=>{
              return (error);
            });
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