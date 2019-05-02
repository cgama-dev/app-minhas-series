FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY  package.json ./
RUN yarn

COPY . .

EXPOSE 5007

CMD [ "yarn", "start" ]
# docker build -t app-node . // Criar containner
# docker run --name server-web -p 4001:4001 -d  app-node // Rodar containenr
# docker rmi $(sudo docker images --filter "dangling=true" -q --no-trunc)
# docker-compose up -d --build
# export DOCKER_TLS_VERIFY="1"
#AWS
#  docker-machine create --driver amazonec2 aws01
#  docker-machine env aws01
# export DOCKER_HOST="tcp://52.23.248.100:2376"
# export DOCKER_CERT_PATH="/home/cgama/.docker/machine/machines/aws01"
# export DOCKER_MACHINE_NAME="aws01"
# # Run this command to configure your shell:
# # eval $(docker-machine env aws01)