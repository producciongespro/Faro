import React, { useState, useEffect } from 'react';
import rawjson from '../data/covid.json';

var arrayJson = null;

function Covid(props) {
    const [isReady, setIsReady] = useState(false);
    async function obtener() {
        arrayJson = await rawjson;
        console.log("arrayJson", arrayJson);
        setIsReady(true);
    };

    useEffect(() => {
        obtener();
    })

    const tarjeta = (
        <div className="col-sm-6">
            <div className="row">
                <div className="col-sm-10 inform1">
                    <h6><b>Nombre: </b>Pepe</h6>
                    <p><b>Descripción: </b>   </p>
                    <a href={"www.mep.com"} className="link-card enlace-pree" target="_blank" rel="noopener noreferrer" ><strong>VISITAR</strong></a>
                    <br /><br />
                </div>
            </div>
        </div>
    )
        
    

    return (
        !isReady ?
            <div className="container">
                <span>Espere un momento...</span>
            </div>
            :
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Coronavirus 19</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, vero aliquam labore facere ullam quasi delectus, id dignissimos minima, tempore nisi suscipit dolorem! Voluptate repudiandae natus ab consectetur nostrum qui.
                    </div>
                </div>
                <div className="row">
                    {
                    tarjeta
                    }
                </div>
            </div>
    );

}


export default Covid;

