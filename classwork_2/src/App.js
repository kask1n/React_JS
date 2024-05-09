import './App.css';
import Counter from './components/Counter';
import ReversedTimer from './components/ReversedTimer';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div>
      <Counter />
      <TextInput />
      <ToDoList />
      <Timer />
      <ReversedTimer />
    </div>
  );
}

export default App;
