import React from "react";
import { Link } from "react-router-dom";

// Todo el codigo es funcional solo que tarda en hacer los fetch

export const Card = (props) => {

    return(

        <div className="col-auto">
            <div className="card border-1 radius" style={{width: "18rem", height:"auto", borderColor: "black"}}>
            <img src={`https://starwars-visualguide.com/assets/img/${props.type === "people" ? "characters" : props.type === "planets" ? "planets" : "vehicles"}/${props.id}.jpg`} className="card-img-top mt-auto" 
            alt="..." onError={(e) => e.target.src = "https://via.placeholder.com/400x400"}/>

                <div className="card-body bg-black ">
                    <h5 className="card-title text-info">{props.name}</h5>
                    <p className="card-text mb-1 text-info">{props.p1}</p>
                    <p className="card-text mb-1 text-info">{props.p2}</p>
                    <p className="card-text text-info">{props.p3}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/info/${props.type}/${props.id}`}> 
                        <button className="btn btn-outline-info">Learn more!</button>
                        </Link>
                        <i type="button"className="fa-regular fa-heart" onClick={() => props.guardar()} style={{color: "#0dcaf0", fontSize: "34px", padding: "2px"}}></i>
                    </div>
                </div>
            </div>
	    </div>
    ); 
}