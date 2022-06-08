import React, { useState } from "react";

export default function Personajes(props) {
    const { personajes, setPersonajes } = props;

    const [counter, setCounter] = useState(1);
    const [res, setRes] = useState([]);
    const [bandera, setBandera] = useState(true)

    const resetPersonajes = () => {
        setPersonajes(null)
    }

    const sigPage = async () => {
        setCounter(counter + 1);

        const requesApi = await fetch(`https://rickandmortyapi.com/api/character?page=${counter + 1}`);
        const response = await requesApi.json();
        setRes(response.results);
        setBandera(false)
    }

    return (
        <div className='characters'>
            <h1>Personajes</h1>
            <button className='btn-search' onClick={resetPersonajes}>Volver a Inicio</button>

            {bandera === true ? (
                <div className='container-characters'>
                    {personajes.map((character, index) => (
                        <div className='character-container' key={index}>
                            <div>
                                <img src={character.image} alt={character.name} />
                            </div>
                            <div>
                                <h3>{character.name}</h3>
                                <h6>
                                    {
                                        character.status === "Alive" ? (
                                            <>
                                                <span className='alive' />
                                                Alive
                                            </>
                                        ) : (
                                            <>
                                                <span className='dead' />
                                                Dead
                                            </>
                                        )
                                    }
                                </h6>
                                <p>
                                    <span className='text-grey'>Episodios: </span>
                                    <span>{character.episode.length}</span>
                                </p>
                                <p>
                                    <span className='text-grey'>Especie: </span>
                                    <span>{character.species}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (<div className='container-characters'>
                {res.map((character, index) => (
                    <div className='character-container' key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {
                                    character.status === "Alive" ? (
                                        <>
                                            <span className='alive' />
                                            Alive
                                        </>
                                    ) : (
                                        <>
                                            <span className='dead' />
                                            Dead
                                        </>
                                    )
                                }
                            </h6>
                            <p>
                                <span className='text-grey'>Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className='text-grey'>Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>)}

            <button onClick={sigPage} className="btn-search">Siguiente Página</button>
        </div>
    )

}