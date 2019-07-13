# twitrit

O sistema cria, como MVP, um ecossistema que permita o envio de mensagens curtas de até 140 caracteres, sendo possível:

•	Seguir outras pessoas;

•	Buscar suas mensagens ou mensagens de outras pessoas;

•	Deletar suas próprias mensagens;

•	Responder mensagens suas ou de outras pessoas;

•	Buscar usuários;

•	Deletar seu usuário. 

A API é dividida conforme abaixo:

### Tweet

POST /tweet 

DEL /tweet/:id

GET /tweet?page=&size=userId

GET /tweet/:id

GET /tweet/:id/replies?page=&size=userId=

PUT /tweet/:id/reply


### User

POST /user

DEL /user/:id

GET /user?page=&size=

GET /user/:id

GET /user/:id/tweets?page=&size=

PUT /user/:id

### MVP

Teste
- Mocha
- Chai
- should

Database
- Mongo

Monitoramento
- Uptime Robot

Programação
- Javascript / Typescript

Versionamento
- Git (GitHub)

CI / Deploy
- Travis

Infra
- Docker
- Heroku
- MongoDB Atlas


### Pós MVP

Monitoramento
- Prometheus
- Grafana

UI
- Webapp em React
- Mobile App

Infra
- Aws ECS

...


