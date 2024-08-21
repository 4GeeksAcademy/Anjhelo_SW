import React from "react";

export const Informacion = (props) => {
     


    return (

        <div>
            <div className="row">
                <div className="col-8 d-flex justify-content-center">
                    <img src="https://via.placeholder.com/800x600"/>
                </div>
                <div className="col-4">
                    <h1>{props.name}</h1>
                    <p>{props.info}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                <h1>Hola</h1>
                </div>
                <div className="col-2">
                <h1>Hola</h1>
                </div>
                <div className="col-2">
                <h1>Hola</h1>
                </div>
                <div className="col-2">
                <h1>Hola</h1>
                </div>
                <div className="col-2">
                <h1>Hola</h1>
                </div>
                <div className="col-2">
                <h1>Hola</h1>
                </div>
            </div>




        </div>

    );
}