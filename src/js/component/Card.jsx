import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {

    return(

        <div className="col-auto">
            <div className="card" style={{width: "18rem", height:"auto"}}>
                <img src="https://via.placeholder.com/400x200" className="card-img-top mt-auto" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text mb-1">{props.p1}</p>
                    <p className="card-text mb-1">{props.p2}</p>
                    <p className="card-text">{props.p3}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/info/${props.type}/${props.id}`}> 
                        <button className="btn btn-outline-primary">Learn more!</button>
                        </Link>
                        <i type="button" className="btn btn-success"> {"<3"} </i>
                    </div>
                </div>
            </div>
	    </div>
    ); 
}