/* import logo from './logo.svg'; */
import { useState } from 'react';

import image from './assets/rick-morty.png';
import './App.css';

function App() {

  const [personajes, setPersonajes] = useState(null);

  const requestApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setPersonajes(characterApi.results);
  }

  console.log(personajes);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <img src={image} alt='Rick & Morty' className='img-home' />
        <button onClick={requestApi} className="btn-search">Buscar Personajes</button>
      </header>
    </div>
  );

}

export default App;
