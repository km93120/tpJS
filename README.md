## Prerequisites
[Docker](https://docs.docker.com/install/#supported-platforms)
[Node](https://nodejs.org/en/download/)

##  xo works without problem of `import/no-unresolved`

Considering package.json file will be copied in working directory and parsed in
order to install dependencies, you are not required to run these to make the
project up and running.

You should run these commands only if you wish an error-free xo report.
We tried to clean the project by deleting all node_modules and lock files

```
 cd tpjs
 cd game && npm i && cd ..
 cd fournisseur && npm i && cd ..
 cd trackeur && npm i && cd ..
 cd licornes && npm i && cd ..
 cd vilains && npm i && cd ..
```


##  Docker-compose

Run `docker-compose up --build` to build the images and run the project.


##  Postman

You can either use [Postman](https://www.getpostman.com/apps)
to launch the project :
`POST`=> `192.168.99.100:6666/start`

Or you can use [cURL](https://stackoverflow.com/questions/9507353/how-do-i-install-and-use-curl-on-windows) :
`curl -X POST 192.168.99.100:6666/start`



