import React, { Component } from 'react';
import dataGeneral from '../data/recursos/generales.json';


var materias = [ 
            {
                "label" :   "Matemática",
                "id" : "matematica"
            },
            {
                "label" :   "Ciencias",
                "id" : "ciencias"
            },
            {
                "label" :   "Español",
                "id" : "espanol"
            },
            {
                "label" :   "Estudios sociales",
                "id" : "estudios"
            },
            {
                "label" :   "Mediación",
                "id" : "mediacion"
            }
    
    ];

var anoSecundaria = [ 
    {
        "label" : "Sétimo",
        "id" : "7"
    },
    {
        "label" : "Octavo",
        "id" : "8"
    },
    {
        "label" : "Noveno",
        "id" : "9"
    },
    {
        "label" : "Décimo",
        "id" : "10"
    },
    {
        "label" : "Undécimo",
        "id" : "11"
    },
    {
        "label" : "Duodécimo",
        "id" : "12"
    }
];

var annoPrimaria = [ 
    {
        "label" : "Primero",
        "id" : "1"
    },
    {
        "label" : "Segundo",
        "id" : "2"
    },
    {
        "label" : "Tercero",
        "id" : "3"
    },
    {
        "label" : "Cuarto",
        "id" : "4"
    },
    {
        "label" : "Quinto",
        "id" : "5"
    },
    {
        "label" : "Sexto",
        "id" : "6"
    }
];

var annoPrrescolar = [
        {
            "label" : "Interactivo I",
            "id" : "1"
        },
        {
            "label" : "Interactivo II",
            "id" : "2"
        },
        {
            "label" : "Transición",
            "id" : "3"
        }

 ]

var tipoPoblacion = [
            {
                "label" : "Educación para adultos",
                "id" : "adultos"
            },
            {
                "label" : "Liceos Rurales",
                "id" : "rurales"
            }
]



class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarjetas : []
          };
        this.materia="";
        this.anno="";
        this.poblacion="";
        this.apoyos="";        
        this.claseCSSMaterias= "input-group mb-3";
        this.claseCSSPoblacion = "form-check";
    }


handlerobtenerMateria = (e) => {
        this.materia = e.target.value;
        console.log(this.materia);        
}

handlerObtenerAnno = (e) => {
    this.anno = e.target.value;
    console.log(this.anno);        
}


handlerObtenerPoblacion = (e) => {
    let chk = e.target.checked;
    if (chk) {
        
    }
    this.poblacion = e.target.value;
    console.log(this.adultos);    
}

handlerObtenerApoyos = (e) => {
    let chk = e.target.checked;
    if (chk) {
        this.apoyos = "si"    
    }  else {
        this.apoyos = ""   
    }    
    
}



buscarInfo = () => {

        //console.log(dataGeneral);
        
        var arrayHtml;
        var arrayTmp=[];

        for (let index = 0; index < dataGeneral.length; index++) {
            if (this.props.origen  ===  dataGeneral[index].nivel  ) {

                console.log( dataGeneral[index].nombre );
                

                arrayHtml = (
                    <React.Fragment>
                        <h5> {dataGeneral[index].nombre  } </h5>
                        <span>  {dataGeneral[index].desc  }  </span>
                        <br/>
                        <a href= {dataGeneral[index].url   }   target="_blank"   rel="noopener noreferrer" >  Ver recurso  </a>
                        <hr/>
                    </React.Fragment>
                )
                arrayTmp.push(arrayHtml);
            }
            
        };      
       this.setState({ tarjetas : arrayTmp });
       


}


componentWillMount () {

    if (this.props.origen === "preescolar") {
        this.claseCSSMaterias =  this.claseCSSMaterias + " invisible";
        this.claseCSSPoblacion = this.claseCSSPoblacion + " invisible"; 
    }
}




    render() { 
        return ( 
            <React.Fragment>
                <div className="jumbotron">
                    <h1>Recursos</h1>

                    {
                        this.props.origen=== "preescolar" &&   <h3>  Educación Preescolar </h3>
                    }
                    {
                        this.props.origen=== "primaria" &&   <h3>  Educación Primaria </h3>
                    }
                    {
                        this.props.origen=== "secundaria" &&   <h3>  Educación Media </h3>
                    }

                    <div className="row">
                        <div className="col-12  text-right">
                            <span  onClick={this.props.handlerCerrarBuscador}  className="btn btn-outline-info"  >  Volver </span>
                        </div>
                    </div>
                    
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                                <div className={this.claseCSSMaterias}   >
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="selMateria">Materia</label>
                                        </div>
                                        <select className="custom-select" id="selMateria"  onChange={this.handlerobtenerMateria} >
                                            <option defaultValue  >Seleccione una materia:</option>
                                            {
                                                materias.map( (item, i) => (
                                                    <option key={"materia" + i }  value={item.id} >  {item.label  }  </option>
                                                ))
                                            }
                                        </select>
                                </div>
                        </div>

                        <div className="col-3  ">
                                <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="selAno">Año</label>
                                        </div>
                                        <select className="custom-select" id="selAno" onChange={this.handlerObtenerAnno}  >
                                            <option defaultValue >Seleccione un año</option>

                                            {
                                             this.props.origen === "preescolar" && 

                                             annoPrrescolar.map( (item, i) => (
                                                        <option key={"anno" + i }  value={item.id} >  {item.label  }  </option>
                                                    ))

                                            }


                                            {
                                             this.props.origen === "primaria" && 

                                                    annoPrimaria.map( (item, i) => (
                                                        <option key={"anno" + i }  value={item.id} >  {item.label  }  </option>
                                                    ))

                                            }

                                            {
                                             this.props.origen === "secundaria" && 

                                                    anoSecundaria.map( (item, i) => (
                                                        <option key={"anno" + i }  value={item.id} >  {item.label  }  </option>
                                                    ))

                                            }


                                        </select>
                                </div>
                        </div>

                        <div className="col-4">
                            
                        <div className= {this.claseCSSPoblacion }>
                                <input className="form-check-input" type="checkbox" value={
                                    this.props.origen==="primaria" ? tipoPoblacion[0].id : tipoPoblacion[1].id
                                } onClick={this.handlerObtenerPoblacion}  id="chkPoblacion"/>
                                <label className="form-check-label" htmlFor="chkPoblacion">
                                    {
                                        this.props.origen==="primaria" ? tipoPoblacion[0].label : tipoPoblacion[1].label
                                    }
                                </label>
                        </div>

                        <div className="form-check">
                                <input className="form-check-input" type="checkbox"  id="chkApyos"  onClick={this.handlerObtenerApoyos}  />
                                <label className="form-check-label" htmlFor="chkApyos">
                                    Apoyos educativos especiales
                                </label>
                        </div>


                        </div>

                        <div className="col-2">
                            <button onClick={this.buscarInfo}   type="button" className="btn btn-secondary btn-lg">
                                    <i className="fas fa-search"></i> Buscar
                            </button>
                        </div>

                        
                    </div>


                                    <div className="row">
                                        <div className="col-12">
                                                {
                                                    this.state.tarjetas.map((item, i) => ( 
                                                        <div key={"tarjeta"+i  } > {item} </div>
                                                     ))
                                                }
                                        </div>
                                    </div>



                </div>


            </React.Fragment>
         );
    }
}
 
export default Buscador;