/*
Navicat MySQL Data Transfer

Source Server         : link
Source Server Version : 50553
Source Host           : 127.0.0.1:3306
Source Database       : z_test1

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-06-16 18:21:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for stu
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL DEFAULT '0',
  `sex` varchar(255) DEFAULT 'f',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu
-- ----------------------------
INSERT INTO `stu` VALUES ('1', '涛涛', '20', 'f');
INSERT INTO `stu` VALUES ('2', '鹏鹏', '16', 'm');
INSERT INTO `stu` VALUES ('3', '俊俊', '3', 'f');
INSERT INTO `stu` VALUES ('4', '大春哥', '30', 'm');
INSERT INTO `stu` VALUES ('5', '张无忌', '600', 'm');
INSERT INTO `stu` VALUES ('9', '周芷若', '18', 'f');
INSERT INTO `stu` VALUES ('7', '张三丰', '800', 'm');
INSERT INTO `stu` VALUES ('8', '灭绝大哥', '900', 'f');
