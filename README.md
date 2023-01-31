# Projet_BackEnd
## **Description du projet**

Pour le projet on a décidé de se mettre a deux, Matisse(matissemchd) et Gauthier (gottax). Le but étant de trouver une idée d'**API RESTFULL**. L'objectif nous permet de découvrir et travailler en utilisant diverses technologiques comme **Sequelize**, **NPM** ou bien **JWT**.

## Outils **utilisées**

Trois principaux outils que nous avons utilisés :

- **NodeJS**, avec utilisation de **ExpressJS** ;
- **Sequelize**, qui est un **ORM** nous permettant de "mapper" les classes métier avec les tables en **JavaScript**. Grâce à ce système, nous pourront évidemment nous connecter à ces bases de données ;
- **NPM** pour l'installation de ces packages, etc.
- **JWT** *(**J**son **W**eb **T**oken)*, pour un système de preuve *(d'authentification)* sécurisé avec les normes récentes ;

## **Notre idée :**

Enfin, notre projet portera sur le thème des jeux videos, et grace aux différentes utilisations de L’api pour que les Utilisateurs (users) puissent envoyer des posts (post) de leurs jeux ou de ce qui leur plaît (mise à jours, nouveautés, problèmes, ..) qu’on puissent réagir aux propos de chacun avec des (comments) le tout sur des jeux videos. 

---

 **Comment installer le projet**

## **Installation de NodeJS**

**Pour Windows / Mac:** Téléchargez **[NodeJS](https://nodejs.org/en/)** depuis l'installeur. Pour ce projet la version **18.13.0 LTS** est utilisée.**Pour Linux:** Installez NodeJS via les commandes suivantes:

`curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs`

## **Récupération du projet GitHub**

Récupérez ensuite le projet via **GitHub**. Soit, par téléchargement depuis le site, ou bien en réalisant la commande **git clone**, comme ceci:

`git clone https://github.com/Whiletruend/NodeJS_Project_BIN2.git`

## **Avant l'utilisation du projet**

Avant l'utilisation, vous devez disposer d'une **BDD**, le système de gestion de BDD utilisé lors du projet est **MySQL**.Cela est possible grâce à **[XAMPP](https://www.apachefriends.org/fr/index.html)** voir **[MAMP](https://www.apachefriends.org/fr/index.html)** .Si vous disposez de cela, le fichier `nodejs_api.sql` disponible dans le dossier `server/` vous permettra de créer la base de données, les tables ainsi que les insertions nécessaires à l'utilisation de l'API.Quant au fichier `server.http` disponible au même dossier *(`server/`)*, il vous permettra d'effectuer les requêtes en utilisant les méthodes `GET`, `POST`, `PUT` et `DELETE`.

> Il est possible de changer les informations de connexion à la base de données, cela se fera directement dans le fichier database.js disponible au chemin suivant server/models/.Les lignes qui devront être changées sont celles-ci:
> 
> 
> `const db_host = "localhost"; // Default: localhost (127.0.0.1)
> const db_user = "root"; // Default: root
> const db_pass = ""; // Default: N/A
> const db_port = "3306"; // Default: 3306
> const db_name = "nodejs_api"; // Can be changed`
> 
> Comme visible, les commentaires de chaque ligne vous indiquent quelle était la valeur initiale, celle par défaut.
> 

##
