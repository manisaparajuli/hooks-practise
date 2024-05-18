import './App.css';
import ArrayuseState from './components/ArrayuseState';
import HookCounter from './components/HookCounter';
import UseState from './components/UseState';

function App() {
  return (
    <div className="App">
      React Hooks examples
      <HookCounter/>
      <UseState/>
      <ArrayuseState/>

    </div>
  );
}

export default App;
