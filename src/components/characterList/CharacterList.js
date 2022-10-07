import { useState, useEffect } from "react";
import { Character } from "../character/Character";
import { FiltrarList } from "./FiltrarList";
import { createStore } from "redux";
import { Link } from "react-router-dom";

 
const siguiente = {
  type: '@counter/siguiente'
}

const atras = {
  type: '@counter/atras'
}

const counterReducer = (page = 0, action) => {
  switch (action.type) {
    case '@counter/siguiente':
      return page + 1;
    case '@counter/atras':
      return page - 1;
    default:
      return page
  }
}

const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">

      <button className="btn btn-primary btn-sm"
        onClick={() => {         
          setPage(page - 1);
          store.dispatch(atras);
        }}
      > ← Page {page}</button>

      <button className="btn btn-primary btn-sm"
        onClick={() => {         
          setPage(page + 1);
          store.dispatch(siguiente);
        }}
      > Page {page}→ </button>

    </header>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  const personjesFiltrados = characters.filter((character) =>
    character.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  )

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
    
      <FiltrarList filter={filter} setFilter={setFilter} />
      {loading ? (
        <div className="fullPage text-center display-1 py-3 red">Cargando...</div>
      ) : personjesFiltrados.length > 0 ? (
        <div className="row">
          {personjesFiltrados.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Link to={`/character/${character.id}`}>              
              <Character
                key={character.id}
                name={character.name}
                species={character.species}
                origin={character.origin.name}
                image={character.image}
                
              />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="fullPage">
          <div className="text-center">
            No se encontro personajes en la búsqueda{' '}
            <strong>"{filter}"</strong>
          </div>
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;