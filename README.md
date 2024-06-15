# TextAnalyzer
This repository contains a coding task of a text analyzer. The application contains a Java Spring Boot backend and an Angular frontend. The application is used to analyze the letters of a string.


## Backend

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

## Frontend
The frontend of the text analyzer application is an angular application. To build a docker image of the component, run the following command in the /fronent/text-analyzer-angular/ folder:
```console
docker build -t text-analyzer-angular-image .
```

To run the built docker image seperately run:
```console
docker run --name text-analyzer-frontend-container -p 4201:4200 text-analyzer-angular-image
```


## Docker Compose
