SET NAMES utf8;
DROP DATABASE IF EXISTS tmall;
CREATE DATABASE tmall CHARSET=utf8;
USE tmall;
/*用户信息*/
CREATE TABLE tmall_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR (32),
    upwd VARCHAR (32),
    email VARCHAR (64),
    phone VARCHAR (16),
    avatar VARCHAR (128),#头像图片路径
    user_name VARCHAR (32),#用户名，如张三
    gender INT #性别0-女 1-男
);
INSERT INTO tmall_user VALUES (NULL, 'xwn', '123456', 'xiaowoniu@163.com', '18546665825', NULL, '蜗牛', '0');
INSERT INTO tmall_user VALUES (NULL, '小黄毛', '123456', 'xiaowoniu@163.com', '18546665825', NULL, '蜗牛', '0');
