-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 27-03-2020 a las 09:41:14
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
(1, 'Matemática', ''),
(2, 'Ciencias', ''),
(3, 'Español', ''),
(4, 'Estudios Sociales', ''),
(5, 'Artes Plásticas', ''),
(6, 'Inglés', ''),
(7, 'Francés', NULL);

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
(1, 'Español', NULL),
(2, 'Matemática', NULL),
(3, 'Ciencias', NULL),
(4, 'Estudios Sociales', NULL),
(5, 'Biología', NULL),
(6, 'Química', NULL),
(7, 'Física', NULL),
(8, 'Orientación', NULL);

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
(85, '108', 'Agregar', '2020-03-26 21:20:01', 57, 'Recursos');

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
  `id_sub_categoria` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `desarrollo_profesional`
--

INSERT INTO `desarrollo_profesional` (`id`, `nombre`, `descripcion`, `poblacion`, `url`, `id_tipo`, `url_imagen`, `id_sub_categoria`) VALUES
(1, 'Utilización de Word en el ámbito educativo', 'Se pretende fortalecer las habilidades y conocimientos para crear documentos digitales escritos con herramientas de Microsoft Office Word.', 'Dirigido a Personal docente y técnico-docente del sistema educativo nacional.', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/word.png', 0),
(2, 'Utilización de Excel en el ámbito educativo', 'El curso requiere fortalecer habilidades y conocimientos para crear hojas de cálculo que permiten la interacción y colaboración que agregan tratamiento de los datos en el ámbito educativo.', 'Dirigido a Personal docente y administrativo del MEP.', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/2excel.png', 0),
(3, 'Utilización de Power Point en el ámbito educativo', 'El curso requiere fortalecer habilidades y conocimientos para mejorar las presentaciones de información ofreciendo un dinamismo al ámbito educativo.', 'Dirigido a Personal docente y administrativo del MEP.', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/3powerpoint.png', 0),
(4, 'Creación de Edublogs', 'El presente curso permite aplicar habilidades tecnológicas que permitan profundizar en la construcción y edición de un Blog educativo.', 'Dirigido a Personal docente y Asesores pedagógicos del MEP', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/6dublogs.png', 0),
(5, 'La sazón de la lectoescritura', 'Los participantes de este curso, tendrán la posibilidad de reforzar sus conocimientos en el enfoque curricular que sustenta el Programa de estudio de Español, así como retomar la importancia conceptual de la conciencia fonológica y sus componentes durante la implementación de estrategias de mediación que contribuyan a desarrollarla. Se desarrolla en línea con una duración de 24 horas. Debe tener acceso a Internet de manera estable, el correo institucional (MEP) activo y de uso cotidiano, conocer en un nivel básico la exploración y navegación de un entorno virtual.', 'Dirigido a Personal docente del MEP', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/sazon.png', 0),
(6, 'Producción de Recurso Educativos Digitales', 'El presente curso está dirigido para docentes en ejercicio del Ministerio de Educación Pública, ofrece actividades y recursos que les permita a los participantes apropiarse de estrategias para la producción de recursos educativos digitales innovadores, mediante el uso de herramientas locales y como web; los cuales pueden favorecer los procesos de mediación en el aula.', 'Dirigido a Personal docente del MEP', 'https://www.facebook.com/idpmep/', 1, 'https://cajadeherramientas.mep.go.cr/Faro/asset/img/7_desarrollo_prof/recursos.png', 0);

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
(78612, 167891, 150129, 123320, 70370, 349969);

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
(46, 'El metiche', 'Vive la aventura de desplazarte por diversos escenarios para conocer algunas características de caminos o trazos.  Puedes relacionar esta experiencia con conceptos matemáticos, funciones.  Estas son una herramienta fundamental en el desarrollo humano, conoce de ellas y disfruta jugando.', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto', 'https://www.mep.go.cr/educatico/metiche', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/metiche.jpg', 0, 108, '2020-03-26 19:55:14', 0),
(47, 'Sucesiones y Patrones', 'Ven a clases a través de esta caricatura, realiza prácticas y aprende acerca de patrones y sucesiones.', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto,Sexto', 'https://www.mep.go.cr/educatico/sucesiones-patrones', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/sucesiones-patrones.jpg', 0, 108, '2020-03-26 19:56:02', 1),
(48, 'El metiche', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/metiche.jpg', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'https://www.mep.go.cr/educatico/metiche', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/metiche.jpg', 0, 108, '2020-03-26 20:02:51', 0),
(49, 'Apoyo Curricular en Matemática I y II Ciclo de la Educación General Básica', 'Documento de apoyo para realizar la mediación pedagógica por parte del docente de  I y II Ciclos, en el encontrara orientaciones e ideas para la elaboración de las estrategias de mediación y potenciar de esta manera la acción de aula, a través de la integración de habilidades..', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto,Sexto', 'http://mep.go.cr/educatico/apoyo-curricular-matematica-i-ii-ciclo', 'Matemática', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/apoyo-curricular.png', 0, 108, '2020-03-26 20:31:28', 0),
(50, 'Apoyo Curricular en Matemática I y II Ciclo de la Educación General Básica', 'Documento de apoyo para realizar la mediación pedagógica por parte del docente de  I y II ciclos, en el encontrará orientaciones e ideas para la elaboración de las estrategias de mediación y potenciar de esta manera la acción de aula, a través de la integración de habilidades.', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto,Sexto', 'http://mep.go.cr/educatico/integracion-habilidades-I-II-ciclo', 'Matemática', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/integracion_habilidades.jpg', 0, 108, '2020-03-26 20:32:17', 0),
(51, 'Cuenticos', 'Aprovecha la versatilidad de la tecnología y, haciendo uso de un diseño atractivo y una perspectiva lúdica, impulsa a la población estudiantil a crear narraciones originales. Un valor agregado del recurso es el hecho de que abre la alternativa de que tales textos literarios sean publicados (esto con la previa revisión y aval de la persona docente) y su lectura sea del disfrute de otros estudiantes o internautas nacionales e internacionales.', 2, 'Primero,Segundo,Tercero,Cuarto,Quinto,Sexto', 'http://mep.go.cr/educatico/cuenticos', 'Español', 'http://mep.go.cr/educatico/cuenticos', 0, 108, '2020-03-26 20:39:22', 0),
(52, 'Cuenticos', 'Krei, cuyo nombre es tomado del esperanto y tiene origen en el latín crea, ha sido diseñado con el propósito de que el estudiante lo utilice  de la manera más crítica y creativa posible.', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/krei', 'Español', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/krei.jpg', 0, 108, '2020-03-26 20:48:00', 0),
(53, 'Objetos enigmáticos', 'l grupo de infografías; Claves del Arte costarricense (Arte premoderno costarricense, Arte moderno costarricense y Arte contemporáneo costarricense), se presenta a la comunidad educativa como un recurso de apoyo para el desarrollo de los contenidos programáticos de undécimo año.', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/arte-costarricense-contemporaneo', '-1', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/artecontemporaneo.jpg', 0, 108, '2020-03-26 21:14:30', 0),
(54, 'Biotecnología: sus técnicas y aplicaciones', 'Definición de biotecnología, tipos tradicional, clásica y moderna. Campos de aplicación de la ingeniería genética.  Descripción y ejemplos de técnicas:  mutaciones inducidas, transgénesis, clonación, mantenimiento de germoplasmas o genomas.  Consideraciones sociales y éticas.', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/biotecnologia-sus-tecnicas-aplicaciones', 'Biología', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/biotecnologia_tecnica.png', 0, 108, '2020-03-26 21:16:21', 0),
(55, 'Biotecnología: cultivos celulares y reproducción asistida', 'La profesora Sary Arroyo Gutiérrez nos explica el tema de biotecnología, células madre totimultipotenciales que tienen la capacidad de  diferenciarse en otros tipos celulares, crecer, dividirse y diferenciarse para dar lugar a un organismo completo.  Descripción de la técnica de cultivo celular.  Las técnicas más comunes  de procreación asistida son: selección artificial,  inseminación artificial,  fertilización in vitro y  criopreservación de ovocitos, esperma y embriones. ', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/biotecnologia-cultivos-celulares-reproduccion-asistida', 'Biología', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/biotecnologia.pngtivo_nodo/biotecnologia_tecnica.png', 0, 108, '2020-03-26 21:17:12', 0),
(56, 'Orienta2', 'Plataforma digital  en donde las personas estudiantes pueda accesar a una información actualizada sobre orientación vocacional, emprendimiento, empleabilidad e información de apoyo (como por ejemplo fuentes de financiamiento para estudios técnicos/universitarios), dirigida a estudiantes que cursan la educación de secundaria, en su diferentes modalidades.', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/orienta2', 'Orientación', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/orientados.jpg', 0, 108, '2020-03-26 21:18:38', 0),
(57, 'E-mentores', 'E-mentores es un espacio de autoformación  en línea para la prevención y respuesta del abuso y explotación sexual en línea. Bajo el enfoque de ciudadanía digital, a través de recursos audiovisuales interactivos las personas con roles de cuido y acompañamiento aprenden a guiar y acompañar a las personas menores de edad en sus interacciones en línea para promover un uso seguro y responsable de las TIC. ', 3, 'Sétimo,Octavo,Noveno,Décimo,Undécimo,Duodécimo', 'http://mep.go.cr/educatico/e-mentores', 'Orientación', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/ementores.jpg', 0, 108, '2020-03-26 21:20:01', 0);

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
(109, 'francisco@gespro.cr', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Francisco', 'Marenco', 'Urbina', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 2, 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `asignaturas_secundaria`
--
ALTER TABLE `asignaturas_secundaria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del evento o acción realizada', AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT de la tabla `desarrollo_profesional`
--
ALTER TABLE `desarrollo_profesional`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `programas_ae`
--
ALTER TABLE `programas_ae`
  MODIFY `idPrograma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `recursos`
--
ALTER TABLE `recursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

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
