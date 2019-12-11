const cambiarEtiquetas = (dato) => {
    let salida = "";
    switch (dato) {
        case "primaria":
            salida = "Primaria"
        break;
        case "secundaria":
            salida = "Secundaria"
        break;
        case "1":
            salida = "Primero"
        break;
        case "2":
            salida = "Segundo"
        break;
        case "3":
            salida = "Tercero"
        break;
        case "4":
            salida = "Cuarto"
        break;
        case "5":
            salida = "Quinto"
        break;
        case "6":
            salida = "Sexto"
        break;
        case "7":
            salida = "Séptimo"
        break;
        case "8":
            salida = "Octavo"
        break;
        case "9":
            salida = "Noveno"
        break;
        case "10":
            salida = "Décimo"
        break;
        case "11":
            salida = "Undécimo"
        break;
        case "ipecOpcionales":
            salida = "Módulos Opcionales"
        break;  
        case "ipecCursosLibre":
            salida = "IPEC Cursos libres"
        break;          
        case "artesIndustriales":
            salida = "Artes Industriales"
        break;
        case "biologia":
                salida = "Biología"
        break;
        case "espanol":
                salida = "Español"
        break;
        case "ciencias":
                salida = "Ciencias"
        break; 
        case "matematica":
            salida = "Matemáticas"
        break;    
        case "estudios":
            salida = "Estudios Sociales"
        break;    
        case "religion":
            salida = "Religión"
        break;    
        case "quimica":
            salida = "Química"
        break;    
        case "fisica":
            salida = "Física"
        break;    
        case "frances":
            salida = "Francés"
        break; 
        case "filosofia":
            salida = "Filosofía"
        break;            
        case "ingles":
            salida = "Inglés"
        break; 
        case "desarrolloHumano":
            salida = "Desarrollo Humano"
        break; 
        case "tecnicoBasico":
            salida = "Técnico Básico"
        break;
        case "can":
            salida = "Colegiogios Académicos Nocturnos"
        break;  
        case "coned":
            salida = "Colegiogio Nacional a Distancia"
        break; 
        case "en1":
            salida = "Escuelas nocturnas - nivel I"
        break;   
        case "en2":
            salida = "Escuelas nocturnas - nivel II"
        break;   
        case "en3":
            salida = "Escuelas nocturnas - nivel III"
        break;   
        case "en4":
            salida = "Escuelas nocturnas - nivel IV"
        break;
        case "ipec1":
            salida = "IPEC - CINDEA Nivel I"
        break;    
        case "ipec2":
            salida = "IPEC - CINDEA Nivel II"
        break;    
        case "ipec3":
            salida = "IPEC - CINDEA Nivel III"
        break;    
        case "ipec4":
            salida = "IPEC - CINDEA Nivel IV"
        break;    
        case "educFisica":
            salida = "Educación física"
        break;    
           
        default:
            salida = dato;
        break;
    }
        return salida;    
}
 
export default cambiarEtiquetas;