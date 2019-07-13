FROM alpine

RUN apk add --update nodejs nodejs-npm

COPY ./ /app/src

WORKDIR app/src

RUN npm install-test
