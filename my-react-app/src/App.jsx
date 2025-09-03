//import logo from './R.png';
import './App.css';

import TodoList from './components/TodoList' ;
import UserCard from './components/UserCard';
import Welcome from './components/Welcome';
import ComponentExamples from './components/ComponentExamples';

function App() {
  return (
    <div className="App">
      <ComponentExamples/>
      <Welcome/>
      <UserCard/>
      <TodoList/>
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;