# DBMS_Project
For Running this project you need Node js and MySQL database in localsetup
###Steps :-
1) Clone the repo
2) install node_modules by running the npm i on main directory and also do this on client sub directory for client node_modules
3) if client node_modules not install properly then delete node-sass and loadder dependency from package.json of client
4) Paste your password and username of MySQL to .env file
5) If DB is not connected then you should switch to legacy auth for mysql which accepts plain text password
6) create tables by making get request to every route of routes/dbRoutes.js file
7) Use npm start on server dir and client dir
8) Enjoy
