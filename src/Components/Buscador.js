import React, { Component } from 'react';
import dataGeneral from '../data/recursos/generales.json';
import images from '../data/images.json';

var materiasPrimaria = [ 
            {
                "label" :   "Ciencias",
                "id" : "ciencias"
            },
            {
                "label" :   "Educación Vial",
                "id" : "educVial"
            },          
            {
                "label" :   "Español",
                "id" : "espanol"
            },
            {
                "label" :   "Estudios Sociales",
                "id" : "estudios"
            },
            {
                "label" :   "Francés",
                "id" : "frances"
            },
            {
                "label" :   "Inglés",
                "id" : "ingles"
            },
            {
                "label" :   "Matemáticas",
                "id" : "matematica"
            },				
            {
                "label" :   "Mediación",
                "id" : "general"
            }
              
    
    ];

var materiasSecundaria = [ 
        {
            "label" :   "Biología",
            "id" : "biologia"
        },
        {
            "label" :   "Ciencias",
            "id" : "ciencias"
        },
        {
            "label" : "Educación Cívica",
            "id" : "civica"
        }, 
        {
            "label" :   "Español",
            "id" : "espanol"
        },
        {
            "label" :   "Estudios Sociales",
            "id" : "estudios"
        },
        {
            "label" :   "Física",
            "id" : "fisica"
        },
        {
            "label" :   "Francés",
            "id" : "frances"
        },
        {
            "label" :   "Inglés",
            "id" : "ingles"
        },
        {
            "label" :   "Matemáticas",
            "id" : "matematica"
        },
        {
            "label" :   "Mediación",
            "id" : "general"
        },
      
        {
            "label" :   "Química",
            "id" : "quimica"
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
                "label" : "Liceos rurales",
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
        this.mensaje="";
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
    console.log(chk);
    if (chk) {
        this.poblacion = e.target.value; 
    } else {
        this.poblacion = "";
    }  
    console.log  ( "Poblacion",    this.poblacion);    
}

handlerObtenerApoyos = (e) => {
    let chk = e.target.checked;
    console.log("Valor de apoyos",  chk);
    if (chk) {
        this.apoyos = "si"    
    }  else {
        this.apoyos = ""   
    } 
    console.log  ( "Apyos",    this.apoyos);      
    
}



buscarInfo = () => {

        //console.log(dataGeneral);
        //console.log("Materia a buscar", this.materia );
        //console.log("Año a buscar", this.anno );       
        
        var arrayHtml;
        var arrayTmp=[];

        for (let index = 0; index < dataGeneral.length; index++) {

            //Expresión regular para materia
            let strMateria = dataGeneral[index].materia;
            let pattMateria = new RegExp(  this.materia );
            let resMateria = pattMateria.test(strMateria);

            //Expresión regular para año
            let strAnno = dataGeneral[index].anno;
            let pattAnno = new RegExp(  this.anno );
            let resAnno = pattAnno.test(strAnno);
          

           // console.log(  "res Materia",  resMateria   );
            //console.log("res Año", resAnno );          
            //console.log("this.apoyos=", this.apoyos  );
            //console.log( "dataGeneral=", dataGeneral[index].apoyos );
          


            if (this.props.origen  ===  dataGeneral[index].nivel  &&  resMateria   &&  resAnno  && this.poblacion  === dataGeneral[index].poblacion  && this.apoyos ===  dataGeneral[index].apoyos   ) {
                  
                //console.log( "Nombre del recurso", dataGeneral[index].nombre );
                //console.log( "Año:", dataGeneral[index].anno );                

                arrayHtml = (
                    <React.Fragment>
                        <h5>    {dataGeneral[index].nombre  } </h5>
                        <span> <strong>  <i className="fab fa-diaspora"></i>  Descripción:</strong>  {dataGeneral[index].desc  }  </span> 
                        <br/>
                        {
                            this.materia === "" &&   ( 
                                    <React.Fragment>
                                        <span> <strong>   <i className="fab fa-diaspora"></i>    Materia:</strong>  {  dataGeneral[index].materia    }     </span>   
                                        <br/> 
                                    </React.Fragment>
                                    ) 
                        } 
                        {
                            this.anno === "" &&   ( 
                                <React.Fragment>
                                    <span> <strong>  <i className="fab fa-diaspora"></i>  Año:</strong>  {  dataGeneral[index].anno    }   </span> 
                                    <br/>
                                </React.Fragment>
                            ) 
                        }                        
                        <a href= {dataGeneral[index].url   }   target="_blank"   rel="noopener noreferrer" >  Ver recurso  </a>
                        <hr/>
                    </React.Fragment>
                )
                arrayTmp.push(arrayHtml);
            }
            
        };  

        if (arrayTmp.length <= 0  ) {
            this.mensaje =   "No se han encontrado resultados.";
        } else {
            this.mensaje =  ( <React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {arrayTmp.length}   </span>  </React.Fragment> ) ;
        }
        
        
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
                <div className="row">
                 
                        <div className="col-12  text-right">   
                            {
                                this.props.origen=== "preescolar" &&   <img alt="Preescolar" className="bannerRecursos" src={images[0].RecDidacticosPreescolarBanner}/> 
                            }
                            {
                                this.props.origen=== "primaria" &&   <img alt="Primaria" className="bannerRecursos" src={images[0].RecDidacticosPrimariaBanner}/> 
                            }
                            {
                                this.props.origen=== "secundaria" &&   <img alt="Secundaria" className="bannerRecursos" src={images[0].RecDidacticosSecundariaBanner}/> 
                            }

                   
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver"  onClick={this.props.handlerCerrarBuscador}  src={images[0].BtnVolver} alt="Volver"/>
                        </div>
                </div>
                    
           

 

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                                <div className={this.claseCSSMaterias}   >
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMateria">Asignatura</label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selMateria"  onChange={this.handlerobtenerMateria} >
                                            <option defaultValue value="" >Todas</option>
                                            {
                                                this.props.origen === "primaria" && 
                                                materiasPrimaria.map( (item, i) => (
                                                    <option key={"materia" + i }  value={item.id} >  {item.label  }  </option>
                                                ))
                                            }
                                                   {
                                                this.props.origen === "secundaria" && 
                                                materiasSecundaria.map( (item, i) => (
                                                    <option key={"materia" + i }  value={item.id} >  {item.label  }  </option>
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
                                            <option defaultValue  value="" > Todos </option>

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
                                
                                <h6>
                                    {this.mensaje}
                                </h6>
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