/* import logo from './logo.svg'; */
import image from './assets/rick-morty.png';
import './App.css';

function App() {
  const requestApi = () =>{
    console.log("click....");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <img src={image} alt='Rick & Morty' className='img-home'/>
        <button onClick={requestApi} className="btn-search">Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
