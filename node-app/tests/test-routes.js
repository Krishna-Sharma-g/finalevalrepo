const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Reference to server.js

chai.use(chaiHttp);
const { expect } = chai;

describe('API Route Tests', () => {
    it('should return 404 for an unknown route', (done) => {
        chai.request(server)
            .get('/unknown')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                done();
            });
    });
});

