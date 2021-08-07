SHELL:=/bin/bash
.DEFAULT_GOAL := dev

.PHONY: deps

####LOCAL####

dockerUp:
	docker-compose -f docker/docker-compose.yml -p methodFitness up

dockerDown:
	docker-compose -f docker/docker-compose.yml -p methodFitness down --rmi local --remove-orphans

dockerUpTests: kill-postgres-test
	docker-compose -f docker/docker-compose-cypress.yml -p methodFitnessTests up

dockerDownTests:
	docker-compose -f docker/docker-compose-cypress.yml -p methodFitnessTests down --rmi local --remove-orphans

kill-postgres-test:
	- docker rm -v -f methodFitnessTests_postgres_1  || echo "No more containers to remove."


copyEnvFiles:
	cp ./api/.env.example ./api/.env; cp ./web/.env.example ./web/.env

cypressOpen:
	cd cypress; yarn cypressOpen

codeGen:
	cd ./api; yarn gen;
	cd ./web; yarn gen;

yarn:
	cd ./api; yarn;
	cd ./web; yarn;
####END LOCAL####
