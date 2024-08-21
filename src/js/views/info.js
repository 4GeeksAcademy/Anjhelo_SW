import React, { useEffect } from "react";
import { Informacion } from "../component/informacion.jsx";
import { useParams } from "react-router";

export const Info = () => {

    const params = useParams();

    useEffect(() => {

    },[])

    return(

        <div>
            <Informacion/>
        </div>


    );
}