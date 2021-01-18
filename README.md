#### Installer les modules

- $ npm install dotenv express pg ejs

#### Créer `.env` à partir d' `.env_example`

- $ touch .env

#### Connecter la base de données

- $ psql -U nomDeLutilisateur -d nomDeLaBase
- CREATE ROLE nomDuLutilisateur WITH LOGIN PASSWORD 'password';
- CREATE DATABASE nomDeLaBase OWNER nomDuLutilisateur;

##### dans un autre terminal

- $ psql -U nomDeLutilisateur -d nomDeLaBase
- $ psql -U nomDeLutilisateur -d nomDeLaBase -f chemin/du/fichier.sql