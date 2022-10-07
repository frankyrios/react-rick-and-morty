import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Character from "../character/Character";

const CharacterDetail = () => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacters] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            const results = await data.json();
            setCharacters(results);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <div className="container">
            {loading ? (
                <div className="fullPage text-center display-1 py-3">Cargando...</div>
            ) :
                <div className="row">
                    <p>
                        <a href="#" className="btn btn-primary btn-sm">← Atrás</a>
                    </p>
                    <Character
                        key={character.id}
                        name={character.name}
                        species={character.species}
                        image={character.image}
                        origin={character.origin.name}
                    />
                </div>
            }
        </div>
    );

};



export default CharacterDetail;