-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 17, 2020 at 07:47 PM
-- Server version: 5.7.21
-- PHP Version: 7.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cajaherr_datos`
--

-- --------------------------------------------------------

--
-- Table structure for table `asignaturas_primaria`
--

DROP TABLE IF EXISTS `asignaturas_primaria`;
CREATE TABLE IF NOT EXISTS `asignaturas_primaria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) CHARACTER SET utf8 NOT NULL,
  `observaciones` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `asignaturas_primaria`
--

INSERT INTO `asignaturas_primaria` (`id`, `nombre`, `observaciones`) VALUES
(1, 'Matemática', ''),
(2, 'Ciencias', ''),
(3, 'Español', ''),
(4, 'Estudios Sociales', ''),
(5, 'Artes Plásticas', ''),
(6, 'Inglés', '');

-- --------------------------------------------------------

--
-- Table structure for table `asignaturas_secundaria`
--

DROP TABLE IF EXISTS `asignaturas_secundaria`;
CREATE TABLE IF NOT EXISTS `asignaturas_secundaria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) NOT NULL,
  `observaciones` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `asignaturas_secundaria`
--

INSERT INTO `asignaturas_secundaria` (`id`, `nombre`, `observaciones`) VALUES
(1, 'Espñaol', NULL),
(2, 'Matemática', NULL),
(3, 'Ciencias', NULL),
(4, 'Estudios Sociales', NULL),
(5, 'Biología', NULL),
(6, 'Química', NULL),
(7, 'Física', NULL),
(8, 'Orientación', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bitacora`
--

DROP TABLE IF EXISTS `bitacora`;
CREATE TABLE IF NOT EXISTS `bitacora` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del evento o acción realizada',
  `id_usuario` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Usuario que realiza el evento',
  `evento` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Acción realizada',
  `fecha_evento` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha en que sucede el evento',
  `id_registro` int(11) NOT NULL COMMENT 'Identificador el ingreso modificado',
  `tabla` varchar(256) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nombre de la tabla a la que pertenece el registro afectado',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Tabla para documentar eventos de los usuarios en el sistema';

--
-- Dumping data for table `bitacora`
--

INSERT INTO `bitacora` (`id`, `id_usuario`, `evento`, `fecha_evento`, `id_registro`, `tabla`) VALUES
(1, '106', 'Agrega recurso', '2020-03-10 15:34:16', 1, 'recursos'),
(2, '106', 'Agregar', '2020-03-17 13:33:49', 22, 'Recursos'),
(3, '106', 'Agregar', '2020-03-17 17:39:28', 23, 'Recursos');

-- --------------------------------------------------------

--
-- Table structure for table `estadisticas`
--

