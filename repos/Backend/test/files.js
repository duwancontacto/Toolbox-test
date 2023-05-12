const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.should();
chai.use(chaiHttp);

describe("GET FILES", () => {
  //TEST GET ALL FILES PARSED
  describe("FILES PARSED", () => {
    it("It should return a list of all files parsed", (done) => {
      chai
        .request(server)
        .get("/files/data")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");

          response.body.forEach((file) => {
            file.file.should.be.a("string");
            file.file.should.not.equal("");

            file.lines.should.be.a("array");
            file.lines.should.not.equal([]);

            file.lines.forEach((line) => {
              line.should.be.a("object");

              line.text.should.be.a("string");
              line.text.should.not.equal("");

              line.number.should.be.a("number");
              line.number.should.not.equal(0);

              line.hex.should.be.a("string");
              line.hex.should.have.lengthOf(32);
            });
          });

          done();
        });
    });
  });

  //TEST GET ONE FILE
  describe("GET ONE FILE BY QUERY", () => {
    it("It should return a one file", (done) => {
      chai
        .request(server)
        .get("/files/data")
        .end((err, response) => {
          const testFile = response.body[0];

          chai
            .request(server)
            .get(`/files/data?fileName=${testFile.file}`)
            .end((err, response) => {
              response.body.should.have.lengthOf(1);
              response.body[0].file.should.equal(testFile.file);

              done();
            });
        });
    });
  });

  //TEST GET FILES LIST
  describe("GET LIST FILES", () => {
    it("It should return a list of all files", (done) => {
      chai
        .request(server)
        .get("/files/LIST")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.files.should.be.a("array");

          response.body.files.forEach((file) => {
            file.should.be.a("string");
          });

          done();
        });
    });
  });
});
