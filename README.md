# Bootcamp documentation
## Installation

### Locally with docker
`docker-compose build`

`docker-compose up`

Wait to see the message:
```
Compiled successfully!
react-ui    |
react-ui    | You can now view app in the browser.
react-ui    |
react-ui    |   Local:            http://localhost:3000
react-ui    |   On Your Network:  http://172.18.0.2:3000
```

Go on the url: http://localhost:3000

To add new npm packages on the project, you will have to stop the server and relaunch `docker-compose build`.

### Locally with npm

You need to have `npm` version `9.3` and `nodejs` version `18`

Go in the directory `app`.

Launch `npm install` and `npm start`

Go on the url: http://localhost:3000

### Server installation

#### Prerequires for the image

You need to have `npm` version `9.3` and `nodejs` version `18`

Go in the directory `app`.

Launch `npm run build`

Log to the Azure repositories for the bootcamp:

`docker login bootcampv2.azurecr.io`

Build the image:

`docker build . -t bootcampv2.azurecr.io/bootcamp-doc:<version>`

Push the image:
`docker push bootcampv2.azurecr.io/bootcamp-doc:<version>`

#### Add the project on Azure

Add a Container Instance. Choose `Azure Container Registry` for source. Choose the register, the image name and the version you want.

For the port, replace the port `80` by the port `8080`.

After starting the container instance, to see the documentation, go on the IP with the port `8080`.
