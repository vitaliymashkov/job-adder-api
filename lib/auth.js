let request = require('request');
let qs = require('querystring');
let openapi = require('../jobadder-openapi-v2');
class AuthApi {
  constructor(config) {
    this.config = config;
  }

  exchangeCode(code, cb) {
    let data = {
      ...this.config,
      code: code
    };
    request.post({
        url: openapi.securityDefinitions.jobadder_identity.tokenUrl,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: qs.stringify(data)
      }, cb);
  }
}
module.exports = AuthApi;
