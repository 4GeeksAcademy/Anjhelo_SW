import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import  { Card }  from "../component/Card.jsx";

export const Home = () => {

    const { store, actions } = useContext(Context);


    useEffect(() =>{
        actions.getCharacters()
        actions.getPlanets();
     }, [])


    return (
        <div className="container-fluid">
            <h1 className="mt-5 text-danger">Characters</h1>
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
                {store.Character.map(character =>
                    
                    <Card key={character.result._id} name={character.result.properties.name} p1={`Gender: ${character.result.properties.gender}`} p2={`Hair Color: ${character.result.properties.hair_color}`} p3={`Eye-Color: ${character.result.properties.eye_color}`} id={character.result.uid} type={"people"}/>
                )}
            </div>

            <h1 className="mt-5 text-danger">Planets</h1>
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
                {store.Planets.map(planet =>
                    
                    <Card key={planet.result._id} name={planet.result.properties.name} p1={`Population:: ${planet.result.properties.population}`} p2={`Terrain: ${planet.result.properties.terrain}`} id={planet.result.uid} type={"planets"}/>
                )}
            </div>

        </div>
    );
};