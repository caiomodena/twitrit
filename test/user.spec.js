require('dotenv').config();

const urlBase = process.env.URL_BASE

var should = require("should");
var request = require("request");
var chai = require("chai");

var expect = chai.expect;

describe("Recursos do usuario ", function () {
    it("Deve ser hello word teste", function (done) {
        request.get(
            {
                url: urlBase + "/hello-world"

            },
            function (error, response) {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.equal("Hello World")
                done();
            }
        );
    });
    it("Deve ser possível criar usuário", function (done) {
        request.post(
            {
                url: urlBase + "/user"

            },
            function (error, response) {
                expect(response.statusCode).to.equal(201);
                done();
            }
        );
    });
    it("Deve ser deletar um usuário", function (done) {

        done();
    });

});
