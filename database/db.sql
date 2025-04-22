-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (arm64)
--
-- Host: 127.0.0.1    Database: trabalho01
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pilotos`
--

DROP TABLE IF EXISTS `pilotos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pilotos` (
  `idPiloto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) DEFAULT NULL,
  `idade` int DEFAULT NULL,
  `escuderia` varchar(45) DEFAULT NULL,
  `rating` float(5,2) DEFAULT NULL,
  `pontos` int DEFAULT NULL,
  `imagem` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPiloto`),
  UNIQUE KEY `idpilotos_UNIQUE` (`idPiloto`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pilotos`
--

LOCK TABLES `pilotos` WRITE;
/*!40000 ALTER TABLE `pilotos` DISABLE KEYS */;
INSERT INTO `pilotos` VALUES (1,'Lando Norris',25,'McLaren',91.25,65,'norris.avif'),(2,'Max Verstappen',27,'Red Bull Racing',98.75,61,'verstappen.avif'),(3,'Oscar Piastri',23,'McLaren',87.34,49,'piastri.avif'),(4,'George Russell',27,'Mercedes',89.61,45,'russell.avif'),(5,'Andrea Kimi Antonelli',18,'Mercedes',77.45,10,'antonelli.avif'),(6,'Charles Leclerc',27,'Ferrari',88.92,20,'leclerc.avif'),(7,'Alexander Albon',29,'Williams',82.66,18,'albon.avif'),(8,'Lewis Hamilton',40,'Ferrari',94.50,15,'hamilton.avif'),(9,'Esteban Ocon',29,'Haas',79.12,10,'ocon.avif'),(10,'Lance Stroll',26,'Aston Martin',76.48,10,'stroll.avif'),(11,'Nico Hülkenberg',37,'Kick Sauber',74.33,6,'hulkenberg.avif'),(12,'Oliver Bearman',20,'Haas',70.25,5,'bearman.avif'),(13,'Isack Hadjar',20,'Racing Bulls',68.77,4,'hadjar.avif'),(14,'Yuki Tsunoda',24,'Red Bull Racing',73.58,3,'tsunoda.avif'),(15,'Carlos Sainz',30,'Williams',86.17,1,'sainz.avif'),(16,'Pierre Gasly',29,'Alpine',81.90,0,'gasly.avif'),(17,'Fernando Alonso',43,'Aston Martin',90.44,1,'alonso.avif'),(28,'DANIEL PEREIRA LIMA',28,'McLaren',22.00,111,NULL),(31,'Daniel Lima',21,'Ferrari',100.00,150,NULL);
/*!40000 ALTER TABLE `pilotos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time`
--

DROP TABLE IF EXISTS `time`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time` (
  `idTime` int unsigned NOT NULL AUTO_INCREMENT,
  `idPiloto` int DEFAULT NULL,
  `idUsuario` int NOT NULL,
  PRIMARY KEY (`idTime`),
  KEY `idPiloto_idx` (`idPiloto`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `idPiloto` FOREIGN KEY (`idPiloto`) REFERENCES `pilotos` (`idPiloto`),
  CONSTRAINT `idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time`
--

LOCK TABLES `time` WRITE;
/*!40000 ALTER TABLE `time` DISABLE KEYS */;
INSERT INTO `time` VALUES (20,3,1),(21,8,1);
/*!40000 ALTER TABLE `time` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'meu time');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-22  4:56:13
