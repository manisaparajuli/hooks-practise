import './App.css';
import ArrayuseState from './components/ArrayuseState';
import HookCounter from './components/HookCounter';
import UseState from './components/UseState';
import CounterUseEffect from './components/counterUseEffect';

function App() {
  return (
    <div className="App">
      <h1> React Hooks examples</h1> 
      <hr />
      <h2>UseState Hooks....</h2>
      <HookCounter/>
      <UseState/>
      <ArrayuseState/>
      <hr />
      <h2>UseRffect Hooks...</h2>
      <CounterUseEffect/>

    </div>
  );
}

export default App;
