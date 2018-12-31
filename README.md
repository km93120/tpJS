## Prerequisites
[Docker](https://docs.docker.com/install/#supported-platforms) and
[Node](https://nodejs.org/en/download/)

## Instructions to run project

`git clone https://github.com/km93120/tpJS.git`
`cd tpJS`
Considering package.json file will be copied in working directory and parsed in
order to install dependencies, you are not required to run these to make the
project up and running.

You should run these commands only if you wish an error-free xo report.
We tried to clean the project by deleting all node_modules and lock files

```
 cd Game && npm i && cd ..
 cd Fournisseur && npm i && cd ..
 cd Trackeur && npm i && cd ..
 cd Licornes && npm i && cd ..
 cd Vilains && npm i && cd ..
 cd Heros && npm i && cd ..
```
On Windows and Mac you have to launch your Docker Quickstart Terminal to start
the docker daemon.
- On Linux distributions you don't need to launch anything.

Run `docker-compose up --build` to build the images and run the project.

You can either use [Postman](https://www.getpostman.com/apps)
to launch the project :
`POST`=> `192.168.99.100:6666/start`

Or you can use [cURL](https://stackoverflow.com/questions/9507353) :
`curl -X POST 192.168.99.100:6666/start`



