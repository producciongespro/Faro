import React, { useState } from 'react';

function AgendaEstudiantil () {

    const [datos, setDatos] = useState(null);

    return (
        <div className="row">
            <div className="col-sm-12">
              <h1>  Agenda Estudiantil</h1>
            </div>
        </div>
    );    
}

export default AgendaEstudiantil;