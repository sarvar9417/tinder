import Header from './components/Header';
import TinderCard from './components/TinderCards';
import './App.css';
import SwipeButton from './components/SwipeButton';

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCard/>
      <SwipeButton />
    </div>
  );
}

export default App;
