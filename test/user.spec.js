should = require("should");
require('dotenv').config();

var request = require("request");
var chai = require("chai");
var expect = chai.expect;

var urlBase = process.env.URL_BASE

describe("Recursos do usuario ", function () {
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
});
