FROM node:12.16.2

RUN apt-get update && apt-get -y install netcat && apt-get clean

WORKDIR /proxy-server

COPY . /proxy-server/

RUN yarn install && yarn cache clean