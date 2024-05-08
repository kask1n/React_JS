import logo from './logo.svg';
import './App.css';
import './components/Greeting';
import Greeting from './components/Greeting';
import NewComponent from './components/NewComponent';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <CurrentTime />
        <NewComponent />
        <EventCard title={'Урок 1'} date={'01-04-2024'} location={'Онлайн'} isRed={false} />
        <EventCard title={'Урок 2'} date={'02-04-2024'} location={'Оффлайн'} isRed={true} />
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
      <p>Hidden Random Text</p>
    </div>
  );
}

export default App;
