CREATE TABLE `ContactMessage` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `email` varchar(255),
  `message` text,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP
); 