import logo from './logo.svg';
import './App.css';
import Hding from './Hding';
import Para from './Para';
import Dttm from './Dttm';
import Phtos from './Phtos';
import './mystyl.css';


function App() {
  return (
    <>
      <Hding/>
      <div className="cntanr">
        <Para/>
        <Dttm/>
        <Phtos/>
      </div>

      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    </>
  );
}

export default App;
