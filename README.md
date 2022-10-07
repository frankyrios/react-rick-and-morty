# REACT Rick And Morty - FrankyRios

Esta aplicación usa datos del API https://rickandmortyapi.com/ y permite listar los personajes de Rick And Morty, realizar búsquedas por nombre, realizar paginación, y ver la información de una CARD personaje especifico. Desarrollada en React desde cero con altos estándares de calidad y aplicando la configuración de WEBPACK.

![Captura de pantalla](https://raw.githubusercontent.com/frankyrios/react-rick-and-morty/main/react-rick-and-morty-frankyrios.png)


## Instalación

1. Descargar el repositorio.
2. Instalar las dependencias con ```npm install```.
3. Iniciar el proyecto con ```npm run dev ```.
   

## Tecnologías utilizadas

- React | JS | HTML5 | CSS3 Bootstrap | REDUX | WEBPACK

### Búsqueda

- Permite realizar búsquedas por nombre sea minúscula o mayúscula. 
- Si ningún personaje no coincide mostrará un mensaje (No se encontró personajes en la búsqueda "example")

### Navegación

- Permite navegar a través de las páginas, creando un registro y cambio de estado (REDUX).
- Permite ir a una CARD individual haciendo uso de Router con parámetros.

### Estructura de resultados

-  Tanto el listado inicial de personajes como aquellos resultados de una búsqueda se presentan ordenados alfabéticamente.

### Petición a la API

- Una vez recibida la respuesta se realiza una paginación y se dispone de filtros para realizar búsqueda y existe una respuesta si no encuentra el personaje buscado por nombre y cada CARD tiene una ruta para ir a ver el detalle del mismo. Incluye un loading para cuando la respuesta se demora mostrar en pantalla que está cargando. 
- El consumo de la API para el detalle individual de cada CARD presente una estructura similar a este. 

```javascript
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
};
```
## Demo

https://frankyrios.github.io/react-rick-and-morty/

## Licencia
MIT

## Sobre mí

Desarrollador de software con más de 4 años de experiencia entregando soluciones a las diferentes necesidades empresariales con altos niveles de calidad, amplia capacidad de trabajo en equipo, orientado al cumplimiento de objetivos, excelentes relaciones interpersonales y gran habilidad para adaptarse a cambios e imprevistos técnicos.
