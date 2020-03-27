-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 27-03-2020 a las 14:49:39
-- Versión del servidor: 5.6.45
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cajaherr_datos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaturas_primaria`
--

CREATE TABLE `asignaturas_primaria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(128) CHARACTER SET utf8 NOT NULL,
  `observaciones` varchar(128) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `asignaturas_primaria`
--

INSERT INTO `asignaturas_primaria` (`id`, `nombre`, `observaciones`) VALUES
(1, 'Artes Industriales', ''),
(2, 'Artes Plásticas', ''),
(3, 'Ciencias', ''),
(4, 'Educación Física', ''),
(5, 'Educación Musical', ''),
(6, 'Educación para el Hogar', ''),
(7, 'Educación Religiosa', NULL),
(9, 'Español', NULL),
(10, 'Estudios Sociales', NULL),
(11, 'Francés', NULL),
(12, 'Inglés', NULL),
(13, 'Informática Educativa', NULL),
(14, 'Italiano', NULL),
(15, 'Matemática', NULL),
(16, 'Orientación', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaturas_secundaria`
--

CREATE TABLE `asignaturas_secundaria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(128) NOT NULL,
  `observaciones` varchar(128) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `asignaturas_secundaria`
--

INSERT INTO `asignaturas_secundaria` (`id`, `nombre`, `observaciones`) VALUES
(1, 'Artes Industriales', NULL),
(2, 'Artes Plásticas ', NULL),
(3, 'Biología', NULL),
(4, 'Ciencias', NULL),
(5, 'Educación Cívica ', NULL),
(6, 'Educación Física', NULL),
(7, 'Educación Musical', NULL),
(8, 'Educación para el Hogar', NULL),
(9, 'Educación para la Afectividad y la Sexualidad Integral', NULL),
(10, 'Educación Religiosa', NULL),
(11, 'Español', NULL),
(12, 'Estudios Sociales', NULL),
(13, 'Filosofía', NULL),
(14, 'Física', NULL),
(15, 'Francés', NULL),
(16, 'Informática Educativa', NULL),
(17, 'Inglés', NULL),
(18, 'Italiano', NULL),
(19, 'Matemática', NULL),
(20, 'Orientación', NULL),
(21, 'Psicología', NULL),
(22, 'Química', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE `bitacora` (
  `id` int(11) NOT NULL COMMENT 'Identificador del evento o acción realizada',
  `id_usuario` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Usuario que realiza el evento',
  `evento` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Acción realizada',
  `fecha_evento` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha en que sucede el evento',
  `id_registro` int(11) NOT NULL COMMENT 'Identificador el ingreso modificado',
  `tabla` varchar(256) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nombre de la tabla a la que pertenece el registro afectado'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Tabla para documentar eventos de los usuarios en el sistema';

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`id`, `id_usuario`, `evento`, `fecha_evento`, `id_registro`, `tabla`) VALUES
(44, '106', 'Agregar', '2020-03-25 20:53:33', 35, 'Recursos'),
(43, '106', 'Agregar', '2020-03-25 20:50:10', 34, 'Recursos'),
(42, '106', 'Agregar', '2020-03-25 20:49:12', 33, 'Recursos'),
(41, '106', 'Agregar', '2020-03-25 20:48:51', 32, 'Recursos'),
(40, '106', 'Agregar', '2020-03-25 20:47:14', 31, 'Recursos'),
(39, '106', 'Agregar', '2020-03-25 20:45:44', 30, 'Recursos'),
(38, '106', 'Agregar', '2020-03-25 20:44:33', 29, 'Recursos'),
(37, '106', 'Agregar', '2020-03-25 20:37:50', 28, 'Recursos'),
(36, '106', 'Agregar', '2020-03-25 20:34:01', 27, 'Recursos'),
(35, '106', 'Agregar', '2020-03-25 20:31:59', 26, 'Recursos'),
(34, '106', 'Agregar', '2020-03-25 20:30:52', 25, 'Recursos'),
(45, '', 'Elimina', '2020-03-26 17:56:42', 0, 'Recursos'),
(46, '108', 'Elimina', '2020-03-26 17:56:42', 28, 'Recursos'),
(47, '', 'Elimina', '2020-03-26 17:57:16', 0, 'Recursos'),
(48, '108', 'Elimina', '2020-03-26 17:57:16', 32, 'Recursos'),
(49, '', 'Recupera', '2020-03-26 17:57:26', 0, 'Recursos'),
(50, '108', 'Recupera', '2020-03-26 17:57:26', 32, 'Recursos'),
(51, '', 'Agregar', '2020-03-26 17:58:45', 36, 'Recursos'),
(52, '108', 'Agregar', '2020-03-26 17:58:45', 37, 'Recursos'),
(53, '108', 'Elimina', '2020-03-26 18:52:05', 26, 'Recursos'),
(54, '108', 'Agregar', '2020-03-26 18:52:59', 38, 'Recursos'),
(55, '108', 'Elimina', '2020-03-26 18:53:12', 25, 'Recursos'),
(56, '108', 'Elimina', '2020-03-26 18:54:41', 27, 'Recursos'),
(57, '108', 'Elimina', '2020-03-26 18:54:46', 37, 'Recursos'),
(58, '108', 'Agregar', '2020-03-26 19:04:28', 39, 'Recursos'),
(59, '108', 'Agregar', '2020-03-26 19:23:59', 40, 'Recursos'),
(60, '108', 'Elimina', '2020-03-26 19:24:30', 30, 'Recursos'),
(61, '108', 'Elimina', '2020-03-26 19:24:34', 29, 'Recursos'),
(62, '108', 'Agregar', '2020-03-26 19:27:01', 41, 'Recursos'),
(63, '108', 'Agregar', '2020-03-26 19:29:44', 42, 'Recursos'),
(64, '108', 'Elimina', '2020-03-26 19:30:01', 39, 'Recursos'),
(65, '108', 'Agregar', '2020-03-26 19:32:35', 43, 'Recursos'),
(66, '108', 'Elimina', '2020-03-26 19:33:09', 31, 'Recursos'),
(67, '108', 'Elimina', '2020-03-26 19:37:24', 32, 'Recursos'),
(68, '108', 'Elimina', '2020-03-26 19:37:27', 33, 'Recursos'),
(69, '108', 'Agregar', '2020-03-26 19:39:16', 44, 'Recursos'),
(70, '108', 'Agregar', '2020-03-26 19:42:40', 45, 'Recursos'),
(71, '108', 'Agregar', '2020-03-26 19:55:14', 46, 'Recursos'),
(72, '108', 'Agregar', '2020-03-26 19:56:02', 47, 'Recursos'),
(73, '108', 'Elimina', '2020-03-26 20:01:30', 47, 'Recursos'),
(74, '108', 'Agregar', '2020-03-26 20:02:51', 48, 'Recursos'),
(75, '108', 'Agregar', '2020-03-26 20:31:28', 49, 'Recursos'),
(76, '108', 'Agregar', '2020-03-26 20:32:17', 50, 'Recursos'),
(77, '108', 'Agregar', '2020-03-26 20:39:22', 51, 'Recursos'),
(78, '108', 'Agregar', '2020-03-26 20:48:00', 52, 'Recursos'),
(79, '108', 'Edita', '2020-03-26 20:58:25', 51, 'Recursos'),
(80, '108', 'Edita', '2020-03-26 20:59:12', 40, 'Recursos'),
(81, '108', 'Agregar', '2020-03-26 21:14:30', 53, 'Recursos'),
(82, '108', 'Agregar', '2020-03-26 21:16:21', 54, 'Recursos'),
(83, '108', 'Agregar', '2020-03-26 21:17:13', 55, 'Recursos'),
(84, '108', 'Agregar', '2020-03-26 21:18:38', 56, 'Recursos'),
(85, '108', 'Agregar', '2020-03-26 21:20:01', 57, 'Recursos'),
(86, '108', 'Elimina', '2020-03-27 15:49:41', 51, 'Recursos'),
(87, '', 'Agregar', '2020-03-27 17:08:51', 57, 'Oferta Desarrollo'),
(88, '108', 'Elimina', '2020-03-27 18:52:46', 46, 'Recursos'),
(89, '108', 'Edita', '2020-03-27 18:53:26', 48, 'Recursos'),
(90, '108', 'Elimina', '2020-03-27 18:54:03', 50, 'Recursos'),
(91, '108', 'Agregar', '2020-03-27 19:04:17', 58, 'Recursos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desarrollo_profesional`
--

CREATE TABLE `desarrollo_profesional` (
  `id` int(11) NOT NULL,
  `nombre` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(1024) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `poblacion` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_tipo` int(11) NOT NULL,
  `url_imagen` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_sub_categoria` int(11) NOT NULL,
  `borrado` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `desarrollo_profesional`
--

INSERT INTO `desarrollo_profesional` (`id`, `nombre`, `descripcion`, `poblacion`, `url`, `id_tipo`, `url_imagen`, `id_sub_categoria`, `borrado`) VALUES
(1, 'Utilización de Word en el ámbito educativo', 'Se pretende fortalecer las habilidades y conocimientos para crear documentos digitales escritos con herramientas de Microsoft Office Word.', 'Dirigido a Personal docente y técnico-docente del sistema educativo nacional.', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/word.png', 0, 0),
(2, 'Utilización de Excel en el ámbito educativo', 'El curso requiere fortalecer habilidades y conocimientos para crear hojas de cálculo que permiten la interacción y colaboración que agregan tratamiento de los datos en el ámbito educativo.', 'Dirigido a Personal docente y administrativo del MEP.', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/2excel.png', 0, 0),
(3, 'Utilización de Power Point en el ámbito educativo', 'El curso requiere fortalecer habilidades y conocimientos para mejorar las presentaciones de información ofreciendo un dinamismo al ámbito educativo.', 'Dirigido a Personal docente y administrativo del MEP.', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/3powerpoint.png', 0, 0),
(4, 'Creación de Edublogs', 'El presente curso permite aplicar habilidades tecnológicas que permitan profundizar en la construcción y edición de un Blog educativo.', 'Dirigido a Personal docente y Asesores pedagógicos del MEP', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/6dublogs.png', 0, 0),
(5, 'La sazón de la lectoescritura', 'Los participantes de este curso, tendrán la posibilidad de reforzar sus conocimientos en el enfoque curricular que sustenta el Programa de estudio de Español, así como retomar la importancia conceptual de la conciencia fonológica y sus componentes durante la implementación de estrategias de mediación que contribuyan a desarrollarla. Se desarrolla en línea con una duración de 24 horas. Debe tener acceso a Internet de manera estable, el correo institucional (MEP) activo y de uso cotidiano, conocer en un nivel básico la exploración y navegación de un entorno virtual.', 'Dirigido a Personal docente del MEP', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/sazon.png', 0, 0),
(6, 'Producción de Recurso Educativos Digitales', 'El presente curso está dirigido para docentes en ejercicio del Ministerio de Educación Pública, ofrece actividades y recursos que les permita a los participantes apropiarse de estrategias para la producción de recursos educativos digitales innovadores, mediante el uso de herramientas locales y como web; los cuales pueden favorecer los procesos de mediación en el aula.', 'Dirigido a Personal docente del MEP', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/recursos.png', 0, 0),
(7, 'AULABLOG', 'Es un blog de edublogs que publica los post o noticias que se publican en los blogs de otros docentes adscriptos al mismo. Además, permite acceder a esos blogs educativos, crear nuevos blogs o suscribirse a canales RSS de noticias educativas. Tiene secciones como una biblioteca de blogs, una wiki sobre los mismos, tutoriales para crear blogs, etc.', '', 'http://www.aulablog.com/', 2, '', 1, 0),
(8, 'Aula 21', 'En un espacio en la web orientada hacia las actividades de cálculo desde el nivel de preescolar hasta la educación secundaria, abarca el ámbito de la geometría y el álgebra, ofrece gran cantidad de recursos y estrategias didácticas que el docente puede aplicar, tiene un webquest y actividades como la caza de tesoros que a los estudiantes les agradan mucho.', '', 'http://www.aula21.net/', 2, '', 1, 0),
(9, 'CEDEC Centro Nacional de Desarrollo Curricular en sistemas no propietarios', 'El Centro Nacional de Desarrollo Curricular en Sistemas no Propietarios (CEDEC) es un organismo dependiente del Ministerio de Educación, Cultura y Deporte a través del Instituto Nacional de Tecnologías Educativas y Formación del Profesorado (INTEF) y de la Consejería de Educación y Cultura del Gobierno de Extremadura. Tiene como finalidad el diseño, la promoción y el desarrollo de materiales educativos digitales a través del software libre. Nuestro objetivo es poner a disposición de toda la comunidad educativa materiales y recursos digitales de libre acceso y que permitan profundizar en la implantación de las Tecnologías de la Información y Comunicación en el Ámbito Educativo.', '', 'http://cedec.intef.es/rubricas/', 2, '', 1, 0),
(10, 'DICTALIA', 'Este sitio le ofrece al docente una gran cantidad de recursos educativos, de diferente naturaleza, crucigramas, sopas de letras, videos, planeamientos, rúbricas y otros. Algunos de los temas son propios delos programas de la comunidad económica europea.', '', 'https://didactalia.net/comunidad/materialeducativo?proyectoID=f22e757b-8116-4496-bec4-ae93a4792c28&comunidad=true', 2, '', 1, 0),
(11, 'El educador: Punto de encuentro', 'Ofrece un conjunto de artículos, recursos educativos y oros elementos que le sirven de apoyo al docente para sus lecciones. Es necesario hacer un registro dentro del sitio y obtener una cuenta de ingreso para poder descargar los documentos.', '', 'http://www.eleducador.com/', 2, '', 1, 0),
(12, 'EDUC.AR', 'Es el portal educativo gestionado por el Ministerio de Educación de Argentina. Es muy amplio con numerosas noticias, documentos, debates y recursos educativos. Aunque está pensado para los docentes de dicho país, cualquier profesor encontrará materiales que podrá utilizar en su docencia o en su autoformación.', '', 'http://www.educ.ar/', 2, '', 1, 0),
(13, 'EDUC@CONTIC', 'Portal web educativo impulsado por el Plan Avanza y Red.es del Gobierno de España destinado a docentes interesados en las aplicaciones de las TIC en las escuelas. Tiene numerosos recursos, blogs, noticias, e informaciones sobre software educativo.', '', 'http://www.educacontic.es/', 2, '', 1, 0),
(15, 'EDUCACYL', 'Portal Educativo de la Junta de Educación de Castilla y León, que le ofrece a los docentes recursos de diferentes asignaturas en todos los niveles que se imparten con las diferentes poblaciones que se atienden en esta región de España, estos recursos tienen diferentes formatos. Tiene un numeroso banco de imágenes y sonidos.', '', 'https://www.educa.jcyl.es/educacyl/cm', 2, '', 1, 0),
(16, 'EDUTEKA', 'Es un portal educativo de una fundación latinoamericana -de Colombia- llamada Gabriel Piedrahita que ofrece numerosos recursos y documentos sobre uso de las TIC en la educación. Tiene mucha documentación de carácter teórico y conceptual sobre el uso innovador de las TIC en la educación.', '', 'http://www.eduteka.org/', 2, '', 1, 0),
(17, 'EDUTOPIA', 'Fundación dedicada a la transformación de la educación de K-12 para adquirir y aplicar efectivamente los conocimientos, actitudes y habilidades necesarias para estudiantes. Fundada por el innovador y galardonado cineasta George Lucas en 1991.', '', 'https://www.edutopia.org/', 2, '', 1, 0),
(18, 'Enlaces', 'Este es el sitio oficial del Ministerio de Educación de Chile, les ofrece a los docentes un conjunto de posibilidades, como: recursos, buenas prácticas, marco de competencias de los estudiantes, evaluación de procesos de aprendizaje donde están involucradas las Tics.', '', 'http://www.enlaces.cl/', 2, '', 1, 0),
(19, 'Fundación Telefónica CR', 'Fundación, contribuye en gran medida al desarrollo económico, social y cultural de los países en los que está presente, mejorando la calidad de vida y fomentando la igualdad de oportunidades entre los ciudadanos. ', '', 'http://www.fundaciontelefonica.cr/', 2, '', 1, 0),
(20, 'Hapyac', 'Permite añadir texto, enlaces y superposiciones de imágenes en tus videos. También puedes anotar fácilmente sus vídeos de YouTube y Vimeo y crear cuestionarios utilizando elección múltiple y preguntas de texto libre. También puedes dibujar en los vídeos, compartir comentarios y enlaces a cualquier momento específico en el vídeo.', '', 'https://corp.hapyak.com/', 2, '', 1, 0),
(21, 'Ideas para la clase', 'Muestra herramientas TICS, que ayudan a ser más creativos, que ser prácticos, que nos permitan organizar la información, pero, sobre todo, que nos permitan el desarrollo de habilidades y promuevan el aprendizaje de nuestros estudiantes.', '', 'https://ideasparalaclase.com/2017/09/25/15-herramientas-online-para-crear-evaluaciones-examenes-encuestas-y-mucho-mas/', 2, '', 1, 0),
(22, 'Instituto de Tecnologías Educativas', 'Este es el sitio web del Ministerio de Educación destinado a potenciar el uso de los recursos digitales y la formación del profesorado en esta temática. Es quizás, el portal educativo en lengua española, más completo donde se pueden encontrar de forma gratuita números materiales multimedia didácticos clasificados bien por niveles educativos, o bien por áreas temáticas.', '', 'http://www.ite.educacion.es/', 2, '', 1, 0),
(23, 'Instituto de Tecnologías y Formación del profesorado', 'Espacio de encuentro para impulsar el cambio metodológico en las aulas, basado en el fomento de la colaboración escolar, la mejora de los espacios de aprendizaje, el desarrollo de habilidades para el s. XXI y de la competencia digital educativa. Tiene un banco de imágenes y sonidos con licencia de uso libre.', '', 'https://intef.es/', 2, '', 1, 0),
(24, 'Internet en el aula', 'Esta es la mayor red social de docentes en lengua española que funciona desde 2008, y tiene más de 5.000 miembros. Ahí existen numerosos foros de debate, informaciones, blogs docentes, fotos y vídeo educativos. Existe mucha participación y actividad comunicativa. Es una red abierta y autogestionada por los propios profesores.', '', 'http://internetaula.ning.com/', 2, '', 1, 0),
(25, 'National Geographic', 'Este es el sitio oficial de la organización en idioma español, contiene un conjunto de recursos que pueden ayudar al docente par actividades curriculares, como de motivación para los estudiantes, la alta calidad de sus videos, multimedios e imágenes permiten una comprensión de ciertas temáticas de manera sencilla.', '', 'https://www.nationalgeographic.com.es/videos', 2, '', 1, 0),
(26, 'NASA (Agencia Aeronáutica Espacial)', 'Esto son un conjunto de actividades que le ofrece la NASA a los docentes para que estos puedan utilizarlas con los estudiantes, incluyen los recursos que se pueden descargar para cada una de ellas.', '', 'https://www.nasa.gov/audience/foreducators/nasaeclips/index.html', 2, '', 1, 0),
(27, 'PLAN CEIBAL', 'Portal web del Plan Ceibal impulsado por el Gobierno de Uruguay. Es el primer proyecto latinoamericano destinado a dar un ordenador por niño a nivel nacional y que viene ejecutándose desde el año 2007. Es un sitioweb con muchos recursos, además de información sobre la implementación de dicho Plan.', '', 'http://www.ceibal.edu.uy/', 2, '', 1, 0),
(28, 'PRINCIPPIA', 'Enfocado a metodologías de aprendizaje con Google Suite: ABP, aprendizaje por descubrimiento, estrategias de evaluación, inteligencias múltiples, trabajo colaborativo, flipped clasroom, gamificación, inteligencia emocional y otras; además diferentes actividades diseñadas para poner en práctica.', '', 'http://blog.princippia.com/', 2, '', 1, 0),
(29, 'PROYECTO ENLACES', 'Es el portal web del Ministerio de Educación del Gobierno de Chile y que impulsa la incorporación de las TIC al sistema escolar de dicho país. Es muy amplio con información, documentos y recursos sobre dicho proyecto.', '', 'http://www.enlaces.cl/', 2, '', 1, 0),
(30, 'RELPE (Red Latinoamericana de Portales Educativos)', 'Este sitio es desarrollado por la Organización de Estados Iberoamericanos (OEI), donde se describe como todos los portales educativos de los diferentes países pertenecen a esta red, en el caso de Costa Rica, el portal se denomina Educatico.', '', 'https://www.oei.es/historico/relpe.php', 2, '', 1, 0),
(31, 'Santillana compartir', 'Ofrece un modelo flexible de gestión pedagógica para la transformación e innovación educativa que pone al estudiante en el centro del ecosistema educativo. Tiene una app que permite el desarrollo de procesos de planificación de aula. Es necesario registrarse como usuario.', '', 'https://santillanacompartir.co.cr/', 2, '', 1, 0),
(32, 'The Flipped classroom', 'La clase al revés es un sitio web con la participación de docentes y educadores de todos los niveles de enseñanza, con deseos por cambiar la educación y hacerla acorde con las demandas sociales y culturales de este siglo XXI.', '', 'https://www.theflippedclassroom.es/', 2, '', 1, 0),
(33, 'TIC para innovar', 'Un blog destinado a mostrar cómo mejorar en tus estudios hackeando la forma cómo se aprende, apoyándose en las TIC, trucos herramientas y metodologías, porque la educación es divertida sino ¡para que aprender!', '', 'http://www.ticeducacionec.com/2015/07/10-tic-para-elaborar-rubricas-para.html', 2, '', 1, 0),
(34, 'TEDEX Pura vida', 'Conversaciones basadas en ideas exitosas convincentes, donde los creadores de las ideas intercambian con los interesados, hay un conjunto de iniciativas en el ámbito educativo.', '', 'https://www.tedxpuravida.org/', 2, '', 1, 0),
(35, 'VideoNot.es', 'Consiste en una herramienta web gratuita que permite a los estudiantes tomar notas en un video que está viendo. Las notas se sincronizan con el vídeo que se está viendo. Lo bueno de VideoNotes es que está integrado en Google Drive, es decir, los estudiantes podrán guardar sus notas directamente en su cuenta de Drive y editar y trabajar en ellos en cualquier momento que quieran. Todas las notas guardan la fecha y hora.', '', 'http://www.videonot.es/', 2, '', 1, 0),
(36, 'Gloster', 'Glogster es una red social que permite a los usuarios crear carteles interactivos libres o GLOGS. A “Glog “, abreviatura de “blog de gráficos “, es una imagen interactiva multimedia. Aunque la mayoría de los usuarios Glogster son adolescentes. Los docentes pueden presentar algunos de los temas de manera atractiva e interactiva, o poner a sus estudiantes a realizar poster interactivo de diferentes formas.', '', 'http://edu.glogster.com/', 2, '', 2, 0),
(37, 'Powtoon', 'Este desarrollo permite elaborar videos y presentaciones animadas sobre un tema determinado, tiene una cantidad de recursos gráficos y multimediales que permiten la creación de documentos digitales muy atractivos para el público en general, es necesario inscribirse como usuario, pero si ya el docente tiene cuenta en Facebook o en Gmail, puede utilizarla para tener acceso al sitio.', '', 'https://www.powtoon.com/home/g/es/', 2, '', 2, 0),
(38, 'ISSUU', 'Este sitio le permite al visitante elaborar una revista digital con un conjunto de recursos que colocan a disposición del usuario, se necesita una inscripción, que se realiza de manera automática si la persona ya tiene una cuenta en Facebook, Twitter o Gmail. También se puede elaborar la revista a partir de un documento hecho con un procesador de palabras o un programa que desarrolla presentaciones.', '', 'https://issuu.com/', 2, '', 2, 0),
(39, 'JOOMLA', 'El sitio web de JOOMLA, permite la creación de revistas digitales, desde el interés personal de un usuario, o a partir de un documento elaborado con un procesador de palabras o un programa que desarrolla presentaciones. Se necesita un usuario para ingresar, pero este trámite e puede realizar de manera sencilla.', '', 'https://www.joomla.org/', 2, '', 2, 0),
(40, 'WIX', 'Es un espacio para la creación de sitios web, le ofrece al usuario un conjunto de plantillas que les permiten el desarrollo de un espacio donde el docente pueda colocar información en formato multimedial, y los estudiantes puedan tener acceso a esta. También se puede desarrollar un sitio web personalizado.', '', 'https://www.wix.com/', 2, '', 2, 0),
(41, 'WQC2: Webquest Creator', 'Las Webquests son actividades estructuradas y guiadas que investigan proporcionando al alumnado una tarea muy definida, así como los recursos y las consignas que les permiten realizarlas. Los alumnos y las alumnas se apropian, interpretan y explotan las informaciones específicas que el docente les asigna. En este caso la webquest quedará alojada en el servidor y será accesible cuando se decida hacerla pública, además también se puede descargar en formato zip para exponerla donde quieras. Se puede cambiar el diseño eligiendo entre una gran variedad de plantillas. Es necesario estar inscrito en el sitio', '', 'http://www.webquestcreator2.com/majwq/', 2, '', 2, 0),
(42, 'GoogleEarth', 'Google Earth es un programa informático que muestra un globo virtual que permite visualizar múltiples lugares, muestra la cartografía, con base en la fotografía satelital. El programa fue creado bajo el nombre de EarthViewer 3D por la compañía Keyhole Inc, financiada por la Agencia Central de Inteligencia. En la actualidad tiene múltiples usos para los docentes.', '', 'https://www.google.com/intl/es/earth/', 2, '', 2, 0),
(43, 'Caza de tesoros', 'Se trata de una estrategia sencilla como una hoja de trabajo o una página web con una serie de preguntas y un listado de direcciones de Internet en las que los alumnos han de buscar las respuestas. Al final se debe incluir la “gran pregunta”, cuya respuesta no aparece directamente en las páginas web visitadas la cual exige integrar y valorar lo aprendido durante la búsqueda. Las cazas de tesoros son estrategias útiles para adquirir información sobre un tema determinado y practicar habilidades y procedimientos relacionados con las T.I.C. y con el acceso a la información a través de Internet. Entre otras cosas nos permiten mejorar la comprensión lectora de los alumnos y enseñarles a buscar información en Internet.', '', 'http://www.aula21.net/cazas/ayuda.htm', 2, '', 2, 0),
(44, 'EDPUZZLE', 'Edpuzzle permite editar videos, logrando insertar notas de audio o grabar en un vídeo con tu propia voz, y añadir preguntas en cualquier punto del vídeo. De esta manera muchos videos comerciales los puede convertir en videos de apoyo a la docencia.', '', 'https://edpuzzle.com/', 2, '', 2, 0),
(45, 'CALAMEO', 'Permite hacer revistas digitales en diferentes modelos, tiene un conjunto de plantillas con diferentes grados de interactividad, logrando efectos motivantes y muy atrayentes para los usuarios. Se puede tener una cuenta de usuario gratuita, que implica un límite de almacenamiento.', '', 'https://es.calameo.com/', 2, '', 2, 0),
(46, 'Genialy', 'Este sitio web te permite crear diferentes modelos de documentos digitales, entre ellos infografícas, presentaciones interactivas, nformes multimediales, videos personales, presentaciones para redes sociales, historias,guías y experiencias de aprendizaje.', '', 'https://www.genial.ly/es', 2, '', 2, 0),
(47, 'KAHOOT', '¡Kahoot! Es una herramienta que permite hacer que sea fácil crear, compartir y jugar juegos de aprendizaje divertidos o concursos de preguntas y respuestas en minutos. Esta sirve para evaluar determinado tema de una manera motivante, lúdica y sobre todo del agrado de los estudiantes.', '', 'https://kahoot.com/b/', 2, '', 2, 0),
(48, 'PIXTON', 'Esta herramienta permite crear tiras cómicas de manera interactiva, se pueden explorar diferentes modelos de caricatura desde un poster, hasta el guion gráfico con diferentes escenas, ofrece un conjunto de personajes, y efectos de animación que permite incrementar la creatividad de los usuarios.', '', 'https://www.pixton.com/es/', 2, '', 2, 0),
(49, 'Quizlet', 'Este sitio te ofrece una gran atracción para los estudiantes dentro y fuera del salón de clases con material de estudio interactivo, actividades de aprendizaje y juegos. Se puede buscar material de estudio con unidades de clase de diferentes temas ya elaboradas, crear las propias unidades utilizando muchos de los juegos que ofrece el sitio, además ofrece estrategias para que los estudiantes desarrollen excelentes hábitos de estudios y permite ir dando seguimiento a los procesos en los que participan los estudiantes.', '', 'https://quizlet.com/es', 2, '', 2, 0),
(50, 'Estrategias didácticas innovadoras para aplicar en tus clases', 'Presenta 5 estrategias didácticas innovadoras que puedes poner en funcionamiento con tus alumnos. Son nuevas formas de aprendizaje que tienen muchos beneficios didácticos como el razonamiento, la creatividad o la autoestima.', '', 'https://spain.minilandeducational.com/school/estrategias-didacticas-innovadoras-para-tus-clases', 2, '', 4, 0),
(51, 'Educar Chile', 'Es un portal autónomo, pluralista y de servicio público que cuenta con la colaboración de los sectores público, privado y filantrópico.Concurren a su creación el Ministerio de Educación de Chile y la Fundación Chile. Nace de la confluencia de los sitios educativos de la Red Enlaces del Ministerio de Educación y del Programa de Educación de la Fundación Chile y está dirigido a todos los miembros de la comunidad educativa nacional: a las escuelas, sus docentes, alumnos y directivos; a las familias chilenas y los organismos de padres y apoderados; a los sostenedores municipales y privados; a los investigadores y especialistas de la educación; a las facultades de pedagogía y a los organismos de la cultura.', '', 'http://ww2.educarchile.cl/Portal.Base/Web/verContenido.aspx?ID=136996', 2, '', 4, 0),
(52, 'Estrategias didácticas para enseñar a aprender', 'Los autores de este artículo proponen una serie de estrategias para potenciar en los alumnos el “aprender a aprender”, propuesto por los nuevos enfoques educativos a partir del postulado teórico impulsado por la llamada Escuela Nueva” La adecuación de la enseñanza al sujeto que aprende ha sido objeto de atención por todos los educadores y expresada de modo permanente en la literatura educativa desde aquella “escuela a la medida” propugnada por el movimiento pedagógico conocido como “Nueva Escuela”, hasta las tendencias más contemporáneas.', '', 'https://educrea.cl/estrategias-didacticas-para-ensenar-a-aprender/', 2, '', 4, 0),
(53, 'Intervención educativa: Lo que necesita saber', 'Este enlace muestra a 15 organizaciones sin fines de lucro que se han unido para apoyar a los padres de uno entre cinco chicos con dificultades de aprendizaje y de atención a largo del camino.Con el apoyo apropiado, los padres pueden ayudar a que sus hijos desarrollen sus destrezas y alcancen todo su potencial. Con tecnología avanzada, recursos personalizados, acceso gratuito a expertos todos los días, una comunidad en línea segura, consejos prácticos y mucho más, la meta de Understood es ser ese apoyo que usted y su familia necesitan.', '', 'https://www.understood.org/es-mx/learning-attention-issues/treatments-approaches/educational-strategies/instructional-interventi', 2, '', 4, 0),
(54, 'Biblioteca docente', 'En Biblioteca Docente de Educrea hay documentos relacionados con diversas áreas de la docencia. A continuacipon, encontrarás las áreas más relevantes con documentos e información de tu interés como docente.', '', 'http://www.cajadeherramientas.mep.go.cr/En%20la%20Biblioteca%20Docente%20de%20Educrea%20hay%20665%20documentos%20relacionados%20', 2, '', 4, 0),
(55, '¿Qué son las estrategias didácticas?', 'Presenta acciones planificadas por el docente con el objetivo de que el estudiante logre la construcción del aprendizaje y se alcancen los objetivos planteados. Una estrategia didáctica es, en un sentido estricto, un procedimiento organizado, formalizado y orientado a la obtención de una meta claramente establecida. Su aplicación en la práctica diaria requiere del perfeccionamiento de procedimientos y de técnicas cuya elección detallada y diseño son responsabilidad del docente', '', 'https://www.uned.ac.cr/academica/images/ceced/docs/Estaticos/contenidos_curso_2013.pdf', 2, '', 4, 0),
(56, 'Ejemplos de estrategias didácticas para el maestro de educación inicial', 'Facilita los materiales y recursos que permiten que tener resultados para poder contribuir a la promoción de hábitos saludables de alimentación y salud en nuestras comunidades.', '', 'https://www.laloncherademihijo.org/docentes/ejemplos.asp', 2, '', 4, 0),
(57, '3 tipos de estrategias de aprendizaje', 'Se presentan estrategias de aprendizaje para lograr que los alumnos se conviertan en aprendices más eficaces. Las tres estrategias de aprendizaje más famosas son las memotécnicas, las estructurales y las generativas. Son enfoques que sin duda serán conocidos a todos los docentes porque las han usado en más de una ocasión.', '', 'https://lamenteesmaravillosa.com/3-tipos-estrategias-de-aprendizaje/', 2, '', 4, 0),
(58, 'Estrategia Didáctica', 'Estrategia didáctica: Es la planificación del proceso de enseñanza-aprendizaje para la cual el docente elige las técnicas y actividades que puede utilizar a fin de alcanzar los objetivos de su curso.', '', 'https://www.ecured.cu/Estrategia_Did%C3%A1ctica', 2, '', 4, 0),
(59, 'Estrategias Educativas Globalizadoras', 'Las estrategias globalizadoras más destacadas son los centros o proyectos de interés, el método de proyectos, las técnicas de Freinet y la metodología de descubrimiento y la investigación. Se explica el principio globalizador que es la programación educativa en forma de ideas asociadas, que sustituye el tradicional programa dividido en materias aisladas. En las estrategias de globalización únicamente la enseñanza por núcleos o centros de interés es motivadora para el alumnado, porque respeta la forma natural de adquisición de conocimientos.', '', 'http://www.educapanama.edu.pa/?q=articulos-educativos/estrategias-educativas-globalizadoras', 2, '', 4, 0),
(60, 'APPS: EduPills', 'Se descarga la app de micro auto-aprendizaje, enfocada a que se adquiera y/o desarrolla habilidades, destrezas y competencias digitales educativas de una forma sencilla y rápida. Esta organizada en un conjunto de píldoras de aprendizaje orientadas a la autocapacitación.', '', 'http://aprende.intef.es/', 2, '', 3, 0),
(61, 'Alexiaeducaria', 'Esta app permite la participación de los docentes en varias actividades que se organizan por semana entre estos varios Webinars, que se pueden definir como un tipo de conferencia, taller o seminario que se transmite por Internet. La característica principal es la interactividad que se produce entre los participantes y el conferenciante. Como en cualquier evento presencial, el conferenciante está hablando en vivo a la audiencia y los asistentes pueden hacer preguntas, comentar y escuchar lo que los demás participantes tienen que decir. Ellos realizan actividades de este tipo todas las semanas.', '', 'http://www.alexiaeducaria.com/', 2, '', 3, 0),
(62, 'Anatomy Learning', 'Se trata de una aplicación diseñada para facilitar el aprendizaje de la anatomía humana a través de modelos tridimensionales.', '', 'http://anatomylearning.com/es/', 2, '', 3, 0),
(63, 'Brain POP', 'BrainPOP, película del día, es un sitio donde se crea recursos animados que apoyan a los maestros y cautivan a los estudiantes ya sea en la escuela, hogar o en los dispositivos móviles. El contenido incluye películas, cuestionarios, aplicaciones móviles, actividades y muchas otras cosas que cubren cientos de temas de Matemáticas, Ciencia, Ciencias Sociales, Salud, Español, Tecnología, Arte y Música. La propuesta de esta aplicación consiste en breves películas animadas y didácticas sobre diversos asuntos, como por ejemplo hechos históricos, ciencia, literatura y matemáticas, dirigidos principalmente a estudiantes de entre 6 y 17 años. Asimismo, ofrece la posibilidad de completar cuestionarios sobre lo expuesto en las películas.', '', '', 2, '', 3, 0),
(64, 'Best Books for Tweens', 'Para aquellos docentes que desean promover el hábito de la lectura entre sus alumnos, esta aplicación propone más de 200 títulos dirigidos espacialmente al público adolescente.', '', 'https://www.peekaboo.mobi/best-books-for-tweens', 2, '', 3, 0),
(65, 'ClassDojo', 'Dicha aplicación ofrece a los docentes la posibilidad de monitorear la conducta y el despeño de los alumnos, y además compartir la información con sus padres, de forma tal que acompañen el progreso de sus hijos durante el año.', '', 'https://www.classdojo.com/es-es/?redirect=true', 2, '', 3, 0),
(66, 'EDUSPPS', 'Actualmente existen más de 80.000 aplicaciones educativas. EDUAPPS nace con la intención de recopilar y analizar las principales apps para el aula. Todo un conjunto de apps para ayudar al desarrollo y gestión de la clase. Desde pasar lista hasta acceder al servidor de tu cole, hay una app para cada necesidad.', '', 'http://www.eduapps.es/', 2, '', 3, 0),
(67, 'EINOA', 'Una aplicación para centros educativos que permite dar seguimiento a la información no académica de los alumnos: Aspectos sociales-emocionales, mejora de conductas y situaciones de bullying, motivaciones y estrategias de trabajo efectivas, adecuaciones curriculares y trayectorias. Directores, psicólogos, coordinadores, equipos de apoyo y docentes están informados y alineados en el acompañamiento de cada alumno y grupo, con un balance entre lo académico y lo humano que resulta en una educación personalizada, holística, optimizando los recursos y procesos existentes.', '', 'https://inoaedu.com/?gclid=Cj0KCQjw4fHkBRDcARIsACV58_Hb0QyDjyjQwtVKbrUwTGvzqX1qg8CMcw2EkwqnG9pkIm8THRu9gq0aAqK0EALw_wcB', 2, '', 3, 0),
(68, 'Google Classroom', 'Esta herramienta diseñada por Google ofrece diversas utilidades para facilitar la interacción entre los maestros y los alumnos, desde la creación de un test en línea, la realización de proyectos colaborativos y la corrección de tareas. Asimismo, permite crear un aula virtual donde publicar materiales y añadir a todos los estudiantes.', '', 'https://play.google.com/store/apps/details?id=com.google.android.apps.classroom&hl=es', 2, '', 3, 0),
(69, 'El restaurante del Doctor Panda', 'Está enfocada en el aprendizaje sobre alimentos, animales y reciclaje a través de un juego que consiste en cocinar platos. Además, este juego no tiene instrucciones, por lo que se refuerza el aprendizaje por descubrimiento y mediante ensayo y error. En esta aplicación, los niños se podrán iniciar en el mundo de la cocina a través de divertidos mini juegos. Estarán expuestos a un amplio surtido de platos para cocinar, ya que el Dr. Panda tiene un libro de cocina con 10 recetas diferentes de comidas y bebidas. Entre otras muchas, incluye pizza, tarta de manzana, crema de maíz, comida china y batidos de frutas.', '', 'https://play.google.com/store/apps/details?id=com.tribeplay.pandarestaurant&hl=es', 2, '', 3, 0),
(70, 'El Rey de las Mates', 'Se trata de una aplicación que agiliza el razonamiento a través de la resolución de cálculos matemáticos, los cuales responden a distintos niveles de dificultad.', '', 'https://king-of-math.es.aptoide.com/', 2, '', 3, 0),
(71, 'KhanAcademy', 'Es una aplicación que contiene más de 4000 videos sobre temas muy diversos. Puede ser utilizada para repasar conceptos o para reforzar aquellas áreas en las que más dificultades tienen los alumnos.', '', 'https://es.khanacademy.org/', 2, '', 3, 0),
(72, 'MyScript Calculator', 'Ideal para aquellos docentes y alumnos que realizan numerosos cálculos, esta aplicación les permite escribir las expresiones matemáticas sobre la pantalla, las cuales serán convertidas en texto digital y resueltas inmediatamente.', '', 'https://apkpure.com/es/myscript-calculator/com.visionobjects.calculator', 2, '', 3, 0),
(73, 'Mindomo', 'Esta aplicación está destinada a los más mayores y su función principal es la de crear esquemas y mapas mentales. Una útil herramienta para repasar conceptos, crear esquemas y reforzar los conocimientos aprendidos durante el año. Si tus hijos necesitan hacer algún repaso, no dejes de presentarles esta interesante aplicación.', '', 'http://cr.tiching.com/mindomo-mind-mapping-mapas-mentales-y-esquemas/recurso-educativo/101220?utm_source=BlogTiching&utm_medium=', 2, '', 3, 0),
(74, 'Night Sky Tools', 'Esta aplicación resultará de gran ayuda para los docentes en el tema de astronomía, tiempo y clima. Entre otras utilidades, notifica a los usuarios sobre los eventos astronómicos visibles desde su ubicación geográfica y ofrece datos tales como la salida y puesta del sol y de la luna y el tránsito de los planetas.', '', 'https://downloads.tomsguide.com/Night-Sky-Tools,0301-62901.html', 2, '', 3, 0),
(75, 'NOVA Elements', 'Esta aplicación propone videos didácticos de química y física, por ejemplo, sobre las estructuras moleculares y los componentes de la tabla periódica de los elementos. Cabe destacar que los materiales están disponibles solo en idioma inglés.', '', 'https://itunes.apple.com/us/app/nova-elements/id512772649?mt=8', 2, '', 3, 0),
(76, 'Pass the Past', 'Dicha aplicación propone cuestionarios sobre historia estadounidense y también universal en inglés.', '', 'https://itunes.apple.com/us/app/pass-the-past/id392637590?mt=8', 2, '', 3, 0),
(77, 'Phrasal Verbs', 'Ideal para profesores de inglés, esta app desarrollada por la Universidad de Cambridge tiene como cometido facilitar el aprendizaje del verbo preposicional o phrasal verbs, es decir, aquellos compuestos por un verbo y un adverbio o preposición.', '', 'https://blog.cambridge.es/app-para-aprender-phrasal-verbs-mas-descargada/', 2, '', 3, 0),
(78, 'See.Touch.Learn', 'Esta aplicación, diseñada especialmente para niños autistas, propone ejercicios de asociación utilizando flash cards. Si bien las actividades están disponibles solo en inglés, la aplicación también permite a los usuarios crear sus propias preguntas. Instrucción visual para autismo y necesidades especiales. Reemplace todas sus tarjetas de memoria flash con las 4,400 imágenes y los 2,200 ejercicios desarrollados por profesionales.', '', 'http://www.brainparade.com/products/see-touch-learn-free/', 2, '', 3, 0),
(79, 'Tangram', 'El tangram es un juego clásico originario de China qué consiste en crear figuras y formas utilizando las 7 piezas geométricas disponibles. Con este sencillo pero entretenido juego se fomenta la observación, la concentración y la capacidad espacial. ¡Seguro qué no podréis hacer solo una partida!', '', 'http://cr.tiching.com/tangram-app-educativa-de-android/recurso-educativo/101217?utm_source=BlogTiching&utm_medium=referral&utm_c', 2, '', 3, 0),
(80, 'TeacherKit', 'Dicha aplicación tiene como cometido organizar el trabajo de los docentes, ofreciéndole utilidades tales como el registro de asistencias y calificaciones de los alumnos, la toma de notas y la creación de informes de desempaño.', '', 'https://play.google.com/store/apps/details?id=com.teacherkit.app&hl=es_CR', 2, '', 3, 0),
(81, 'Video Science', 'Dicha aplicación ofrece más de 80 videos de expertos científicos aptos para niños y adolescentes.', '', 'http://sciencenetlinks.com/tools/videoscience-app/', 2, '', 3, 0),
(82, 'Virtual Manipulatives', 'Diseñada para niños de entre 6 y 12 años, esta aplicación propone facilitar la comprensión de conceptos matemáticos tales como las fracciones, los porcentajes y los decimales a través de recursos visuales.', '', 'https://www.commonsensemedia.org/app-reviews/virtual-manipulatives', 2, '', 3, 0),
(83, 'Educar Chile', 'Este sitio expone un conjunto de recursos para los docentes, entre ellos planificaciones de temas, itinerarios de aprendizaje y actividades para el desarrollo de habilidades y competencias. Algunos de sus recursos son videos, infografías sobre diferentes temas de apoyo para el desarrollo de las lecciones.', '', 'https://formacioncontinua.educarchile.cl/index2.php#dos', 5, '', 0, 0),
(84, 'Capacítate para el empleo', 'El sitio web ofrece un conjunto de trayectorias formativas de autocapacitación, el proceso es gestionado por cada usuario según los intereses que se tengan, sus temáticas son muy variadas, pero se recomienda que exploren las opciones de formación y tecnologías, que contienen cursos muy interesantes de temas diversos, es necesario inscribirse mediante un correo electrónico.', '', 'https://capacitateparaelempleo.org/', 5, '', 0, 0),
(85, 'INFOND: Formación Docente Especializada', 'Este sitio lo ofrece el Ministerio de Educación, Cultura, Ciencia y Tecnología de Argentina. Ofrece un conjunto de desafíos pedagógicos para los docentes mediante cursos cortos, además varios programas de formación orientados hacia la docencia.', '', 'https://infod.educacion.gob.ar/cursos/265', 5, '', 0, 0),
(86, 'Universidad ICESI', ' Esta universidad tiene un conjunto de cursos de edu8cación continua, tipo libres, algunos de ellos son gratis y otros el interesado los debe pagar, además ofrece un conjunto de diplomados, bachilleratos y maestrías en diferentes campos del conocimiento.', '', 'http://www.icesi.edu.co/educacion_continua/', 5, '', 0, 0),
(87, 'Aprende Intef', ' Plataforma del Ministerio de Educación de España, que ofrece alrededor de 146 cursos bajo diferentes modalidades, algunos de ellos mediados y otros de autoformación tipo Mooc. Los temas son variados, algunos estas organizados con base en alguno de los proyectos educativos que el mismo ministerio organiza.', '', 'http://enlinea.intef.es/courses', 5, '', 0, 0),
(88, 'Programa de Mejoramiento Profesional', ' La plataforma de mejoramiento profesional docente de la UNED ofrece a los administradores y educadores de Educación Preescolar, Primaria y Secundaria estrategias de enseñanza aprendizaje novedosas para la adquisición de una cultura de actualización permanente. Algunos de estos cursos son en Modalidad presencial, virtual o mixta.', '', 'http://www.uned.ac.cr/extension/mejoramientoprofesionaldocente.shtml', 5, '', 0, 0),
(89, 'Plataforma UPE (Fundación Omar Dengo)', 'Desarrollada por la Fundación Omar Dengo, le ofrece a los docentes de diferentes modalidades, un conjunto de oportunidades de capacitación y formación gratuitas, todos los cursos son bajo la modalidad virtual. Es importante destacar que existen rutas de aprendizaje que abarcan cursos relacionados alrededor de determinada temática.', '', 'https://www.upe.ac.cr/', 5, '', 0, 0),
(90, 'Programa de Extensión de la UNED', 'Este grupo de cursos son ofrecidos por la UNED, mediante su oficina de Acción Social, los precios que tienen son según a la categoría que pertenecen, todo aquellos dentro del proyecto de mejoramiento profesional docente, tienen 40 horas, se pueden matricular en cualquier Centro Universitario de la misma institución y todos los cursos cuentan con cupo mínimo y cupo máximo de participantes.', '', 'https://www.uned.ac.cr/extension/programa-desarrollo-educativo/programa-de-mejoramiento-profesional-docente', 5, '', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadisticas`
--

CREATE TABLE `estadisticas` (
  `clim` int(255) NOT NULL,
  `eval` int(255) NOT NULL,
  `recu` int(255) NOT NULL,
  `docu` int(255) NOT NULL,
  `prof` int(255) NOT NULL,
  `plan` int(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `estadisticas`
--

INSERT INTO `estadisticas` (`clim`, `eval`, `recu`, `docu`, `prof`, `plan`) VALUES
(78749, 168205, 150501, 123549, 70512, 350646);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadisticasOLD`
--

CREATE TABLE `estadisticasOLD` (
  `clim` int(255) NOT NULL,
  `eval` int(255) NOT NULL,
  `recu` int(255) NOT NULL,
  `docu` int(255) NOT NULL,
  `prof` int(255) NOT NULL,
  `plan` int(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `estadisticasOLD`
--

INSERT INTO `estadisticasOLD` (`clim`, `eval`, `recu`, `docu`, `prof`, `plan`) VALUES
(46530, 76280, 78001, 63362, 37531, 172124);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

CREATE TABLE `niveles` (
  `id` int(11) NOT NULL,
  `nombreNivel` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `niveles`
--

INSERT INTO `niveles` (`id`, `nombreNivel`) VALUES
(1, 'Preescolar'),
(2, 'Primaria'),
(3, 'Secundaria'),
(4, 'Educación intercultural'),
(5, 'Educación jóvenes y adultos'),
(6, 'Programa nacional de ferias'),
(7, 'Agenda estudiantil');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `poblaciones`
--

CREATE TABLE `poblaciones` (
  `id` int(255) NOT NULL,
  `poblacion` varchar(256) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `poblaciones`
--

INSERT INTO `poblaciones` (`id`, `poblacion`) VALUES
(1, 'niños'),
(2, 'adolescentes'),
(3, 'jóvenes y adultos'),
(4, 'adultos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programas_ae`
--

CREATE TABLE `programas_ae` (
  `idPrograma` int(11) NOT NULL,
  `nombrePrograma` varchar(128) CHARACTER SET latin1 NOT NULL,
  `observacionesAgenda` varchar(128) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `programas_ae`
--

INSERT INTO `programas_ae` (`idPrograma`, `nombrePrograma`, `observacionesAgenda`) VALUES
(1, 'Bandera azul', NULL),
(2, 'Festival Estudiantil de las Artes', NULL),
(3, 'Juegos Deportivos estudiantiles', NULL),
(4, 'Servicio comunal', NULL),
(5, 'Aulas de escucha', NULL),
(6, 'Érase una Vez', NULL),
(7, 'Teatro en el aula', NULL),
(8, 'Ruta de museo', NULL),
(9, 'Gobierno estudiantil', NULL),
(10, 'Programa Convivir', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recursos`
--

CREATE TABLE `recursos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `id_nivel` int(11) NOT NULL,
  `anno` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `materia` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `img_educatico` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'url de img previo en educatico',
  `apoyos` tinyint(1) NOT NULL,
  `id_usuario` int(128) NOT NULL,
  `fecha_ingreso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `borrado` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `recursos`
--

INSERT INTO `recursos` (`id`, `nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `materia`, `img_educatico`, `apoyos`, `id_usuario`, `fecha_ingreso`, `borrado`) VALUES
(35, 'Prometiendo cosas a a la gente', 'Forma e decri siempre la verdad', 7, 'vacio', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'Gobierno estudiantil', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg', 0, 106, '2020-03-25 20:53:33', 0),
(33, 'La responsabilidad de hacerse grande', 'Jóvenes y adultos 2', 5, 'vacio', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/IIInivel-a.jpg', 1, 108, '2020-03-25 20:49:12', 1),
(32, 'Lo bello de aprender', 'Jóvenes y adultos 1', 5, 'vacio', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/IIInivel-a.jpg', 0, 108, '2020-03-25 20:48:51', 1),
(31, 'Nuestras raíces', 'Intercultural 1', 4, 'vacio', 'https://www.mep.go.cr/educatico/curso-interactivo-huertas-escolares', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/artecontemporaneo.jpg', 0, 108, '2020-03-25 20:47:14', 1),
(30, 'Nuestro planeta se está muriendo', 'Prueba secundaria 2 con AE', 3, 'Noveno', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'Ciencias', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/huertasescolares.jpg', 1, 108, '2020-03-25 20:45:44', 1),
(29, 'Nuestro planeta se transforma', 'Prueba secundaria 1', 3, 'Sétimo', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'Estudios Sociales', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/huertasescolares.jpg', 0, 108, '2020-03-25 20:44:33', 1),
(28, 'El volcán explosivo', 'Prueba mate ciencias primaria', 2, 'Sexto', 'https://www.mep.go.cr/educatico/revista-conexiones-edicion-2019', 'Ciencias', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/huertasescolares.jpg', 0, 108, '2020-03-25 20:37:50', 1),
(27, 'Las tablas saltarinas', 'prueba primaria mate 1 con apoyo educativo', 2, 'Primero,Segundo,Tercero', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg', 1, 108, '2020-03-25 20:34:01', 1),
(26, 'El elefante que podía volar', 'prueba de preescolar 2', 1, 'vacio', 'https://www.mep.go.cr/educatico', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/conexiones2019-ee.jpg', 0, 108, '2020-03-25 20:31:59', 1),
(25, 'La hormiguita feliz', 'prueba de preescolar 1', 1, 'vacio', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/novenoanno.png', 0, 108, '2020-03-25 20:30:52', 1),
(34, 'El deporte, nuestro mayor aliado', 'Agenda estudiantil 1', 7, 'vacio', 'https://www.mep.go.cr/educatico', 'Juegos Deportivos estudiantiles', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/artecontemporaneo.jpg', 0, 106, '2020-03-25 20:50:10', 0),
(36, '', '', 0, '', '', 'N/A', '', 0, 0, '2020-03-26 17:58:45', 0),
(37, 'Los virus: seres vivos?', 'prueba servidor producci', 2, 'Cuarto', 'https://www.mep.go.cr/educatico', 'Ciencias', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/huertasescolares.jpg', 0, 108, '2020-03-26 17:58:45', 1),
(38, 'Matrícula de Preescolar 2020', 'El Departamento de Educación de la Primera Infancia, coloca a su disposición  un sitio web que integra el acceso a una serie de documentos y orientaciones para realizar el proceso de matricula de estudiantes en el nivel de preescolar para el año 2019. ', 1, 'vacio', 'https://www.mep.go.cr/educatico/matricula-preescolar-2020', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/matricula-2020.png', 0, 108, '2020-03-26 18:52:59', 0),
(39, 'mí tía panchita con ñoño', 'recurso con tildes íóúéá y eñe', 1, 'vacio', 'https://www.mep.go.cr/educatico/aprendo-casa', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/aprendo-casa.png', 0, 108, '2020-03-26 19:04:28', 1),
(40, 'Kahoot: cuestionarios y encuentas en línea ', 'Apps para realizar cuestionarios y encuestas utilizando un m?vil para que los estudiantes respondan.', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto,Sexto', 'https://www.mep.go.cr/educatico/kahoot', 'Español', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/kahoot_.png', 0, 108, '2020-03-26 19:23:59', 0),
(41, 'Plickers: cuestionarios y encuestas en línea (Web)', 'Web para realizar cuestionarios y encuestas utilizando marcadores para que los estudiantes respondan.', 3, 'Sétimo,Octavo,Noveno,D?cimo,Undécimo,Duodécimo', 'https://www.mep.go.cr/educatico/plickers', 'Español', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/plickers_.png', 0, 108, '2020-03-26 19:27:01', 0),
(42, 'Plickers: cuestionarios y encuestas en línea (Web)', 'Web para realizar cuestionarios y encuestas utilizando marcadores para que los estudiantes respondan.', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'https://www.mep.go.cr/educatico/plickers', 'Orientación', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/plickers_.png', 0, 108, '2020-03-26 19:29:44', 0),
(43, 'Kugwe nemani bare meguera Costa Rica tigani ngäbere', '¡A disfrutar de algunas leyendas costarricenses! A continuación se les ofrecen varios textos literarios cuyo contenido se inspira en las tradiciones y costumbres de nuestro país; posteriormente, se presentan algunos ítems diseñados para constatar su comprensión, este sitio tiene una traducción en la lengua ngäbere con el fin de ofrecer la oportunidad de ser utilizado por otras personas. Nete judrun nemani bare meguera  ye ani kugwe nöen, dre nieta kugwetre  umbregwe kugwere nie ye tä tigani  täräre  nete. A', 4, 'vacio', 'https://www.mep.go.cr/educatico/leyendas-ngabere', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/crleyendas.jpg', 0, 108, '2020-03-26 19:32:35', 0),
(44, 'Modalidad educación permanente de jóvenes y adultos', 'Este es un pequeño cortometraje (vídeo) que relata cómo se habla de sexualidad en una institucion educativa en Argentina. Se evidencian  las diferentes manifestaciones de violencia que se presentan en la sociedad por temas de género o diversidades. Recurso didáctico. Accesibilidad: LESCO, subtítulos en español.', 5, 'vacio', 'https://www.mep.go.cr/educatico/modalidad-educacion-permanente-jovenes-adultos', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/ID140v2.png', 0, 108, '2020-03-26 19:39:16', 0),
(45, 'Comunicación efectiva', 'Bases teóricas y prácticas sobre esta temática.\n\nPara acceder a este recurso se requiere flash player clic aquí para instalarlo, recomendamos utilizar el navegador Firefox.', 7, 'vacio', 'https://www.mep.go.cr/educatico/comunicacion-efectiva', 'Programa Convivir', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/comunicacion_efectiva.png', 0, 108, '2020-03-26 19:42:40', 0),
(46, 'El metiche', 'Vive la aventura de desplazarte por diversos escenarios para conocer algunas características de caminos o trazos.  Puedes relacionar esta experiencia con conceptos matemáticos, funciones.  Estas son una herramienta fundamental en el desarrollo humano, conoce de ellas y disfruta jugando.', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto', 'https://www.mep.go.cr/educatico/metiche', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/metiche.jpg', 0, 108, '2020-03-26 19:55:14', 1),
(47, 'Sucesiones y Patrones', 'Ven a clases a través de esta caricatura, realiza prácticas y aprende acerca de patrones y sucesiones.', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto,Sexto', 'https://www.mep.go.cr/educatico/sucesiones-patrones', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/sucesiones-patrones.jpg', 0, 108, '2020-03-26 19:56:02', 1),
(48, 'El metiche', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/metiche.jpg', 3, 'Décimo,Undécimo,Duodécimo', 'https://www.mep.go.cr/educatico/metiche', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/metiche.jpg', 0, 108, '2020-03-26 20:02:51', 0),
(49, 'Apoyo Curricular en Matemática I y II Ciclo de la Educación General Básica', 'Documento de apoyo para realizar la mediación pedagógica por parte del docente de  I y II Ciclos, en el encontrara orientaciones e ideas para la elaboración de las estrategias de mediación y potenciar de esta manera la acción de aula, a través de la integración de habilidades..', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto,Sexto', 'http://mep.go.cr/educatico/apoyo-curricular-matematica-i-ii-ciclo', 'Matemática', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/apoyo-curricular.png', 0, 108, '2020-03-26 20:31:28', 0),
(50, 'Apoyo Curricular en Matemática I y II Ciclo de la Educación General Básica', 'Documento de apoyo para realizar la mediación pedagógica por parte del docente de  I y II ciclos, en el encontrará orientaciones e ideas para la elaboración de las estrategias de mediación y potenciar de esta manera la acción de aula, a través de la integración de habilidades.', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto,Sexto', 'http://mep.go.cr/educatico/integracion-habilidades-I-II-ciclo', 'Matemática', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/integracion_habilidades.jpg', 0, 108, '2020-03-26 20:32:17', 1),
(51, 'Cuenticos', 'Aprovecha la versatilidad de la tecnología y, haciendo uso de un diseño atractivo y una perspectiva lúdica, impulsa a la población estudiantil a crear narraciones originales. Un valor agregado del recurso es el hecho de que abre la alternativa de que tales textos literarios sean publicados (esto con la previa revisión y aval de la persona docente) y su lectura sea del disfrute de otros estudiantes o internautas nacionales e internacionales.', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto,Sexto', 'http://mep.go.cr/educatico/cuenticos', 'Español', 'http://mep.go.cr/educatico/cuenticos', 0, 108, '2020-03-26 20:39:22', 1),
(52, 'Cuenticos', 'Krei, cuyo nombre es tomado del esperanto y tiene origen en el latín crea, ha sido diseñado con el propósito de que el estudiante lo utilice  de la manera más crítica y creativa posible.', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/krei', 'Español', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/krei.jpg', 0, 108, '2020-03-26 20:48:00', 0),
(53, 'Objetos enigmáticos', 'l grupo de infografías; Claves del Arte costarricense (Arte premoderno costarricense, Arte moderno costarricense y Arte contemporáneo costarricense), se presenta a la comunidad educativa como un recurso de apoyo para el desarrollo de los contenidos programáticos de undécimo año.', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/arte-costarricense-contemporaneo', 'Artes Plásticas', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/artecontemporaneo.jpg', 0, 108, '2020-03-26 21:14:30', 0),
(54, 'Biotecnología: sus técnicas y aplicaciones', 'Definición de biotecnología, tipos tradicional, clásica y moderna. Campos de aplicación de la ingeniería genética.  Descripción y ejemplos de técnicas:  mutaciones inducidas, transgénesis, clonación, mantenimiento de germoplasmas o genomas.  Consideraciones sociales y éticas.', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/biotecnologia-sus-tecnicas-aplicaciones', 'Biología', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/biotecnologia_tecnica.png', 0, 108, '2020-03-26 21:16:21', 0),
(55, 'Biotecnología: cultivos celulares y reproducción asistida', 'La profesora Sary Arroyo Gutiérrez nos explica el tema de biotecnología, células madre totimultipotenciales que tienen la capacidad de  diferenciarse en otros tipos celulares, crecer, dividirse y diferenciarse para dar lugar a un organismo completo.  Descripción de la técnica de cultivo celular.  Las técnicas más comunes  de procreación asistida son: selección artificial,  inseminación artificial,  fertilización in vitro y  criopreservación de ovocitos, esperma y embriones. ', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/biotecnologia-cultivos-celulares-reproduccion-asistida', 'Biología', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/biotecnologia.pngtivo_nodo/biotecnologia_tecnica.png', 0, 108, '2020-03-26 21:17:12', 0),
(56, 'Orienta2', 'Plataforma digital  en donde las personas estudiantes pueda accesar a una información actualizada sobre orientación vocacional, emprendimiento, empleabilidad e información de apoyo (como por ejemplo fuentes de financiamiento para estudios técnicos/universitarios), dirigida a estudiantes que cursan la educación de secundaria, en su diferentes modalidades.', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/orienta2', 'Orientación', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/orientados.jpg', 0, 108, '2020-03-26 21:18:38', 0),
(57, 'E-mentores', 'E-mentores es un espacio de autoformación  en línea para la prevención y respuesta del abuso y explotación sexual en línea. Bajo el enfoque de ciudadanía digital, a través de recursos audiovisuales interactivos las personas con roles de cuido y acompañamiento aprenden a guiar y acompañar a las personas menores de edad en sus interacciones en línea para promover un uso seguro y responsable de las TIC. ', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/e-mentores', 'Orientación', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/ementores.jpg', 0, 108, '2020-03-26 21:20:01', 0),
(58, 'Modelo de consejería orientada a los jóvenes', 'Modelo de consejería orientada a los jóvenes. En prevención del VIH y para promoción de la salud sexual y reproductiva', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'https://www.mep.go.cr/educatico/modelo-consejeria-orientada-jovenes', 'Educación para la Afectividad y la Sexualidad Integral', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/modeloconsejeria.jpg', 0, 108, '2020-03-27 19:04:17', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
--

CREATE TABLE `reportes` (
  `id` int(255) NOT NULL,
  `nombre` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detalle` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `atendida` tinyint(1) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `reportes`
--

INSERT INTO `reportes` (`id`, `nombre`, `correo`, `detalle`, `atendida`, `fecha`) VALUES
(1, 'correo@correo.com', 'Pepito2', 'Este es el detalle2', 0, '2020-02-11 20:54:57'),
(2, 'correo@correo.com', 'Pepito3', 'Este es el detalle3', 0, '2020-02-11 20:54:57'),
(3, 'correo@correo.com', 'Pepito4', 'Este es el detalle4', 0, '2020-02-11 20:54:57'),
(4, 'correo@correo.com', 'Pepito5', 'Este es el detalle5', 0, '2020-02-11 20:54:57'),
(5, 'luis.chacon.campos@gmail.com', 'Carlitos', 'asd', 0, '2020-02-11 20:54:57'),
(6, 'luis.chacon.campos@gmail.com', 'Juanito', 'Cambiar el pelo de la maestra por favor', 0, '2020-02-11 20:57:41'),
(7, 'ana@gmail.com', 'Ana T', 'prueba ', 0, '2020-02-12 16:12:10'),
(8, 'juanitabonita@correo.de', 'Juanita', 'No me gustan los zapatos', 0, '2020-02-12 17:01:17'),
(9, 'luis.chacon.campos@gmail.com', 'pipito', 'ddddddd', 0, '2020-02-12 17:16:08'),
(10, 'luis.chacon.campos@gmail.com', 'Carlitos', 'fdsfsdf', 0, '2020-02-12 17:19:03'),
(11, 'luis.chacon.campos@gmail.com', 'Carlitos', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 0, '2020-02-12 17:20:48'),
(12, 'luis.chacon.campos@gmail.com', 'pipito', 'pppppppppppppppppppp', 0, '2020-02-12 17:30:45'),
(13, 'alaskaduende@gmail.com', 'Adriana Chinchilla Sancho', 'En un programa en canal 13,  mencionaban que se podr', 0, '2020-03-27 01:25:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sub_categorias_IDP`
--

CREATE TABLE `sub_categorias_IDP` (
  `id` int(11) NOT NULL,
  `sub_categoria` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sub_categorias_IDP`
--

INSERT INTO `sub_categorias_IDP` (`id`, `sub_categoria`) VALUES
(1, 'Sitios Educativos'),
(2, 'Herramientas Web'),
(3, 'Apps Educativas'),
(4, 'Estrategias de aprendizaje');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_ODP`
--

CREATE TABLE `tipos_ODP` (
  `id` int(11) NOT NULL,
  `oferta` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tipos_ODP`
--

INSERT INTO `tipos_ODP` (`id`, `oferta`) VALUES
(1, 'Cursos virtuales'),
(2, 'Recursos digitales para educadores'),
(3, 'Videoteca IDP'),
(4, 'Referencias útiles para la docencia'),
(5, 'Otras ofertas formativas disponibles');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `idTipoUsuario` int(128) NOT NULL,
  `etiquetaTipoUsuario` varchar(128) NOT NULL,
  `descripcionTipoUsuario` varchar(256) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`idTipoUsuario`, `etiquetaTipoUsuario`, `descripcionTipoUsuario`) VALUES
(1, 'Administrador de recursos', 'Persona que agrga recursos de cualuier nivel'),
(2, 'Desarrollo profesional', 'Admintra todo lo referente a desarrollo profesional'),
(3, 'Plantillas planeamiento', 'Admintra todo lo referente a plantillas del planeamiento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL COMMENT 'Identificador único para el usuario',
  `usuario` varchar(30) NOT NULL COMMENT 'correo electrónico',
  `clave` varchar(130) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido1` varchar(128) NOT NULL,
  `apellido2` varchar(128) NOT NULL,
  `departamento` varchar(255) DEFAULT NULL,
  `ultimoAcceso` datetime DEFAULT NULL,
  `token` varchar(256) NOT NULL,
  `token_password` varchar(100) DEFAULT NULL,
  `password_request` int(11) DEFAULT '0',
  `idTipoUsuario` int(128) NOT NULL,
  `activo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `apellido1`, `apellido2`, `departamento`, `ultimoAcceso`, `token`, `token_password`, `password_request`, `idTipoUsuario`, `activo`) VALUES
(106, 'luis@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Luis', 'Chacón', 'Campos', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 3, 1),
(107, 'oscar@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Oscar', 'Perez', 'Ramirez', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 2, 1),
(108, 'paty@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Patricia', 'Hernandez', 'Conejo', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1),
(109, 'francisco@gespro.cr', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Francisco', 'Marenco', 'Urbina', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignaturas_primaria`
--
ALTER TABLE `asignaturas_primaria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `asignaturas_secundaria`
--
ALTER TABLE `asignaturas_secundaria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `desarrollo_profesional`
--
ALTER TABLE `desarrollo_profesional`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `niveles`
--
ALTER TABLE `niveles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `programas_ae`
--
ALTER TABLE `programas_ae`
  ADD PRIMARY KEY (`idPrograma`);

--
-- Indices de la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sub_categorias_IDP`
--
ALTER TABLE `sub_categorias_IDP`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipos_ODP`
--
ALTER TABLE `tipos_ODP`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`idTipoUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignaturas_primaria`
--
ALTER TABLE `asignaturas_primaria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `asignaturas_secundaria`
--
ALTER TABLE `asignaturas_secundaria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del evento o acción realizada', AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT de la tabla `desarrollo_profesional`
--
ALTER TABLE `desarrollo_profesional`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT de la tabla `programas_ae`
--
ALTER TABLE `programas_ae`
  MODIFY `idPrograma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `recursos`
--
ALTER TABLE `recursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT de la tabla `reportes`
--
ALTER TABLE `reportes`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `sub_categorias_IDP`
--
ALTER TABLE `sub_categorias_IDP`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipos_ODP`
--
ALTER TABLE `tipos_ODP`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `idTipoUsuario` int(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario', AUTO_INCREMENT=110;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
