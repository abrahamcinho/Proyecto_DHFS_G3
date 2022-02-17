-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-01-2022 a las 20:41:09
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sweetdreams`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flavors`
--

CREATE TABLE `flavors` (
  `flavor_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `flavors`
--

INSERT INTO `flavors` (`flavor_id`, `name`) VALUES
(1, 'Crema chantilly con fresas y dulce de leche con nuez'),
(2, 'Chocolate amargo y crema de frutos rojos'),
(3, 'Mouse de limon y chocolate con nuez'),
(4, 'Chocolate'),
(5, 'Red Velvet'),
(6, 'Caramelo'),
(7, 'Manzana'),
(8, 'Vainilla'),
(9, 'Neutro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flavors_products`
--

CREATE TABLE `flavors_products` (
  `flavor_prod_id` int(10) UNSIGNED NOT NULL,
  `prod_id` int(10) UNSIGNED NOT NULL,
  `flavor_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `flavors_products`
--

INSERT INTO `flavors_products` (`flavor_prod_id`, `prod_id`, `flavor_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 2, 2),
(6, 2, 3),
(7, 3, 1),
(8, 3, 2),
(9, 3, 3),
(10, 4, 4),
(11, 5, 5),
(12, 6, 6),
(13, 7, 7),
(14, 8, 8),
(15, 9, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `prod_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(20) NOT NULL,
  `discount` int(5) NOT NULL,
  `prod_categ_id` int(10) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL, 
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`prod_id`, `name`, `price`, `discount`, `prod_categ_id`, `image`, `description`) VALUES
(1, 'Sofía', 2400, 25, 1, '/public/images/torta-sofia.jpg', 'Torta Sofia'),
(2, 'Lucía', 2500, 1, 1, '/public/images/torta-lucia.jpg', 'Torta Lucia'),
(3, 'Emma', 2200, 13, 1, '/public/images/torta-emma.jpg', 'Torta Emma'),
(4, 'Chocolate', 1400, 31, 2, '/public/images/galleta-1.jpeg', 'Cupcake de Chocolate'),
(5, 'Red Velvet', 2500, 42, 2, '/public/images/galleta-2.jpeg', 'Cupcake Red Velvet'),
(6, 'Caramelo', 1200, 3, 2, '/public/images/galleta-3.jpeg', 'Cupcake de Caramelo'),
(7, 'Manzanita de hojaldre', 600, 18, 3, '/public/images/factura-1.png', 'Factura Fina - Manzanita de Hojaldre'),
(8, 'Palmerita', 500, 31, 3, '/public/images/factura-1.png', 'Factura Fina - Palmerita'),
(9, 'Caracola', 300, 39, 3, '/public/images/factura-1.png', 'Factura Fina - Caracola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_categories`
--

CREATE TABLE `products_categories` (
  `prod_categ_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products_categories`
--

INSERT INTO `products_categories` (`prod_categ_id`, `name`) VALUES
(1, 'Tortas'),
(2, 'Cupcakes'),
(3, 'Facturas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `size_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`size_id`, `name`) VALUES
(1, 'Individual'),
(2, 'Mediana'),
(3, 'Familiar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes_products`
--

CREATE TABLE `sizes_products` (
  `size_prod_id` int(10) UNSIGNED NOT NULL,
  `prod_id` int(10) NOT NULL,
  `size_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sizes_products`
--

INSERT INTO `sizes_products` (`size_prod_id`, `prod_id`, `size_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 2, 2),
(6, 2, 3),
(7, 3, 1),
(8, 3, 2),
(9, 3, 3),
(10, 4, 1),
(11, 5, 1),
(12, 6, 1),
(13, 7, 1),
(14, 8, 1),
(15, 9, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(250) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `users_categ_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `avatar`, `users_categ_id`) VALUES
(1, 'Abraham', 'Marval', 'abrahamcinho@gmail.com', '1234', '...', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_categories`
--

CREATE TABLE `users_categories` (
  `users_categ_id` int(255) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users_categories`
--

INSERT INTO `users_categories` (`users_categ_id`, `name`) VALUES
(1, 'usuario'),
(2, 'administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `flavors`
--
ALTER TABLE `flavors`
  ADD PRIMARY KEY (`flavor_id`);

--
-- Indices de la tabla `flavors_products`
--
ALTER TABLE `flavors_products`
  ADD PRIMARY KEY (`flavor_prod_id`),
  ADD KEY `flavors_products_prod_id` (`prod_id`) USING BTREE,
  ADD KEY `flavors_products_flavor_id` (`flavor_id`) USING BTREE;

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`prod_id`),
  ADD KEY `products_prod_categ_id_fk` (`prod_categ_id`) USING BTREE;

--
-- Indices de la tabla `products_categories`
--
ALTER TABLE `products_categories`
  ADD PRIMARY KEY (`prod_categ_id`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`size_id`);

--
-- Indices de la tabla `sizes_products`
--
ALTER TABLE `sizes_products`
  ADD PRIMARY KEY (`size_prod_id`),
  ADD KEY `sizes_products_prod_id` (`prod_id`) USING BTREE,
  ADD KEY `sizes_products_size_id` (`size_id`) USING BTREE;

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `users_user_categ_id_fk` (`users_categ_id`) USING BTREE;

--
-- Indices de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  ADD PRIMARY KEY (`users_categ_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `flavors`
--
ALTER TABLE `flavors`
  MODIFY `flavor_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `flavors_products`
--
ALTER TABLE `flavors_products`
  MODIFY `flavor_prod_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `prod_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `products_categories`
--
ALTER TABLE `products_categories`
  MODIFY `prod_categ_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `size_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sizes_products`
--
ALTER TABLE `sizes_products`
  MODIFY `size_prod_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  MODIFY `users_categ_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
