
const listasPlan = [
    {        
    "materiasPrimaria" : [
            {
                "label": "Artes Industriales",
                "id": "artIndust"
            },
            {
                "label": "Artes Plásticas",
                "id": "artPlast"
            },
            {
                "label": "Ciencias",
                "id": "ciencias"
            },
            {
                "label": "Educación Física",
                "id": "educFisica"
            },
            {
                "label": "Educación Musical",
                "id": "musica"
            },
            {
                "label": "Educación para la vida cotidiana",
                "id": "vidaCotidiana"
            },
            {
                "label": "Educación Religiosa",
                "id": "religion"
            },
            {
                "label": "Español",
                "id": "espanol"
            },
            {
                "label": "Estudios Sociales",
                "id": "estudios"
            },
            {
                "label": "Francés",
                "id": "frances"
            },
            {
                "label": "Inglés",
                "id": "ingles"
            }, 
            {
                "label": "Matemática",
                "id": "matematica"
            },
            {
                "label": "Orientación",
                "id": "orientacion"
            }
            
    ],
    "materiasPrimariaAdultos" : [
        {
            "label": "Ciencias",
            "id": "ciencias"
        },
        {
            "label": "Español",
            "id": "espanol"
        },
        {
            "label": "Estudios Sociales",
            "id": "estudios"
        },
        {
            "label": "Matemáticas",
            "id": "matematica"
        }
    ],
    "materiasSecundaria" : [
        {
            "label": "Artes Industriales",
            "id": "artesIndustriales"
        },
        {
            "label": "Artes Plásticas",
            "id": "artPlast"
        },
        {
            "label": "Biología",
            "id": "biologia"
        },
        {
            "label": "Ciencias",
            "id": "ciencias"
        },
        {
            "label": "Educación Cívica",
            "id": "civica"
        },
        {
            "label": "Educación Física",
            "id": "educFisica"
        },
        {
            "label": "Educación Musical",
            "id": "musica"
        },
        {
            "label": "Educación para la Vida Cotidiana",
            "id": "vidaCotidiana"
        },
        {
            "label": "Educación Religiosa",
            "id": "religion"
        },
        {
            "label": "Español",
            "id": "espanol"
        },
        {
            "label": "Estudios Sociales",
            "id": "estudios"
        },
        {
            "label": "Filosofía",
            "id": "filosofia"
        },
        {
            "label": "Física",
            "id": "fisica"
        },
        {
            "label": "Francés",
            "id": "frances"
        },
        {
            "label": "Inglés",
            "id": "ingles"
        }, 
        {
            "label": "Italiano",
            "id": "italiano"
        },
        {
            "label": "Matemática",
            "id": "matematica"
        },
        {
            "label": "Orienteción",
            "id": "orientacion"
        },
        {
            "label": "Psicología",
            "id": "psicologia"
        },  
        {
            "label": "Química",
            "id": "quimica"
        }
    ],
    "materiasCan" : [
        {
            "label": "Biología",
            "id": "biologia"
        },
        {
            "label": "Ciencias",
            "id": "ciencias"
        },
        {
            "label": "Desarrollo Humano",
            "id": "desarrolloHumano"
        },
        {
            "label": "Desarrollo Socio Laboral",
            "id": "desarrolloSocioLaboral"
        },
        {
            "label": "Educación Cívica",
            "id": "civica"
        },
        {
            "label": "Educación Religiosa",
            "id": "religion"
        },
        {
            "label": "Español",
            "id": "espanol"
        },
        {
            "label": "Estudios Sociales",
            "id": "estudios"
        },
        {
            "label": "Física",
            "id": "fisica"
        },
        {
            "label": "Francés",
            "id": "frances"
        },
        {
            "label": "Inglés",
            "id": "ingles"
        },
        {
            "label": "Matemática",
            "id": "matematica"
        },
        {
            "label": "Química",
            "id": "quimica"
        }
    ],
    "materiasConed" : [
        {
            "label": "Biología",
            "id": "biologia"
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
            "label": "Estudios Sociales",
            "id": "estudios"
        },
        {
            "label": "Matemática",
            "id": "matematica"
        },
        {
            "label": "Técnico Básico",
            "id": "tecnicoBasico"
        }
    ],
    "materiaInterculturaPrimaria" : [
        {
            "id" : "cBoruca",
            "etiqueta" : "Cultura Boruca"
        },
        {
            "id" : "cBribiBuenosAires",
            "etiqueta" : "Cultura Bribí de Buenos Aires"
        },
        {
            "id" : "cBribriSula",
            "etiqueta" : "Cultura Bribri de Sulá"
        },
        {
            "id" : "cCabecarBuenosAires",
            "etiqueta" : "Cultura Cabécar de Buenos Aires"
        },
        {
            "id" : "cCabecarChirripo",
            "etiqueta" : "Cultura Cabécar de Chirripó"
        },
        {
            "id" : "cCabecarSula",
            "etiqueta" : "Cultura Cabécar de Sulá"
        },
        {
            "id" : "cChorotega",
            "etiqueta" : "Cultura Chorotega"
        },
        {
            "id" : "cHuetar",
            "etiqueta" : "Cultura Huetar"
        },
        {
            "id" : "cMaleku",
            "etiqueta" : "Cultura Maleku"
        },
        {
            "id" : "cNgabe",
            "etiqueta" : "Cultura Ngäbe"
        },
        {
            "id" : "cTerraba",
            "etiqueta" : "Cultura Térraba"
        },
        {
            "id" : "iNgabere",
            "etiqueta" : "Idioma Ngäbere"
        },
        {
            "id" : "lBoruca",
            "etiqueta" : "Lengua Boruca"
        },
        {
            "id" : "lBribriBuenosAires",
            "etiqueta" : "Lengua Bribri de Buenos Aires"
        },
        {
            "id" : "lBribriSula",
            "etiqueta" : "Lengua Bribri de Sulá"
        },
        {
            "id" : "lCabecarBuenosAires",
            "etiqueta" : "Lengua Cabécar de Buenos Aires"
        },
        {
            "id" : "lCabecarChirripo",
            "etiqueta" : "Lengua Cabécar de Chirripó"
        },
        {
            "id" : "lCabecarSula",
            "etiqueta" : "Lengua Cabécar de Sulá"
        },
        {
            "id" : "lMaleku",
            "etiqueta" : "Lengua Maleku"
        },
        {
            "id" : "lTerraba",
            "etiqueta" : "Lengua Térraba"
        }
    ],
    "anoSecundaria" : [
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
    ],
    "annoPrimaria" : [
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
    ],
    "annoAdultos" : [
        {
            "label": "Colegios Académicos Nocturnos (CAN)",
            "id": "can"
        },
        {
            "label": "Colegio Nacional de Educación a Distancia (CONED)",
            "id": "coned"
        },
        {
            "label": "Escuelas Nocturnas Nivel I",
            "id": "en1"
        },
        {
            "label": "Escuelas Nocturnas Nivel II",
            "id": "en2"
        },
        {
            "label": "Escuelas Nocturnas Nivel III",
            "id": "en3"
        },
        {
            "label": "Escuelas Nocturnas Nivel IV",
            "id": "en4"
        },
        {
            "label": "IPEC-CINDEA Nivel I",
            "id": "ipec1"
        },
        {
            "label": "IPEC-CINDEA Nivel II",
            "id": "ipec2"
        },
        {
            "label": "IPEC-CINDEA Nivel III",
            "id": "ipec3"
        },
        {
            "label": "Móduilos opcionales IPEC-CINDEA",
            "id": "ipecOpcionales"
        }
    ],  
    "planEstudiosFrancesPrimaria" : [
        {
            "id" : "extranjeraFrances",
            "etiqueta" : "Francés como lengua extranjera-Francés"
        },
        {
            "id" : "extranjeraCiencias",
            "etiqueta" : "Francés como lengua extranjera-Ciencias"
        },
        {
            "id" : "extranjeraMatematica",
            "etiqueta" : "Francés como lengua extranjera-Matemáticas"
        },
        {
            "id" : "bilingueFrances",
            "etiqueta" : "Secciones Bilingües Español-Francés: Francés"
        },
        {
            "planEstudios" : "bilingueCiencias",
            "etiqueta" : "Secciones Bilingües Español-Francés: Ciencias"
        },
        {
            "id" : "bilingueMatematica",
            "etiqueta" : "Secciones Bilingües Español-Francés: Matemáticas"
        },
    ],
    "planEstudiosFrancesSecundaria" : [
        {
            "id" : "lenguaExtranjera",
            "etiqueta" : "Francés como lengua extranjera"
        },
        {
            "id" : "francesAvanzado",
            "etiqueta" : "Secciones de Francés avanzado"
        }    
    ],
    "planEstudiosInglesPrimaria" : [
        {
            "id" : "lenguaExtranjera",
            "etiqueta" : "Inglés como lengua extranjera"
        },
        {
            "id" : "bilingue",
            "etiqueta" : "Secciones Bilingües Español- Inglés"
        }
    ],
    "planEstudiosInglesSecundaria" : [
        {
            "id" : "lenguaExtranjera",
            "etiqueta" : "Inglés como lengua extranjera"
        },
        {
            "id" : "bilingue",
            "etiqueta" : "Liceos Experimentales bilingües/Secciones Bilingües Español-Inglés"
        }
    ]   



    }
];

export default listasPlan;









 

 







 






