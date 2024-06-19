# TextAnalyzer
This repository contains a coding task of a text analyzer. The application contains a Java Spring Boot backend and an Angular frontend. The application is used to analyze the occurrences of letters in a string.


## Start
The easiest way to start the application is via the docker compose file. It pulls the backend and frontend images of my docker hub repositories so it does not have to be built locally. Run the following command:

```console
docker compose up
```

Now the [backend](http://localhost:8080) and [frontend](http://localhost:4200) are accessible.



## Build Locally
To build the images locally follow the instructions below.

### Backend

To build the backend run the following command at the root of the project:

```console
mvn package
```

After the project is build, the next step is to build the docker image:
```console
docker build -t text-analyzer-image .
```

To run the built docker image seperately run:
```console
docker run --name text-analyzer-backend-container -p 8080:8080 text-analyzer-image
```

### Frontend
The frontend of the text analyzer application is an angular application. To build a docker image of the component, run the following command in the /fronent/text-analyzer-angular/ folder:
```console
docker build -t text-analyzer-angular-image .
```

To run the built docker image seperately run:
```console
docker run --name text-analyzer-frontend-container -p 4201:4200 text-analyzer-angular-image
```

### Notes
If you want to use the locally build images, you need to change these in the docker compose file.
