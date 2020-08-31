import React  from 'react';
import config from '../data/config/config.json';
const video = config.video;



function ContenidoModal (props) {

    return(
        <iframe className="borde-video" title="video ministra" width="100%" height="500" src={video.ministra} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )    
}

export default ContenidoModal