-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 03, 2020 at 01:33 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

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
-- Table structure for table `poblaciones_idp`
--

DROP TABLE IF EXISTS `poblaciones_idp`;
CREATE TABLE IF NOT EXISTS `poblaciones_idp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) NOT NULL,
  `observaciones` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `poblaciones_idp`
--

INSERT INTO `poblaciones_idp` (`id`, `nombre`, `observaciones`) VALUES
(1, 'Personal docente y técnico-docente del sistema educativo nacional', NULL),
(2, 'Personal docente y administrativo del MEP', NULL),
(3, 'Personal docente y Asesores pedagógicos del MEP', NULL),
(4, 'Personal docente del MEP', NULL),
(5, 'Técnico-docente del sistema educativo nacional', NULL),
(6, 'Personal administrativo del MEP', NULL),
(7, 'Asesores pedagógicos del MEP', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
