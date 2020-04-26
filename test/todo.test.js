const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3001');

//GET route tests
describe('GET /users', () => {
  it('should return a 200 response', (done) => {
    api.get('/users').set('Accept', 'application/json').expect(200, done);
  });
  it('should return an array', (done) => {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });
  it("should return an array of objects that have a field called 'list & uid' ", (done) => {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.forEach((user) => {
          expect(user).to.have.property('list');
          expect(user).to.have.property('uid');
        });
        done();
      });
  });
});

//POST route tests
describe('POST /users', () => {
  const newUser = {
    uid: 'qwerty',
    list: [],
  };
  //executes once before the describe block
  before((done) => {
    api
      .post('/users')
      .set('Accept', 'application/json')
      .send(newUser)
      .end(done);
  });

  it('Should add a new event to the collection and return it', (done) => {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end((err, res) => {
        const userToFind = res.body.find((user) => user.uid === newUser.uid);
        expect(userToFind).to.be.an('object');
        done();
      });
  });
});
