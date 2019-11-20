import React, { Component } from 'react';
import images from '../data/images.json';
import ejemplosItemesPrimaria from '../data/evaluacion/ejemplos_itemes_primaria.json';
import ejemplosItemesSecundaria from '../data/evaluacion/ejemplos_itemes_secundaria.json';

//console.log("ejemplosItemesPrimaria",ejemplosItemesPrimaria[0]["Estudios sociales"] );


class EjemplosItemesEvaluacion extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            asignaturas : null,
            asignatura : null 
        }
    }
    ejemplosItemesJson = "";
    materiasPrimaria = ["Ciencias", "Francés", "Italiano", "Inglés", "Matemática" ];
    materiasSecundaria = ["Ciencias", "Estudios Sociales", "Cívica", "Francés", "Inglés", "Itaiano", "Biología",  "Español" ]

    handlerCargarAsignatura =(e)=> {
        const nivel = e.target.value;
        switch (nivel) {
            case "primaria":
                this.setState({ asignaturas: this.materiasPrimaria });
                this.ejemplosItemesJson = ejemplosItemesPrimaria;
            break;
            case "secundaria":
                this.setState({ asignaturas: this.materiasSecundaria });
                this.ejemplosItemesJson = ejemplosItemesSecundaria;    
            break;
        
            default:
                console.log("Opcion fuera de rango");                
            break;
        }
    }

    handlerSeleccionarAsignatura =(e)=>{
        const valor = e.target.value;
        const itemes = this.ejemplosItemesJson[0][valor];
        console.log("itemes", itemes);
        
    }


    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron">
                    <h2>Ejemplos de itemes</h2>
                </div>
                <div className="row">
                    <div className="col-12 text-right">
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCerrarEjemplosItemes} src={images[0].BtnVolver} alt="Volver" />
                    </div>
                </div>
                <div className="row">
                 <div className="col-2">
                    <select onClick={this.handlerCargarAsignatura}>
                        <option value="" defaultValue disabled > Seleccione un nivel </option>
                        <option value="primaria"> Primaria </option>
                        <option value="secundaria"> Secundaria </option>
                    </select>
                 </div> 
                 <div className="col-2">
                    <select onClick={this.handlerSeleccionarAsignatura} >
                        <option value="" defaultValue disabled> Seleccione una asginatura </option>
                        {
                            this.state.asignaturas != null && (
                                this.state.asignaturas.map((item, i)=>(
                                    <option key={"asignatura"+i  } value={item}> {item}  </option>
                                )) 
                            )
                        }                       
                    </select>
                 </div>                
                </div>
            </div>
         );
    }
}
 
export default EjemplosItemesEvaluacion;