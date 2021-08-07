FROM node:14.17

RUN apt-get update && apt-get install vim -y

ENV HOME /home/current
RUN mkdir -p $HOME
WORKDIR $HOME

# copy only the package installation files to make docker
# builds more efficient by not re-installing packages on every build
# unless a package requirement has changed
COPY ./package.json ./package.json

# as node_modules from host are excluded, run yarn to import dependencies
RUN yarn

# copy the rest of the application, this includes nodemon for local development
# tsconfig, .eslintrc, .env and the entire app folder.  The single files
# all need to be in the root, hence the individual copy
COPY ./nodemon.json ./nodemon.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./codegen.yml ./codegen.yml
COPY ./.env /.env

COPY ./app ./app