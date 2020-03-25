-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 25, 2020 at 09:17 PM
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
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Tabla para documentar eventos de los usuarios en el sistema';

--
-- Dumping data for table `bitacora`
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
(34, '106', 'Agregar', '2020-03-25 20:30:52', 25, 'Recursos');

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
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `recursos`
--

INSERT INTO `recursos` (`id`, `nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `materia`, `img_educatico`, `apoyos`, `id_usuario`, `fecha_ingreso`, `borrado`) VALUES
(35, 'Prometiendo cosas a a la gente', 'Forma e decri siempre la verdad', 7, 'vacio', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'Gobierno estudiantil', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg', 0, 106, '2020-03-25 20:53:33', 0),
(33, 'La responsabilidad de hacerse grande', 'Jóvenes y adultos 2', 5, 'vacio', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/IIInivel-a.jpg', 1, 106, '2020-03-25 20:49:12', 0),
(32, 'Lo bello de aprender', 'Jóvenes y adultos 1', 5, 'vacio', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/IIInivel-a.jpg', 0, 106, '2020-03-25 20:48:51', 0),
(31, 'Nuestras raíces', 'Intercultural 1', 4, 'vacio', 'https://www.mep.go.cr/educatico/curso-interactivo-huertas-escolares', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/artecontemporaneo.jpg', 0, 106, '2020-03-25 20:47:14', 0),
(30, 'Nuestro planeta se está muriendo', 'Prueba secundaria 2 con AE', 3, 'Noveno', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'Ciencias', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/huertasescolares.jpg', 1, 106, '2020-03-25 20:45:44', 0),
(29, 'Nuestro planeta se transforma', 'Prueba secundaria 1', 3, 'Sétimo', 'https://www.mep.go.cr/educatico/english-mini-books-first-cycle', 'Estudios Sociales', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/huertasescolares.jpg', 0, 106, '2020-03-25 20:44:33', 0),
(28, 'El volcán explosivo', 'Prueba mate ciencias primaria', 2, 'Sexto', 'https://www.mep.go.cr/educatico/revista-conexiones-edicion-2019', 'Ciencias', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/huertasescolares.jpg', 0, 106, '2020-03-25 20:37:50', 0),
(27, 'Las tablas saltarinas', 'prueba primaria mate 1 con apoyo educativo', 2, 'Primero,Segundo,Tercero', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'Matemática', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg', 1, 106, '2020-03-25 20:34:01', 0),
(26, 'El elefante que podía volar', 'prueba de preescolar 2', 1, 'vacio', 'https://www.mep.go.cr/educatico', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/conexiones2019-ee.jpg', 0, 106, '2020-03-25 20:31:59', 0),
(25, 'La hormiguita feliz', 'prueba de preescolar 1', 1, 'vacio', 'https://www.mep.go.cr/educatico/arte-costarricense-contemporaneo', 'N/A', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/novenoanno.png', 0, 106, '2020-03-25 20:30:52', 0),
(34, 'El deporte, nuestro mayor aliado', 'Agenda estudiantil 1', 7, 'vacio', 'https://www.mep.go.cr/educatico', 'Juegos Deportivos estudiantiles', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/artecontemporaneo.jpg', 0, 106, '2020-03-25 20:50:10', 0);

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
-- Table structure for table `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
CREATE TABLE IF NOT EXISTS `tipo_usuario` (
  `idTipoUsuario` int(128) NOT NULL AUTO_INCREMENT,
  `etiquetaTipoUsuario` varchar(128) NOT NULL,
  `descripcionTipoUsuario` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idTipoUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`idTipoUsuario`, `etiquetaTipoUsuario`, `descripcionTipoUsuario`) VALUES
(1, 'Administrador de recursos', 'Persona que agrga recursos de cualuier nivel'),
(2, 'Desarrollo profesional', 'Admintra todo lo referente a desarrollo profesional'),
(3, 'Plantillas planeamiento', 'Admintra todo lo referente a plantillas del planeamiento');

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
  `idTipoUsuario` int(128) NOT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `apellido1`, `apellido2`, `departamento`, `ultimoAcceso`, `token`, `token_password`, `password_request`, `idTipoUsuario`, `activo`) VALUES
(106, 'luis@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Luis', 'Chacón', 'Campos', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 3, 1),
(107, 'oscar@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Oscar', 'Perez', 'Ramirez', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 2, 1),
(108, 'paty@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Patricia', 'Hernandez', 'Conejo', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
