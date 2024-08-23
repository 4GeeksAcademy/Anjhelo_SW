import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Favoritos } from "./Favoritos.jsx";

export const Navbar = () => {

	const {store, actions} = useContext(Context)



	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img src="https://assets.stickpng.com/images/602175e40ad3230004b93c20.png" style={{width: "150px", height:"auto"}} className="m-4"/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
				<button className="btn btn-info dropdown-toggle dropdown-menu-left" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
				<i className="fa-solid fa-heart pe-2" style={{color: "#000", fontSize: "15px", padding: "2px"}}></i> 
				 Favorites ({store.Favoritos.length})
				</button>
				<ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="dropdownMenuButton1">
					{store.Favoritos.map(fav => (
						<Favoritos name={fav.result.properties.name} type={fav.result.description === "A planet." ? "planets" : fav.result.description === "A vehicle" ? "vehicles" : "people"} 
									id={fav.result.uid} key={fav.result._id}
									Eliminar={() => actions.eliminarFavorito(fav.result._id)}/>
					))}
				</ul>
				</div>
			</div>
		</nav>
	);
};
