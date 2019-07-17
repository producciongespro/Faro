import React, { Component } from 'react';
import dataGeneral from '../data/planeamiento/docs_planeamiento_main.json';
import images from '../data/images.json';

var materiasPrimaria = [
    {
        "label": "Matemática",
        "id": "matematica"
    },
    {
        "label": "Ciencias",
        "id": "ciencias"
    },
    {
        "label": "Español",
        "id": "espanol"
    },
    {
        "label": "Estudios sociales",
        "id": "estudios"
    },
    {
        "label": "Mediación",
        "id": "general"
    }


];

var materiasSecundaria = [
    {
        "label": "Artes Industriales",
        "id": "artesIndustriales"
    },
    {
        "label": "Matemática",
        "id": "matematica"
    },
    {
        "label": "Ciencias",
        "id": "ciencias"
    },
    {
        "label": "Español",
        "id": "espanol"
    },
    {
        "label": "Estudios sociales",
        "id": "estudios"
    },
    {
        "label": "Mediación",
        "id": "general"
    },
    {
        "label": "Biología",
        "id": "biologia"
    },
    {
        "label": "Química",
        "id": "quimica"
    },
    {
        "label": "Física",
        "id": "fisica"
    }

];

var anoSecundaria = [
    {
        "label": "Sétimo",
        "id": "7"
    },
    {
        "label": "Octavo",
        "id": "8"
    },
    {
        "label": "Noveno",
        "id": "9"
    },
    {
        "label": "Décimo",
        "id": "10"
    },
    {
        "label": "Undécimo",
        "id": "11"
    },
    {
        "label": "Duodécimo",
        "id": "12"
    }
];

var annoPrimaria = [
    {
        "label": "Primero",
        "id": "1"
    },
    {
        "label": "Segundo",
        "id": "2"
    },
    {
        "label": "Tercero",
        "id": "3"
    },
    {
        "label": "Cuarto",
        "id": "4"
    },
    {
        "label": "Quinto",
        "id": "5"
    },
    {
        "label": "Sexto",
        "id": "6"
    }
];

var annoPrrescolar = [
    {
        "label": "Interactivo I",
        "id": "1"
    },
    {
        "label": "Interactivo II",
        "id": "2"
    },
    {
        "label": "Transición",
        "id": "3"
    }

]



class BuscadorPlaneamiento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarjetas: [],
            nivel : ""
        };
        
        this.materia = "";
        this.anno = "";
        this.poblacion = "";
        this.apoyos = "";
        this.mensaje = "";
        this.claseCSSMaterias = "input-group mb-3";
        
    }

    handlerobtenerNivel = (e) => {
        this.setState({ nivel: e.target.value });
    }

    handlerobtenerMateria = (e) => {
        this.materia = e.target.value;
        console.log(this.materia);
    }

    handlerObtenerAnno = (e) => {
        this.anno = e.target.value;
        console.log(this.anno);
    }


 
    buscarInfo = () => {

        //console.log(dataGeneral);
        //console.log("Materia a buscar", this.materia );
        //console.log("Año a buscar", this.anno );       

        var arrayHtml;
        var arrayTmp = [];

        for (let index = 0; index < dataGeneral.length; index++) {

            //Expresión regular para materia
            let strMateria = dataGeneral[index].materia;
            let pattMateria = new RegExp(this.materia);
            let resMateria = pattMateria.test(strMateria);

            //Expresión regular para año
            let strAnno = dataGeneral[index].anno;
            let pattAnno = new RegExp(this.anno);
            let resAnno = pattAnno.test(strAnno);

            // console.log(  "res Materia",  resMateria   );
            // console.log("res Año", resAnno );          
            //console.log("this.apoyos=", this.apoyos  );
            //console.log( "dataGeneral=", dataGeneral[index].apoyos );



            if (this.state.nivel === dataGeneral[index].nivel && resMateria && resAnno ) {

                //console.log( "Nombre del recurso", dataGeneral[index].nombre );
                //console.log( "Año:", dataGeneral[index].anno );                

                arrayHtml = (
                    <React.Fragment>
                        <h5>    {dataGeneral[index].nombre} </h5>
                        <span> <strong>  <i className="fab fa-diaspora"></i>  Descripción:</strong>  {dataGeneral[index].desc}  </span>
                        <br />                 
                    
                        <a href={dataGeneral[index].ejemplo} target="_blank" rel="noopener noreferrer" >  Ver recurso  </a>
                        <hr />
                    </React.Fragment>
                )
                arrayTmp.push(arrayHtml);
            }

        };

        if (arrayTmp.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {arrayTmp.length}   </span>  </React.Fragment>);
        }


        this.setState({ tarjetas: arrayTmp });



    }


    componentWillMount() {

        console.log("will mount");

    }




    render() {
        return (
            <React.Fragment>
                <div className="row">

                    <div className="col-10  text-right">
                        <h2>Buscador documentos Apoyos Planeamiento</h2>
                    </div>
                    <div className="col-2">
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCerrarBuscador} src={images[0].BtnVolver} alt="Volver" />
                    </div>
                </div>





                <div className="container">
                    <div className="row">

                    <div className="col-3">
                            <div className={this.claseCSSMaterias}   >
                                <div className="input-group-prepend">
                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selNivel">Nivel</label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selNivel" onChange={this.handlerobtenerNivel} >
                                    <option defaultValue value="" >Todas</option>
                                    <option value="primaria"> Primaria </option>
                                    <option value="secundaria"> Secundaria </option>                                   
                                </select>
                            </div>
                        </div>


                        <div className="col-3">
                            <div className={this.claseCSSMaterias}   >
                                <div className="input-group-prepend">
                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selMateria">Materia</label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selMateria" onChange={this.handlerobtenerMateria} >
                                    <option defaultValue value="" >Todas</option>
                                    {
                                        this.state.nivel === "primaria" &&
                                        materiasPrimaria.map((item, i) => (
                                            <option key={"materia" + i} value={item.id} >  {item.label}  </option>
                                        ))
                                    }
                                    {
                                        this.state.nivel === "secundaria" &&
                                        materiasSecundaria.map((item, i) => (
                                            <option key={"materia" + i} value={item.id} >  {item.label}  </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-3  ">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selAno">Año</label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selAno" onChange={this.handlerObtenerAnno}  >
                                    <option defaultValue value="" > Todos </option>

                                    {
                                        this.state.nivel === "preescolar" &&
                                        annoPrrescolar.map((item, i) => (
                                            <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                        ))

                                    }


                                    {
                                        this.state.nivel === "primaria" &&

                                        annoPrimaria.map((item, i) => (
                                            <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                        ))

                                    }

                                    {
                                        this.state.nivel === "secundaria" &&
                                        anoSecundaria.map((item, i) => (
                                            <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                        ))

                                    }


                                </select>
                            </div>
                        </div>

                    

                        <div className="col-3">
                            <button onClick={this.buscarInfo} type="button" className="btn btn-secondary btn-lg">
                                <i className="fas fa-search"></i> Buscar
                            </button>
                        </div>


                    </div>


                    <div className="row">
                        <div className="col-12">

                            <h6>
                                {this.mensaje}
                            </h6>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">
                            {
                                this.state.tarjetas.map((item, i) => (
                                    <div key={"tarjeta" + i} > {item} </div>
                                ))
                            }
                        </div>
                    </div>



                </div>


            </React.Fragment>
        );
    }
}

export default BuscadorPlaneamiento;