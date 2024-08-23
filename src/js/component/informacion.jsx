import React from "react";
import { useParams } from "react-router";

export const Informacion = (props) => {
     
    const params = useParams();


    return (

        <div>
            <div className="row mt-4">
                <div className="col-sm-6 d-flex justify-content-center">
                <img src={`https://starwars-visualguide.com/assets/img/${params.type === "people" ? "characters" : params.type === "planets" ? "planets" : "vehicles"}/${params.id}.jpg`} className="card-img-top mt-auto" 
            alt="..." style={{width: params.type === "people" ? "400px" : "500px", height: params.type === "people" ? "550px" : "500px"}}/>
                </div>
                <div className="col-sm-6 mt-2">
                    <h1 className="text-light">{props.name}</h1>
                    <p className="text-light fw-light fs-3 mt-4">{props.contenido}</p>
                </div>
            </div>

            <hr className="text-danger" style={{height: "8px"}}/>         
            {params.type === "planets" &&            
            <div className="row">
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Name</h3>
                <h3>{props.name}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Climate</h3>
                <h3>{props.clima}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Population</h3>
                <h3>{props.poblacion}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Orbital Period</h3>
                <h3>{props.orbita}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Rotation Period</h3>
                <h3>{props.rotacion}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Diameter</h3>
                <h3>{props.diametro}</h3>
                </div>
            </div>
            }

            {params.type === "people" && 
            <div className="row">
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                    <h3>Name</h3>
                    <h3>{props.name}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                    <h3>Birth Year</h3>
                    <h3>{props.nacimiento}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                    <h3>Gender</h3>
                    <h3>{props.genero}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                    <h3>Height</h3>
                    <h3>{props.altura}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                    <h3>Skin Color</h3>
                    <h3>{props.piel}</h3>
                </div>
                <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                    <h3>Eye Color</h3>
                    <h3>{props.colorOjo}</h3>
                </div>
            </div>
            }

            {params.type === "vehicles" && 
            <div className="row">
            <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Name</h3>
                <h3>{props.name}</h3>
            </div>
            <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Model</h3>
                <h3>{props.modelo}</h3>
            </div>
            <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Clase</h3>
                <h3>{props.clase}</h3>
            </div>
            <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Passengers</h3>
                <h3>{props.pasajeros}</h3>
            </div>
            <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Speed</h3>
                <h3>{props.speed}</h3>
            </div>
            <div className="col-6 col-sm-2 text-danger mb-1 d-grid justify-content-center text-center">
                <h3>Manufacturer</h3>
                <h3>{props.creador}</h3>
            </div>
            </div>}

        </div>

    );
}