import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Informacion } from "../component/informacion.jsx";
import { useParams } from "react-router";

// Todo el codigo es funcional solo que tarda en hacer los fetch

export const Info = () => {

    const params = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getInfo(params.type, params.id);
    }, [actions]);
    

    if (!store.Data || !store.Data.result || !store.Data.result.properties) {
        return ( 
        <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>);
    }

    let planeta;
    if (params.type === "people" && store.Data.result.properties.homeworld) {
        planeta = store.Planets.find(planet => planet.result.properties.url === store.Data.result.properties.homeworld);
    }


    const parrafoPeople = `${store.Data.result.properties.name} es un personaje de Star Wars originario del planeta ${planeta ? planeta.result.properties.name : "desconocido"}. Identificado como ${store.Data.result.properties.gender}, 
    nació (o fue creado) en ${store.Data.result.properties.birth_year}. Tiene una altura de ${store.Data.result.properties.height}cm y un peso de ${store.Data.result.properties.mass}kg. 
    Su cabello es de color ${store.Data.result.properties.hair_color}, su piel es ${store.Data.result.properties.skin_color}, y tiene unos ojos ${store.Data.result.properties.eye_color}.`
    

    if(params.type === "people")
        {
            return (
                <div>
                <Informacion name={store.Data.result.properties.name} contenido={parrafoPeople} nacimiento={store.Data.result.properties.birth_year} genero={store.Data.result.properties.gender} 
                             altura={store.Data.result.properties.height} piel={store.Data.result.properties.skin_color} colorOjo={store.Data.result.properties.eye_color} />
                </div>
            );
    
        }

    const parrafoPlaneta = `${store.Data.result.properties.name} es un planeta de Star Wars con un diámetro de ${store.Data.result.properties.diameter} 
    kilómetros. Tiene un período de rotación de ${store.Data.result.properties.rotation_period} horas y un período orbital de ${store.Data.result.properties.orbital_period} días. 
    La gravedad en este planeta es de ${store.Data.result.properties.gravity}. Está habitado por aproximadamente ${store.Data.result.properties.population} habitantes. 
    El clima es predominantemente ${store.Data.result.properties.climate} y el terreno es mayoritariamente ${store.Data.result.properties.terrain}. 
    Además, cuenta con un ${store.Data.result.properties.surface_water}% de agua en su superficie.`;



    if(params.type === "planets")
        {
            return (
                <div>
                <Informacion name={store.Data.result.properties.name} contenido={parrafoPlaneta} clima={store.Data.result.properties.climate} poblacion={store.Data.result.properties.population}
                            orbita={store.Data.result.properties.orbital_period} rotacion={store.Data.result.properties.rotation_period} diametro={store.Data.result.properties.diameter}/>
            </div>
        );
        
    }


    const parrafoVehiculo = `${store.Data.result.properties.name} es un vehículo de Star Wars de clase ${store.Data.result.properties.vehicle_class}. 
    Fabricado por ${store.Data.result.properties.manufacturer}, su costo en créditos es ${store.Data.result.properties.cost_in_credits}. 
    Con una longitud de ${store.Data.result.properties.length} metros y una velocidad máxima en la atmósfera de ${store.Data.result.properties.max_atmosphering_speed} km/h, 
    este vehículo está diseñado para una tripulación de ${store.Data.result.properties.crew}. Su capacidad de carga es de ${store.Data.result.properties.cargo_capacity} kg y puede ser abastecido por ${store.Data.result.properties.consumables}.`

    if(params.type === "vehicles")
    {
        return (
            <div>
                <Informacion name={store.Data.result.properties.name} contenido={parrafoVehiculo} modelo={store.Data.result.properties.model} clase={store.Data.result.properties.vehicle_class}
                             pasajeros={store.Data.result.properties.passengers} speed={store.Data.result.properties.max_atmosphering_speed} creador={store.Data.result.properties.manufacturer}/>
            </div>
        );
    }
    

};