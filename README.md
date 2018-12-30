##  xo works without problem of `import/no-unresolved`

Considering package.json file will be copied in working directory and parsed in
order to install dependencies, you are not required to run these to make the
project up and running.

You should run these commands only if you wish an error-free xo report.

1) cd tpjs
2) cd game && npm i && cd .. 
3) cd fournisseur && npm i && cd ..
4) cd trackeur && npm i && cd ..
5) cd licornes && npm i && cd ..
6) cd vilains && npm i && cd ..


##  Docker-compose

Run `docker-compose up --build` to build the images and  and run the project.


##  Postman

You can either use Postman to launch the project :
`POST`=> `192.168.99.100:6666/start`

Or you can use curl :
`curl -X POST 192.168.99.100:6666/start`



