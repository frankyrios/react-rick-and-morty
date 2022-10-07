export function Character(character) {
  return (
    <div className="fullPage">
      <div className="text-center p-5">
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} className="img-fluid rounded-pill" />
        <p>Especies: <strong>{character.species}</strong> | 
        Origen: <strong>{character.origin}</strong></p>
      </div>
    </div>
  );
}
export default Character;