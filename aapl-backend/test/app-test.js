import chai from "chai";
import request from "request";

var expect = chai.expect

it('should return status code 200 containing data', function(done) {
    request('http://localhost:8081' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.contain('Meta Data');
        expect(body).to.contain('{\"1. Information\":\"Daily Prices (open, high, low, close) and Volumes\",\"2. Symbol\":\"AAPL\"');
        expect(body).to.contain('\"4. Output Size":\"Compact\",\"5. Time Zone\":\"US/Eastern\"}');
        expect(body).to.contain('Time Series (Daily)');
        done();
    });
});