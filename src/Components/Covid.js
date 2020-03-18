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

    const Tarjeta =(props )=> {
        

        return (
            <div className="col-4">
        <div className="card">
            <img
                src={props.item.urlImagen}
                className="card-img-top"
                alt={"imagen previa del recurso " + props.item.nombre}
            />
            <div className="card-body">
                <a href={props.item.url}
                 target="_blank"
                 rel="noopener noreferrer"
                >
                    <h5 className="card-title">
                        {props.item.nombre}
                    </h5>
                </a>
                <p className="card-text">
                    {props.item.descriptivo}
                </p>
            </div>
            <div className="card-body">                
                <a
                    href={props.item.url}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver recurso <i className="fas fa-eye" ></i>                                    
            </a>
            </div>
        </div>
    </div>
        )
    }    
    

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
                        arrayJson.map((item,index)=>(
                            <Tarjeta item={item} key={"covid"+index} />
                        ))   
                    }
                </div>
            </div>
    );

}


export default Covid;

