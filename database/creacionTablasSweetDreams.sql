CREATE TABLE `sweetdreams`.`users` ( `user_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(100) NOT NULL , `last_name` VARCHAR(100) NOT NULL , `email` VARCHAR(100) NOT NULL , `password` VARCHAR(50) NOT NULL , `avatar` VARCHAR(255) NOT NULL , `user_categ_id` INT(10) UNSIGNED NOT NULL , PRIMARY KEY (`user_id`)) ENGINE = InnoDB; 

CREATE TABLE `sweetdreams`.`users_categories` ( `user_categ_id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , PRIMARY KEY (`user_categ_id`)) ENGINE = InnoDB; 

CREATE TABLE `sweetdreams`.`products` ( `prod_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `price` INT(20) NOT NULL , `discount` INT(5) NOT NULL , `prod_categ_id` INT(10) UNSIGNED NOT NULL , `flavor_id` INT(10) UNSIGNED NOT NULL , `size_id` INT(10) UNSIGNED NOT NULL , `image` VARCHAR(255) NOT NULL , PRIMARY KEY (`prod_id`)) ENGINE = InnoDB; 

CREATE TABLE `sweetdreams`.`products_categories` ( `prod_categ_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , PRIMARY KEY (`prod_categ_id`)) ENGINE = InnoDB; 

CREATE TABLE `sweetdreams`.`flavors` ( `flavor_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , PRIMARY KEY (`flavor_id`)) ENGINE = InnoDB; 

CREATE TABLE `sweetdreams`.`sizes` ( `size_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , PRIMARY KEY (`size_id`)) ENGINE = InnoDB; 

CREATE TABLE `sweetdreams`.`flavors_products` ( `flavor_prod_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT , `prod_id` INT(10) UNSIGNED NOT NULL , `flavor_id` INT(10) UNSIGNED NOT NULL , PRIMARY KEY (`flavor_prod_id`)) ENGINE = InnoDB; 

CREATE TABLE `sweetdreams`.`sizes_products` ( `size_prod_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT , `prod_id` INT(10) NOT NULL , `size_id` INT(10) NOT NULL , PRIMARY KEY (`size_prod_id`)) ENGINE = InnoDB; 

ALTER TABLE `users` ADD INDEX(`user_categ_id`);

ALTER TABLE `sweetdreams`.`users` DROP INDEX `user_categ_id`, ADD INDEX `users_user_categ_id_fk` (`user_categ_id`) USING BTREE; 

ALTER TABLE `products` ADD INDEX(`prod_categ_id`);

ALTER TABLE `sweetdreams`.`products` DROP INDEX `prod_categ_id`, ADD INDEX `products_prod_categ_id_fk` (`prod_categ_id`) USING BTREE; 

ALTER TABLE `products` ADD INDEX(`flavor_id`);

ALTER TABLE `sweetdreams`.`products` DROP INDEX `flavor_id`, ADD INDEX `products_flavors_id` (`flavor_id`) USING BTREE; 

ALTER TABLE `products` ADD INDEX(`size_id`);

ALTER TABLE `sweetdreams`.`products` DROP INDEX `size_id`, ADD INDEX `products_sizes_id` (`size_id`) USING BTREE; 

ALTER TABLE `sizes_products` ADD INDEX(`prod_id`);

ALTER TABLE `sweetdreams`.`sizes_products` DROP INDEX `prod_id`, ADD INDEX `sizes_products_prod_id` (`prod_id`) USING BTREE; 

ALTER TABLE `sizes_products` ADD INDEX(`size_id`);

ALTER TABLE `sweetdreams`.`sizes_products` DROP INDEX `size_id`, ADD INDEX `sizes_products_size_id` (`size_id`) USING BTREE; 

ALTER TABLE `flavors_products` ADD INDEX(`prod_id`);

ALTER TABLE `sweetdreams`.`flavors_products` DROP INDEX `prod_id`, ADD INDEX `flavors_products_prod_id` (`prod_id`) USING BTREE; 

ALTER TABLE `flavors_products` ADD INDEX(`flavor_id`);

ALTER TABLE `sweetdreams`.`flavors_products` DROP INDEX `flavor_id`, ADD INDEX `flavors_products_flavor_id` (`flavor_id`) USING BTREE;