import './App.css';
import First from './components/First.tsx';
import Datafetch from './UseEffect/Datafetch.tsx';
import PageTitle from './UseEffect/Pagetitle.tsx';
import Timer from './UseEffect/Timer.tsx';
import Counter from './UseState/Counter.tsx';

function App() {
  return (
    <div className="App">
      <First/>
      <Counter/>
      <h1>UseEffect loding</h1>
      <Datafetch/>
      <h1>UseEffect Pagetitle change</h1>
      <PageTitle/>
      <h1>UseEffect Timmer</h1>
      <Timer/>
    </div>
  );
}

export default App;
