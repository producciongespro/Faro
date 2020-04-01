-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 01, 2020 at 05:44 PM
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
-- Table structure for table `menu_botones`
--

DROP TABLE IF EXISTS `menu_botones`;
CREATE TABLE IF NOT EXISTS `menu_botones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idTipoUsuario` int(11) NOT NULL COMMENT 'Si es usuario de recursos o de desarrrollo profesional por ejemplo',
  `etiqueta` varchar(128) NOT NULL COMMENT 'texto a mostrar ene l botón',
  `componente` varchar(128) NOT NULL COMMENT 'componente que abre el botón',
  `modo` varchar(128) DEFAULT NULL COMMENT 'En caso de desarrollo profesional modo en que abre el componente contenedor',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu_botones`
--

INSERT INTO `menu_botones` (`id`, `idTipoUsuario`, `etiqueta`, `componente`, `modo`) VALUES
(1, 1, 'Agregar Recurso', 'FormEnviarRecurso', NULL),
(2, 1, 'Ver recursos', 'VerRecursos', NULL),
(3, 1, 'Ver recursos', 'VerRecursos', NULL),
(4, 1, 'Papelera', 'Papelera', NULL),
(5, 1, 'Bitácora', 'Bitacora', NULL),
(6, 2, 'Cursos Virtuales', 'ContenedorListados', 'Cursos virtuales'),
(7, 2, 'Recursos digitales', 'ContenedorListados', 'Recursos digitales para educadores'),
(8, 2, 'Videoteca', 'ContenedorListados', 'Videoteca IDP'),
(9, 2, 'Otras ofertas', 'ContenedorListados', 'Otras ofertas formativas disponibles'),
(10, 2, 'Papelera', 'Papelera', NULL),
(11, 2, 'Bitácora', 'Bitacora', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
