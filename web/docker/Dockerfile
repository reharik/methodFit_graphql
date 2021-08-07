FROM node:14.17

RUN apt-get update && apt-get install vim -y

ENV HOME /home/current
WORKDIR $HOME

COPY ./package.json ./package.json

RUN yarn

COPY ./tsconfig.json ./tsconfig.json
COPY ./.env ./.env
COPY ./babel.config.js ./babel.config.js
COPY ./.eslintrc.js ./.eslintrc.js
COPY ./jest.config.json ./jest.config.json
COPY ./codegen.yml ./codegen.yml
COPY ./app ./app

RUN mkdir /home/omg
RUN cp -R . ../omg
WORKDIR /home/omg