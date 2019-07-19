# twitrit
[![Build Status](https://travis-ci.org/matheusgonzagafs/twitrit.svg?branch=master)](https://travis-ci.org/matheusgonzagafs/twitrit)

O sistema cria, como MVP, um ecossistema que permita o envio de mensagens curtas de até 140 caracteres, sendo possível:

•	Seguir outras pessoas;

•	Buscar suas mensagens ou mensagens de outras pessoas;

•	Deletar suas próprias mensagens;

•	Responder mensagens suas ou de outras pessoas;

•	Buscar usuários;

•	Deletar seu usuário. 

Abaixo uma linha do tempo visualizando a utilização a partir de um usuário.
<img src="https://fttpiq.by.files.1drv.com/y4mpCKPmCJTYCEMoUTt12INkAOTqiwof0Oo8Gapa9KrLZKlV93LMjx_UpuHtnseH3dhfHMTYfFugWD34KOTc4gV9mbGM9p0SCJ7IV_OieD0NIUmBtLvk-JbNs8XLsxrpnEqPNtIy8RBim3TAJ4l2E5HvVni6t7KmynMXXaqDGECHyBHXOMD1F2WUxVB4Ty2-WJwl9IPNTfGtQ75mCf_879FvA?width=1024&height=191&cropmode=none" width="1024" height="191" />


Abaixo uma relação entre dois usuários utilizando Twitrit concomitantemente. 
<img src="https://ftvqqq.by.files.1drv.com/y4mcwJFDOL_Gtm3W8LWemKuztPuvFEWTnXC5dLpMeoo4vP8gT1WxU0lkqYOQg_Jc-yezZcDkjTnfpG2pYS1f_iAxD3ZgUzXekrzGUICTtubdMjTq1AsEc7YM_13w_FH0_SJksfu48JjmxoES06pMn0V6mNFEEDIe_tyQWy-56RwQcv597uaKlqN4_jcbIzRxvCkOJnZEt1VFddxmozUe0muRA?width=1024&height=519&cropmode=none" width="1024" height="519" />

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
- Jest
- Supertest

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


