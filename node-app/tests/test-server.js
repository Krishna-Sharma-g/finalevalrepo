const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Reference to server.js

chai.use(chaiHttp);
const { expect } = chai;

describe('Server Tests', () => {
    it('should return Hello, Node.js! on GET /', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Hello, Node.js!');
                done();
            });
    });
});

