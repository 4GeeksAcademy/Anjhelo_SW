import React from "react";
import { Link } from "react-router-dom";

export const Favoritos = (props) => {
    return(

        <li className="text-info" style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <Link to={`/info/${props.type}/${props.id}`}>
                {props.name}
            </Link>
                <i type="Button" className="fa-solid fa-trash" onClick={() => props.Eliminar()} style={{color: "#234b90"}}></i>
            </li>

    );
}