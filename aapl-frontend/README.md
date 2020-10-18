# Frontend

### Specs

* On loading, data shows text ```...loading```
* On fetch (API call) error, shows text ```An unexpected error occurred. Please reload this page at a later time.```
* On load, renders StockChard component with AAPL data.
* Set which backend with variable inside src/Components/StockChart.tsx ```const runAgainstLocal```. If true, requires local backend running on port 8081 for happy flow. If false, will run against cloud backend. This code is not present in deployed docker container, but left here for ease of testing.

## Build and run

Make sure you are inside folder ```aapl-frontend``` when executing the following commands.

### Build front end

```yarn install``` or ```npm install```

### Run front end directly on port 3000 (currently points to backend in the cloud)

```yarn start``` or ```npm start```

### Build front end docker image

```docker build -t <your-choice-for-frontend-image-name>```

### Run backend inside docker container on port 8081

* in foreground (note the -it necessary for dockerized react, reason = https://github.com/facebook/create-react-app/issues/8688)
```docker run -it -p 8081:8081 <your-choice-for-backend-image-name>```

* in background (note the -it necessary for dockerized react, reason = https://github.com/facebook/create-react-app/issues/8688)
```docker run -it -p 8081:8081 -p <your-choice-for-backend-image-name>```

### Run tests

```npm test``` or ```yarn test```

### Deployed front end docker image on Google Cloud

private info

### Unsolved problems

Most functionality is here. However, due to be new to this stack, I did not manage 2 things :

* mock/intercept React fetch call to add unit tests for happpy & unhappy responses, currently only unit tested ...loading state
* front end docker image keeps dying on Google Cloud. Google Cloud does spin off a new image immediately but at a new IP.
