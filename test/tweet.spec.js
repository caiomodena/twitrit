require('dotenv').config();

const urlBase = process.env.URL_BASE

var should = require("should");
var request = require("request");
var chai = require("chai");

var expect = chai.expect;

describe("Recursos do tweet ", function () {
    it("Deve ser possível criar um tweet", function (done) {
        request.post(
            {
                url: urlBase + "/tweet"
            },
            function (error, response) {
                expect(response.statusCode).to.equal(201);
                done();
            }
        );
    });
});
