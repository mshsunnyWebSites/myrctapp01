import logo from './logo.svg';
import './App.css';
import Hding from './Hding';
import Para, {stmt, lsts, stls} from './Para';   // Default & Other Mentioned variables or functions import
import * as aldta from './Datas';   // All variables or functions import
import Dttm from './Dttm';
import Phtos from './Phtos';
import './mystyl.css';


function App() {
  return (
    <>
      <Hding/>
      <div className="cntanr">
        <Para/>
        <span>{stmt}</span>
        <span>{stls()}</span>
        <ul>
          <li>{aldta.default}</li>
          <li>{aldta.ksts()}</li>
          <li>{aldta.wtls()}</li>
        </ul>
        <Dttm/>
        <Phtos/>
      </div>

      {/* <div className="App">
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
      </div> */}
    </>
  );
}

export default App;
