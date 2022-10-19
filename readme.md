docker run --name miotrabd -p 7777:3306 -e MYSQL_ROOT_PASSWORD=123  mysql

dokcer run --name mymongo -p 27017:27017 mongo

new project
npm init -y

me crea una imagen:  docker  build -t name .
despues run image: docker run --name serve1 -p 5000:3000 nodetwich

 docker run --name serve2 -p 5001:3000 nodetwich >>>> 5000 port out


para ingresar al contenedor
docker exec -it nameimage bash

dokcer-compose

docker-compose up