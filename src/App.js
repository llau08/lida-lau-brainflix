import HeroVideo from './components/HeroVideo/HeroVideo';
import AboutVideo from "./components/AboutVideo/AboutVideo";
import Comments from "./components/Comments/Comments";
import DisplayedComments from './components/DisplayedComments/DisplayedComments';
import NextVideos from './components/NextVideos/NextVideos';
import Data from './data/video-details.json';
import { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UploadPage from './pages/UploadPage/UploadPage';


class App extends Component {
  state = {
    video: Data,
    heroVideo: Data[0],
    }

    handleClick = (videoObj)=>{
      const videosCopy = this.state.video;
      const index = videosCopy.findIndex((video)=>{
        return video.id === videoObj.id
      })
      this.setState({heroVideo: videosCopy[index]});
    }

  render(){
  return (
    <div className="App">
      {/* <UploadPage /> */}
      <BrowserRouter>
      <header>
        <NavBar />
        <HeroVideo heroVideo={this.state.heroVideo} />
      </header>
      <Switch>
      <main className="main">
        <div className="main__content">
          <AboutVideo video={this.state.heroVideo} />
          <Comments />
          <DisplayedComments comment={this.state.heroVideo.comments}/>
        </div>
      <NextVideos heroVideo={this.state.heroVideo} video={this.state.video} handleClick={this.handleClick}/>
      </main>
      </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
