<h1>
<img src="https://cdn-icons-png.flaticon.com/512/8297/8297437.png" width="30" heigth="30" />
  Opin Fake API
</h1>



## Data usage

### policyId's

- `f762dcb3-5b5d-54ff-988f-93defd8dd01b`

- `e00dace0-104e-11ed-861d-0242ac120002`

- `071641e8-1050-11ed-861d-0242ac120002`

### cpf's

- `...`

- `...`

- `...`


### cnpj's

- `...`

- `...`

- `...`


## Mock Data

- All mock objects must be created in `mock-objects/` folder, following path and resources names patterns.
- All `.json` files will be tracked by express api as follows:

  - mock-objects/

  ```text
  mock-objects/
    |-- insurance-example/
      |-- claim.json
  ...

  ```

  - Will result in this api call:

  ```text
    GET => http://<hostname>/insurance-example/claim
  ```

## Build

## Production (v1)

- Do aws authentication process with:

```shell
$ aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 097353827472.dkr.ecr.us-east-1.amazonaws.com
```

- Use build command:

```shell
docker build -t 097353827472.dkr.ecr.us-east-1.amazonaws.com/opin-fake-api:latest .
```

- Push latest build created to your registry:

```shell
docker push 097353827472.dkr.ecr.us-east-1.amazonaws.com/opin-fake-api:latest
```

### Develop (v2)

- Is important to build your project to an production version. (Using these commands)

That will generate an `build/` folder in root of your project, and later will be used by the docker build process.

- Do aws authentication process with:

```shell
$ npm run aws:ecr:auth
```

- Use build command:

```shell
npm run aws:ecr:build
```

- Push latest build created to your registry:

```shell
npm run aws:ecr:push
```

- After that you can update your ECS Service & Task manually
