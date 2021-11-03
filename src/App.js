
import { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UploadPage from './pages/UploadPage/UploadPage';
import HomePage from './pages/HomePage/HomePage';



class App extends Component {
  // state = {
  //   video: Data,
  //   heroVideo: Data[0],
  //   }

  //   handleClick = (videoObj)=>{
  //     const videosCopy = this.state.video;
  //     const index = videosCopy.findIndex((video)=>{
  //       return video.id === videoObj.id
  //     })
  //     this.setState({heroVideo: videosCopy[index]});
  //   }

  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/upload" component={UploadPage} />
        <Route path="/videos/:id" component={HomePage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
