-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-04-2020 a las 18:37:05
-- Versión del servidor: 5.7.21
-- Versión de PHP: 5.6.35

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
-- Estructura de tabla para la tabla `bitacora`
--

DROP TABLE IF EXISTS `bitacora`;
CREATE TABLE IF NOT EXISTS `bitacora` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del evento o acción realizada',
  `id_usuario` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Usuario que realiza el evento',
  `evento` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Acción realizada',
  `fecha_evento` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha en que sucede el evento',
  `id_registro` int(11) NOT NULL COMMENT 'Identificador el ingreso modificado',
  `id_tabla` int(28) NOT NULL COMMENT 'Nombre de la tabla a la que pertenece el registro afectado',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Tabla para documentar eventos de los usuarios en el sistema';

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`id`, `id_usuario`, `evento`, `fecha_evento`, `id_registro`, `id_tabla`) VALUES
(1, '106', 'Agregar', '2020-03-10 15:34:16', 1, 1),
(2, '106', 'Agregar', '2020-03-17 13:33:49', 22, 1),
(3, '106', 'Agregar', '2020-03-17 17:39:28', 23, 1),
(4, '', 'Agregar', '2020-03-18 18:45:51', 24, 1),
(5, '106', 'Agregar', '2020-03-18 18:45:51', 25, 1),
(6, '', 'Edita', '2020-03-18 23:37:50', 0, 1),
(7, '106', 'Edita', '2020-03-18 23:37:50', 18, 1),
(8, '', 'Elimina', '2020-03-18 23:39:51', 0, 1),
(9, '106', 'Elimina', '2020-03-18 23:39:51', 19, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