DROP TABLE IF EXISTS `estadisticas`;
CREATE TABLE IF NOT EXISTS `estadisticas` (
  `clim` int(255) NOT NULL,
  `eval` int(255) NOT NULL,
  `recu` int(255) NOT NULL,
  `docu` int(255) NOT NULL,
  `prof` int(255) NOT NULL,
  `plan` int(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `estadisticas`
--

INSERT INTO `estadisticas` (`clim`, `eval`, `recu`, `docu`, `prof`, `plan`) VALUES
(46530, 76279, 77996, 63361, 37530, 172119);

-- --------------------------------------------------------

--
-- Table structure for table `niveles`
--

DROP TABLE IF EXISTS `niveles`;
CREATE TABLE IF NOT EXISTS `niveles` (
  `id` int(11) NOT NULL,
  `nombreNivel` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `niveles`
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
-- Table structure for table `poblaciones`
--

DROP TABLE IF EXISTS `poblaciones`;
CREATE TABLE IF NOT EXISTS `poblaciones` (
  `id` int(255) NOT NULL,
  `poblacion` varchar(256) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `poblaciones`
--

INSERT INTO `poblaciones` (`id`, `poblacion`) VALUES
(1, 'niños'),
(2, 'adolescentes'),
(3, 'jóvenes y adultos'),
(4, 'adultos');

-- --------------------------------------------------------

--
-- Table structure for table `programas_ae`
--

DROP TABLE IF EXISTS `programas_ae`;
CREATE TABLE IF NOT EXISTS `programas_ae` (
  `idPrograma` int(11) NOT NULL AUTO_INCREMENT,
  `nombrePrograma` varchar(128) CHARACTER SET latin1 NOT NULL,
  `observacionesAgenda` varchar(128) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`idPrograma`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `programas_ae`
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
-- Table structure for table `recursos`
--

DROP TABLE IF EXISTS `recursos`;
CREATE TABLE IF NOT EXISTS `recursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `borrado` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `recursos`
--

INSERT INTO `recursos` (`id`, `nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `materia`, `img_educatico`, `apoyos`, `id_usuario`, `fecha_ingreso`, `borrado`) VALUES
(1, 'El círculo cromático actualizado desde PHP', 'Video de los colores primarios y secundarios/colores fr?os y c?lidos.', 2, 'Primero,Segundo,Tercero', 'https://www.youtube.com/watch?v=FN9ycBXKHDY', 'Artes Plásticas', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/conexiones2019-ee.jpg', 0, 106, '2020-02-04 19:17:26', 0),
(2, 'La identidad desde PHP en I ciclo', 'Video sobre la identidad en el descubrimiento de mis favoritos. I Ciclo', 2, 'Primero,Segundo,Tercero', 'https://www.youtube.com/watch?v=-zMEPVRWvD0', 'Artes Plásticas', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Carretica.png', 0, 106, '2020-02-04 19:17:26', 0),
(3, 'apoyo Español editado 456', 'español ejemplo 1 editado con apoyo 456', 2, 'Quinto,Sexto', 'https://www.youtube.com/watch?v=FN9ycBXKHDY', 'Español', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/orientados.jpg', 1, 106, '2020-02-04 19:17:26', 0),
(4, 'Las palabras saltarinas', 'español para primero  segundo 789', 2, 'Primero,Segundo,Tercero', 'https://www.youtube.com/watch?v=FN9ycBXKHDY', 'Español', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/recursos-19.png', 0, 106, '2020-02-04 19:17:26', 0),
(5, 'Prueba de Biologia', 'biología noveno', 3, 'Décimo', 'https://www.youtube.com/watch?v=FN9ycBXKHDY', 'Biología', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/weatherwise.jpg', 0, 2, '2020-02-04 19:17:26', 0),
(9, 'Los pepitos inteligentes', 'Prueba  1 de mate ', 2, 'Cuarto,Quinto,Sexto', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/novenoanno.png', 0, 103, '2020-03-02 20:00:28', 0),
(6, 'Tercer recurso Plasticas\r\n', 'Video sobre la identidad en el descubrimiento de mis favoritos.', 2, 'Tercero', 'https://www.youtube.com/watch?v=-zMEPVRWvD0', 'Artes Plásticas', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Carretica.png', 0, 106, '2020-02-04 19:17:26', 0),
(7, 'maqueta de volcan editado', 'prueba de recurso 456', 2, 'Cuarto,Quinto,Sexto', 'https://www.mep.go.cr/educatico', 'Ciencias', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/conexiones2019-ee.jpg', 0, 106, '2020-03-02 13:18:23', 0),
(8, 'maqueta 456', 'otra', 2, 'Primero,Segundo', 'https://www.mep.go.cr/educatico/revista-conexiones-edicion-2019', 'Artes Plásticas', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/conexiones2019-ee.jpg', 0, 106, '2020-03-02 14:11:34', 0),
(10, 'Amanda la Exploradora', 'Explorando con Amanda y sus aventuras', 2, 'Primero,Segundo', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'Estudios Sociales', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg', 1, 106, '2020-03-04 20:43:54', 0),
(11, 'Las tablas', 'Cuentos de Amanda', 2, 'Primero', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg', 0, 106, '2020-03-09 19:36:39', 0),
(12, 'pipito', 'defrgt', 1, 'vacio', 'https://www.mep.go.cr/educatico', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/conexiones2019-ee.jpg', 0, 106, '2020-03-11 20:41:08', 0),
(13, 'pipito', 'dsds', 2, 'Primero', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', '-1', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/novenoanno.png', 0, 106, '2020-03-11 20:48:54', 0),
(14, 'Los 5 sentidos', 'Prueba 2 de preescolar', 1, 'vacio', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/novenoanno.png', 0, 103, '2020-03-12 16:29:29', 0),
(15, 'Recurso intercultural 1', 'Prueba intercultural 1', 4, 'vacio', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/conexiones2019-ee.jpg', 0, 106, '2020-03-12 16:41:56', 0),
(16, 'bandera azul editada segunda vez', 'editada desde postman 2', 7, 'vacio', 'www.mepg.go.cr', 'Deportivos 456', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/conexiones2019-ee.jpg', 0, 106, '2020-03-12 16:57:09', 0),
(17, 'Funciones 123 editada 1', 'test de años 1 edicion uno', 3, 'Sétimo,Octavo,Noveno', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg', 0, 106, '2020-03-12 17:13:32', 0),
(18, 'prueba mate años', 'prueba 456', 3, 'Décimo,Undécimo,Duodécimo', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/artecontemporaneo.jpg', 0, 106, '2020-03-12 17:26:17', 0),
(19, 'recurso de noveno mate', 'año noveno ', 3, 'Noveno', 'https://www.mep.go.cr/educatico/curso-interactivo-huertas-escolares', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/novenoanno.png', 0, 106, '2020-03-12 17:27:39', 0),
(20, 'Manual para neutralizar la huella de carbono en centros educativos', 'no disponible', 0, '0', 'https://www.mep.go.cr/sites/default/files/page/adjuntos/manualbanderaazul.pdf', '2', NULL, 0, 2, '2020-03-16 19:31:51', 0),
(22, 'Video informativo editado 4', 'prueba 1 AE editada por cuarta vez', 7, 'vacio', 'https://www.youtube.com/watch?time_continue=4&v=xfgrViUtigc&feature=emb_logo', 'Servicio comunal', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/motivacion-maestros.jpg', 0, 106, '2020-03-17 13:33:49', 0),
(23, 'Juntos en el teatro', 'prueba teatro', 7, 'vacio', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'Teatro en el aula', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/novenoanno.png', 0, 106, '2020-03-17 17:39:28', 0);

-- --------------------------------------------------------

--
-- Table structure for table `reportes`
--

DROP TABLE IF EXISTS `reportes`;
CREATE TABLE IF NOT EXISTS `reportes` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detalle` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `atendida` tinyint(1) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reportes`
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
(12, 'luis.chacon.campos@gmail.com', 'pipito', 'pppppppppppppppppppp', 0, '2020-02-12 17:30:45');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario',
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
  `tipoUsuario` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `apellido1`, `apellido2`, `departamento`, `ultimoAcceso`, `token`, `token_password`, `password_request`, `tipoUsuario`, `activo`) VALUES
(97, 'oscar@correo.de', '$2y$10$HIfq9JX63uK/igxxsjlJKOMcYL3CZEOtGLDWz7YH8FzGQQSCzsuju', 'Oscar1', 'Pérez1', 'Ramírez1', 'GESPRO1', NULL, '8b6d28e1023747a88925a89213e52662', NULL, 0, 1, 1),
(99, 'oscar1.perez.ramirez@mep.go.cr', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Oscar', 'Pérez', 'Ramírez', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1),
(106, 'luis@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Luis', 'Chacón', 'Campos', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
