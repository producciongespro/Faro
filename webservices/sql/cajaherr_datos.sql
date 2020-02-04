-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-02-2020 a las 19:21:06
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
-- Estructura de tabla para la tabla `estadisticas`
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
-- Volcado de datos para la tabla `estadisticas`
--

INSERT INTO `estadisticas` (`clim`, `eval`, `recu`, `docu`, `prof`, `plan`) VALUES
(11836, 13568, 15336, 11699, 8567, 22607);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

DROP TABLE IF EXISTS `niveles`;
CREATE TABLE IF NOT EXISTS `niveles` (
  `id` int(11) NOT NULL,
  `nivel` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `niveles`
--

INSERT INTO `niveles` (`id`, `nivel`) VALUES
(0, 'prescolar'),
(1, 'primaria'),
(2, 'secundaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `poblaciones`
--

DROP TABLE IF EXISTS `poblaciones`;
CREATE TABLE IF NOT EXISTS `poblaciones` (
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
-- Estructura de tabla para la tabla `recursos`
--

DROP TABLE IF EXISTS `recursos`;
CREATE TABLE IF NOT EXISTS `recursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `id_nivel` int(11) NOT NULL,
  `anno` int(11) NOT NULL,
  `url` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `ciclo` int(128) NOT NULL,
  `materia` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `apoyos` int(2) NOT NULL,
  `id_poblacion` int(64) NOT NULL,
  `plan` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `id_usuario` int(128) NOT NULL,
  `fecha_ingreso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `recursos`
--

INSERT INTO `recursos` (`id`, `nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `ciclo`, `materia`, `apoyos`, `id_poblacion`, `plan`, `id_usuario`, `fecha_ingreso`) VALUES
(1, 'El círculo cromático desde PHP', 'Video de los colores primarios y secundarios/colores fríos y cálidos.', 1, 0, 'https://www.youtube.com/watch?v=FN9ycBXKHDY', 1, 'Artes Plásticas', 0, 1, '', 0, '2020-02-04 19:17:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario',
  `usuario` varchar(30) NOT NULL COMMENT 'nombre de usuario creado por el aprendiz',
  `claveEncriptada` varchar(130) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido1` varchar(128) NOT NULL,
  `apellido2` varchar(128) NOT NULL,
  `pais` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `provincia` varchar(256) NOT NULL COMMENT 'Provincia cuando el registrado sea de Costa Rica',
  `centroEducativo` varchar(255) DEFAULT NULL,
  `fechaNacimiento` varchar(256) NOT NULL,
  `sexo` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `formacion` tinyint(1) DEFAULT '0',
  `clases` tinyint(1) DEFAULT '0',
  `tieneCorreo` tinyint(1) DEFAULT '0',
  `notificaciones` tinyint(1) DEFAULT '0',
  `correo` varchar(80) DEFAULT NULL,
  `ultimoAcceso` datetime DEFAULT NULL,
  `token` varchar(256) NOT NULL,
  `token_password` varchar(100) DEFAULT NULL,
  `password_request` int(11) DEFAULT '0',
  `tipoUsuario` int(11) DEFAULT NULL,
  `saldo` int(11) DEFAULT '0' COMMENT 'Saldo para adquirir nuevas canciones',
  `avatar` varchar(64) DEFAULT 'generico' COMMENT 'id del avatar del perfil',
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `usuario`, `claveEncriptada`, `nombre`, `apellido1`, `apellido2`, `pais`, `provincia`, `centroEducativo`, `fechaNacimiento`, `sexo`, `formacion`, `clases`, `tieneCorreo`, `notificaciones`, `correo`, `ultimoAcceso`, `token`, `token_password`, `password_request`, `tipoUsuario`, `saldo`, `avatar`, `activo`) VALUES
(96, 'juanito', '$2y$10$a7yxZNpQEMFcbwVWUvrQ6OaC5tz7TrWUPcy0rWhD4YVonD7EAXYX.', 'juanito canción', 'Tórres', 'Moreno ügeño', 'Costa Rica', 'San José', NULL, '2019-09-04', 'M', 0, 0, 0, 0, NULL, NULL, '75be2e1a6d611ac2c69779456d52695b', NULL, 0, 4, 0, 'generico', 1),
(97, 'pepito', '$2y$10$HIfq9JX63uK/igxxsjlJKOMcYL3CZEOtGLDWz7YH8FzGQQSCzsuju', 'Pepe', 'Tórres', 'Moreno ügeño', 'Costa Rica', 'San José', 'Alberto Paniagua Chavarría', '2019-09-04', 'M', 1, 1, 1, 1, 'pepito@correo.de', NULL, '8b6d28e1023747a88925a89213e52662', NULL, 0, 4, 0, 'a2', 1),
(99, 'arkos', '$2y$10$FbhdD3i/0D3f.1cNS6xtk.R2gmyac0cePxCB0NidwqQgqrHYbO6y2', 'Oscar', 'Pérez', 'Ramírez', 'Costa Rica', '1', NULL, '2015-07-11', 'M', 0, 0, 0, 0, NULL, NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 4, 0, 'generico', 1),
(103, 'pepe', '$2y$10$wyLaP5HHaGoWgn8b7qyV8eekxWHeKKwrS0OxjxfSFQCm60Y/jiwZ2', 'sdfg', 'sdfg', 'sdfg', 'Costa Rica', '1', NULL, '2019-09-06', 'M', 0, 0, 0, 0, NULL, NULL, '3ee98b18454a59be2a839b8269c9bb2f', NULL, 0, 4, 0, 'generico', 1),
(105, 'paty', '$2y$10$HIw5VbhRslFR7tnR3UbWLORYMYNa8Bz/f4g3vDySddZ41raOXQjJ6', 'Patricia', 'Hernández', 'Conejo', 'Costa Rica', '3', NULL, '1999-09-05', 'F', 0, 0, 0, 0, NULL, NULL, 'ebfdda079203f1b5c760a61ad9bae25e', NULL, 0, 4, 0, 'generico', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
