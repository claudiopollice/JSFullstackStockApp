# Backend

* Made with node v12 (latest LSTS), e.g. using es6 imports.

Make sure you are inside folder ```aapl-backend``` when executing the following commands.

### Build back end

```yarn install``` or ```npm install```

### Run back end directly on port 8081

```yarn start``` or ```npm start```

### Build back end docker image

```docker build -t <your-choice-for-backend-image-name>```

### Run backend inside docker container on port 8081

* in foreground
```docker run -p 8081:8081 <your-choice-for-backend-image-name>```

* in background
```docker run -p 8081:8081 -d <your-choice-for-backend-image-name>```

* see docker process / container id
```docker ps```

* kill container
```docker kill $(CONTAINER ID VALUE)```

### Run test in 2nd terminal, if app is already running (plain or in docker)

```yarn test``` or ```npm test```

### Verify deployed backend docker container on Google Cloud 

private info

See screenshot in aapl-backend/evidence-cloud-upload


### FYI

Yes has secret hardcoded because trivial secret and just supposed to be a test and secret management is not the point.

Not because good practice.