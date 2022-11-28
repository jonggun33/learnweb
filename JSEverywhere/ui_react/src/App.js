import './App.css';
import Sparkle from './Sparkle';

function App() {
  const name = 'gim';
  const now = String(new Date());
  return (
    <div className="App">
      <h1>UI with React</h1>
      <p>Hello {name}</p>
      <p>Time is {now} </p>
      <p> 2+2 = {2+2}</p>
      <Sparkle />
    </div>
  );
}

export default App;
