import './App.css';

function App() {
  const userName = 'Alexander';
  return (
    <div className="App">
      <h1>Hello, {userName}!</h1>
      <Article number='3' name='Info' />
      <Article number='5' name='Blog' />
      <Heading />
    </div>
  );
}

function Article({ name, number }) {
  let themeSiteWhite = true;
  return (
    <div>
      <h2 className='Heading' style={{ color: themeSiteWhite ? 'green' : 'red' }}>Статья про {name} номер {number}</h2>
      <a href='#'>Читать статью</a>
    </div>
  );
}

function Heading() {
  return (
    <div>
      <h2>Новый текст внутри заголовка</h2>
      <p>Новый текст</p>
      <a href='#'>Читать далее...</a>
    </div>
  )
}

export default App;
