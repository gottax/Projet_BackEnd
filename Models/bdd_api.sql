CREATE DATABASE bdd_api;
USE bdd_api;

CREATE TABLE Users (
  id INT PRIMARY KEY,
  email varchar(50) NOT NULL UNIQUE,
  passwords varchar(50) NOT NULL,
  username  varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL);

insert into Users (id,username,lastname,passwords,email)
values (1,'matisse','marchand','Todi2121','matisse.marchand@mail.fr'),
(2,'gauthier','tostain','loulou76','Gtostain@bla.fr'),
(3,'antoine','dupont','Antaille18','dupont.antoine@vip.com'),
(4,'tonton','gibz','hotho101','pofhs@hotmail.fr'),
(5,'marie','dupres','dmuaprei20','mariedupres@yahoo.fr'),
(6,'selena','marcia','Selou80','s.marcia@gmail.com'),
(7,'Jim','Morrison','Jimidu06','Morrison@gmail.com'),
(8,"johndoe", "Doe", "password123","johndoe@example.com"),
(9,"janesmith", "Smith","mysecretpassword","janesmith@example.com"),
(10,"lukeparker", "Parker","letmein","lukeparker@example.com"),
(11,"emmamiller", "Miller","password456","emmamiller@example.com"),
(12,"chriswilson", "Wilson","sCHE123","chriswilson@example.com");


CREATE TABLE Games (
  id INT PRIMARY KEY,
  game_name VARCHAR(255) NOT NULL,
  release_date DATE NOT NULL,
  platform_ENUM varchar(50) NOT NULL,
  genre_ENUM varchar(50) NOT NULL
);

insert into Games (id, game_name, release_date, platform_ENUM, genre_ENUM)
values (1,"FIFA 21", "2020-10-09", "PC", "Sports"),
  (2,"Red Dead Redemption 2", "2018-10-26", "PlayStation", "Adventure"),
  (3,"The Legend of Zelda: Breath of the Wild", "2017-03-03", "Nintendo", "Action"),
  (4,"Grand Theft Auto V", "2013-09-17", "Xbox", "Adventure"),
  (5,"The Witcher 3: Wild Hunt", "2015-05-19", "PC", "RPG"),
  (6,"Minecraft", "2011-11-18", "Nintendo", "Adventure"),
  (7,"Doom Eternal", "2020-03-20", "PlayStation", "Action");

CREATE TABLE Posts (
  id INT PRIMARY KEY,
  user_name varchar(15),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  game_id INT,
  user_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO Posts (user_name, id, title, content, game_id, user_id) 
VALUES ("Golly", 1,"My experience playing FIFA 21", "I've been playing FIFA 21 for a few weeks now and I'm really enjoying it. The graphics are great and the gameplay is smooth. Highly recommended!", 1, 2),
  ("bibo", 2,"Why Red Dead Redemption 2 is a masterpiece", "Red Dead Redemption 2 is not just a video game, it's a work of art. The story, the characters, the world, everything is masterfully crafted. A must-play for any gamer.", 2, 3),
  ("elio99", 3,"The Legend of Zelda: Breath of the Wild - A true masterpiece", "Breath of the Wild is the best Zelda game I've ever played. The open-world is breathtaking and the gameplay is extremely fun and engaging. A must-have for any Nintendo Switch owner.", 3, 4),
  ("biloute", 4,"Why Grand Theft Auto V is still relevant", "Even though it's been out for a while now, Grand Theft Auto V is still a fantastic game. The online multiplayer is still alive and kicking, and the single player campaign is still a blast to play.", 4, 5),
  ("haiser", 5,"The Witcher 3: Wild Hunt - A game that every RPG fan should play", "The Witcher 3 is one of the best RPG's I've ever played. The world is huge, the characters are memorable, and the story is fantastic. A must-play for any RPG fan.", 5, 1),
  ("sorah", 6,"My first impressions of Minecraft", "I just started playing Minecraft and I'm already hooked. The building aspect is extremely fun and I can't wait to see what kind of creations I'll come up with.", 6, 6),
  ("phil", 7,"Why Doom Eternal is a must-play for fans of fast-paced action", "Doom Eternal is a non-stop action game that never gets old. The gameplay is extremely fast-paced and the graphics are top-notch. A must-play for any fan of fast-paced action games.", 7, 7);


CREATE TABLE Comments (
  id INT PRIMARY KEY,
  names text not null,
  content TEXT NOT NULL,
  post_id INT,
  user_id INT,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO Comments (content, post_id, user_id) 
VALUES("Fifa 21", 1,"I totally agree with you about FIFA 21, the graphics are really impressive.", 1, 3),
  ("Fifa 21", 2,"I disagree, I think FIFA 21 is overrated and the gameplay is not smooth.", 1, 4),
  ("Red Dead Redemption 2", 3,"Red Dead Redemption 2 is one of the best games ever made. The story is fantastic.", 2, 5),
  ("Red Dead Redemption 2", 4,"I totally agree, I spent hundreds of hours playing Red Dead Redemption 2 and it was worth every minute.", 2, 6),
  ("Breath of the Wild", 5,"Breath of the Wild is a true masterpiece, the open-world is just so beautiful.", 3, 7),
  ("Breath of the Wild", 6,"I agree, the open-world is really beautiful, but the gameplay can be repetitive.", 3, 8),
  ("GTA V", 7,"GTA V is still a great game and the online multiplayer is a lot of fun.", 4, 1);
