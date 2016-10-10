var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello Jenkins!', function(done) {
<<<<<<< HEAD
    request(app).get('/').expect('hello Jenkins!, done);
=======
    request(app).get('/').expect('hello Jenkins!', done);
>>>>>>> 8cd79bda4579994beded1a9e020283fd307b0dba
  });
});
