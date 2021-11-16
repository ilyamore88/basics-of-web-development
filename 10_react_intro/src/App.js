import './App.css';
import SimpleComponent from "./components/SimpleComponent";
import Hello from "./components/Hello";
import ComponentWithState from "./components/ComponentWithState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleComponent/>
        <Hello
          name={'Ilya'}
        />
        <ComponentWithState/>
      </header>
    </div>
  );
}

export default App;
