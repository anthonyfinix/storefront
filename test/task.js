let chai = require("chai");
let server = require("../index");

//Assertion Style
chai.should();

chai.use(require("chai-http"));
chai.use(require("chai-json-schema"));

describe("Product API", () => {
  describe("GET /api/product", () => {
    it("It should GET all the products", (done) => {
      chai
        .request(server)
        .get("/api/product")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          done();
        });
    });
  });
});
