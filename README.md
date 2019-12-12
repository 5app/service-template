
*IMPORTANT*
- this is a base image to help you get started fast, but it should by no means limit your creativitity. Feel free to change any part of it and contribute back to this project if you think it can help others.
- replace all occurences of `myservice` in the project with the name of you project
- Check all the `TODO` lines and edit/remove/add code accordingly
- Remove this block once you are done 

# myservice

[![Greenkeeper badge](https://badges.greenkeeper.io/5app/service-template.svg)](https://greenkeeper.io/)

> TODO: Add a very short description of the microservice 

## Introduction

TODO: Describe what the service does with more details.

It works as follows:
- It listens to requests coming through [bull](https://github.com/OptimalBits/bull)'s queue `myservice-requests`.
- It processes the request
- It adds a job to the `myservice-results` queue to let other services (e.g. `api`) know that the operation finished and share its result.


## API

TODO: describe the api of the services including any endpoint or any messages (received or generated). 

## Integration tests

### Running the tests

To run the integration tests, you need:
- [Docker compose](https://docs.docker.com/compose/install/)
- To be in the integration tests directory. Use `cd <project directory>/test/integration`

Now you can launch the tests using the command
```sh
docker-compose up
```

### Updating node_modules

As node_modules are part of the container image, you will need to recreate the `tests` image if you want to update your dependencies.

To do that, please run the following commands:
```sh
docker-compose down
docker-compose build
docker-compose up
```
