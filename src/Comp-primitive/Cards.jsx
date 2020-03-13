import React from 'react';
import images from "../data/images.json";
import './cards.css';

var img = images[0];

const CardsImage = (props) => {
  var tmpComp;

  switch (props.idCat) {
    case "cursos":
      tmpComp = (
        <div className="col-sm-6">
        <div className="row">
        <div className="card text-center m-2">
          <div class="card-header">
            Dirigido a {props.item.meta}
          </div>
          <div class="card-body">
            <img src={props.item.icono} alt="imagen del curso" className="img-thumbnail img-previas" />
            <h5 class="card-title">
                {props.item.nombre}
            </h5>
            <p class="card-text">
              {props.item.proposito}
            </p>            
          </div>
          <div className="card-footer text-muted">
            Inicio el {props.item.inicio}
          </div>
        </div>
        </div>
        </div>
      )
      break;


    case "cursos2":
      tmpComp = (
        <div className="col-sm-6">
          <div className="row">

            <div className="card-body col-6">
              <img alt="prueba" className="card-img-top card-custom" src={props.item.icono} />
            </div>

            <div className="col-4 inform">

              <p className="card-text"><b>Dirigido a: </b> {props.item.meta}  </p>
              <p className="card-text"><b>Descripción: </b> {props.item.proposito}  </p>

            </div>

          </div>
        </div>
      )
      break;
    case "videoteca":
      tmpComp = (
        <div className="col-sm-6">
          <div className="row">

            <div className="col-sm-2">
              <div className="azul"></div>
            </div>

            <div className="col-sm-1">
              <div className="negrito1"></div>
            </div>

            <div className="col-sm-9 inform1">
              <h6><b>Nombre: </b>{props.item.videoteca}</h6>
              <p><b>Fecha: </b> {props.item.fecha}  </p>
              <p><b>Descripción: </b> {props.item.desc}  </p>
              <a href={props.item.url} className="link-card" target="_blank" rel="noopener noreferrer" >Ver video </a>
              <br /><br />
            </div>

          </div>
        </div>

      );
      break;
    case "ficha":
      tmpComp = (
        <div className="col-sm-6">
          <div className="row">

            <div className="col-sm-1">
              <div><img alt="Desarrollo de otras ofertas" className="img_circ" src={img.DesarrolloCircOtrasOfert} /></div>
            </div>

            <div className="col-sm-11 inform1">
              <h6><b>Nombre: </b>{props.item.nombre}</h6>
              <p><b>Descripción: </b> {props.item.desc}  </p>
              <a href={props.item.url} className="link-card" target="_blank" rel="noopener noreferrer">Visitar </a>
              <br /><br />
            </div>
          </div>
        </div>
      );
      break;

    case "recursos":
    case "preescolar":
    case "primaria":
    case "secundaria":
      tmpComp = (
        <div className="col-sm-6">
          <div className="row">

            <div className="col-sm-2 text-right">
              {
                props.idCat === "preescolar" && <div><img alt="Recursos" className="img-circ" src={img.RecDidacticosPreescolarIcono} /></div>
              }
              {
                props.idCat === "primaria" && <div><img alt="Recursos" className="img-circ" src="https://recursos.mep.go.cr/ws_faro/generales/ico_edit.png" /></div>
              }
              {
                props.idCat === "secundaria" && <div><img alt="Recursos" className="img-circ" src="https://recursos.mep.go.cr/ws_faro/generales/ico_tap.png" /></div>
              }

            </div>

            <div className="col-sm-10 inform1">
              <h6><b>Nombre: </b>{props.item.nombre}</h6>
              <p><b>Descripción: </b> {props.item.desc}  </p>
              <a href={props.item.url} className="link-card enlace-pree" target="_blank" rel="noopener noreferrer" ><strong>VISITAR</strong></a>
              <br /><br />
            </div>
          </div>
        </div>
      );
      break;

    default:
      console.log("Parámetro fuera de rango");
      break;
  }


  return tmpComp;
}

export default CardsImage;

