import './App.css';
import Counter from './components/Counter';
import MessagesList from './components/List';
import RefExample from './components/RefExample';
import Timer from './components/Timer';
import Show from './components/Visible';

function App() {
  const userName = 'Alex'
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <RefExample />
      <Timer />
      <Counter />

      <MessagesList />
      <Show data='Текст из компонента 1' />
      <Show data='Текст из компонента 2' />
    </div>
  );
}

export default App;
