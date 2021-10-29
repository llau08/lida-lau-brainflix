import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import AboutVideo from "./components/AboutVideo/AboutVideo";
import Data from './data/video-details.json';
import { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    video: Data,
    heroVideo: Data[0],
  }

  render(){
  return (
    <div className="App">
      <Header />
      <HeroVideo heroVideo={this.state.heroVideo} />
      <AboutVideo video={this.state.heroVideo}/>
     
    </div>
  );
}
}

export default App;
