# How to run this app
* You must have docker and docker-compose installed.  Those are the only requirements
* The first thing to do is from the root folder of the application type `make copyEnvFiles`
* Then from the root folder of the application type `make dockerUp`.  Once the is complete you can visit `localhost:3000` and see the web app or visit `localhost:4000/graphql` and see the graphql gui.


# How to run cypress tests
* Headless
  ** From the root folder of the application type `make dockerUpTests`
* Headful
  ** From the root folder of the application type `make dockerUp`
  ** From another console window in the root folder of the application type `make cypressOpen`