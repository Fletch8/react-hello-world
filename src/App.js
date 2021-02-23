import logo from './logo.svg';
import './App.css';
import Animal from './Animal';
import Human from './Human';
import Car from './Car';

function App() {
  return (
    <div className="App">
      <Animal animal="dog"/>
      <Animal animal="cat"/>
      <Animal animal="tiger"/>
      <Animal animal="eagele"/>
      <Animal animal="lion"/>

      <Human name="fletch" location="GA" age="Old enough"/>

      <Car />
    </div>
  );
}

export default App;
