import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import AboutVideo from './components/AboutVideo/AboutVideo';
import SubmitComments from './components/SubmitComments/SubmitComments';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroVideo />
      <AboutVideo />
      <SubmitComments />
    </div>
  );
}

export default App;
