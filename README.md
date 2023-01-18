opin-fake-api

### Valid token to use

policyId

f762dcb3-5b5d-54ff-988f-93defd8dd01b

e00dace0-104e-11ed-861d-0242ac120002

071641e8-1050-11ed-861d-0242ac120002
teste teste

## Como buildar a imagem

- aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 097353827472.dkr.ecr.us-east-1.amazonaws.com

- docker build -t 097353827472.dkr.ecr.us-east-1.amazonaws.com/opin-fake-api:latest .
- docker push 097353827472.dkr.ecr.us-east-1.amazonaws.com/opin-fake-api:latest
