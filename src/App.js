import './App.css';
import ArrayuseState from './components/ArrayuseState';
import HookCounter from './components/HookCounter';
import MouseContainer from './components/MouseContainer';
// import Mouselog from './components/Mouselog';
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
      <h2>UseEffect Hooks...</h2>
      <CounterUseEffect/>
      <br />
      {/* <Mouselog/> */}
      <MouseContainer/>

    </div>
  );
}

export default App;
