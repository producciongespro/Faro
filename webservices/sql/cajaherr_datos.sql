-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-02-2020 a las 16:13:41
-- Versión del servidor: 5.7.21
-- Versión de PHP: 7.1.16

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
(46530, 76279, 77996, 63361, 37530, 172119);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

DROP TABLE IF EXISTS `niveles`;
CREATE TABLE IF NOT EXISTS `niveles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nivel` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `niveles`
--

INSERT INTO `niveles` (`id`, `nivel`) VALUES
(1, 'Preescolar'),
(2, 'Primaria'),
(3, 'Secundaria');

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
  `anno` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `materia` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `img_educatico` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'url de img previo en educatico',
  `apoyos` tinyint(1) NOT NULL,
  `id_usuario` int(128) NOT NULL,
  `fecha_ingreso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `borrado` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `recursos`
--

INSERT INTO `recursos` (`id`, `nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `materia`, `img_educatico`, `apoyos`, `id_usuario`, `fecha_ingreso`, `borrado`) VALUES
(1, 'El círculo cromático actualizado desde PHP', 'Video de los colores primarios y secundarios/colores fr?os y c?lidos.', 2, 'Primero, Segundo, Tercero', 'https://www.youtube.com/watch?v=FN9ycBXKHDY', 'Artes Plásticas', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/conexiones2019-ee.jpg', 0, 2, '2020-02-04 19:17:26', 0),
(2, 'La identidad desde PHP', 'Video sobre la identidad en el descubrimiento de mis favoritos.', 2, 'Tercero', 'https://www.youtube.com/watch?v=-zMEPVRWvD0', 'Artes Plásticas', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Carretica.png', 0, 0, '2020-02-04 19:17:26', 0),
(3, 'Prueba de español 1', 'español ejemplo 1', 2, 'Primero, Segundo, Tercero', 'https://www.youtube.com/watch?v=FN9ycBXKHDY', 'Español', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/orientados.jpg', 0, 2, '2020-02-04 19:17:26', 0),
(4, 'Prueba de español 2', 'español para sexto', 2, 'Sexto', 'https://www.youtube.com/watch?v=FN9ycBXKHDY', 'Español', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/recursos-19.png', 0, 2, '2020-02-04 19:17:26', 0),
(5, 'Prueba de Biologia', 'biología noveno', 3, 'Noveno\r\n', 'https://www.youtube.com/watch?v=FN9ycBXKHDY', 'Biología', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/weatherwise.jpg', 0, 2, '2020-02-04 19:17:26', 0),
(6, 'Tercer recurso Plasticas\r\n', 'Video sobre la identidad en el descubrimiento de mis favoritos.', 2, 'Tercero', 'https://www.youtube.com/watch?v=-zMEPVRWvD0', 'Artes Plásticas', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Carretica.png', 0, 0, '2020-02-04 19:17:26', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
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
(12, 'luis.chacon.campos@gmail.com', 'pipito', 'pppppppppppppppppppp', 0, '2020-02-12 17:30:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
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
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `apellido1`, `apellido2`, `departamento`, `ultimoAcceso`, `token`, `token_password`, `password_request`, `tipoUsuario`, `activo`) VALUES
(97, 'oscar@correo.de', '$2y$10$HIfq9JX63uK/igxxsjlJKOMcYL3CZEOtGLDWz7YH8FzGQQSCzsuju', 'Oscar1', 'Pérez1', 'Ramírez1', 'GESPRO1', NULL, '8b6d28e1023747a88925a89213e52662', NULL, 0, 1, 1),
(99, 'oscar1.perez.ramirez@mep.go.cr', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Oscar', 'Pérez', 'Ramírez', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1),
(106, 'luis@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Luis', 'Chacón', 'Campos', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
