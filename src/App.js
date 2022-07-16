import './App.css';
import { authenticate } from './Auth'

function App() {
  return (
    <div className="App">
      <button onClick={() => authenticate()} type="button" >Connect wallet</button>
    </div>
  );
}

export default App;
  