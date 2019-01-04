let request = require('request');
let qs = require('querystring');
let openapi = require('./jobadder-openapi-v2');

class AuthApi {
  constructor(config) {
    this.config = config;
  }

  exchangeCode(code, cb) {
    let data = {
      client_id: this.config.client_id,
      client_secret: this.config.client_secret,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: this.config.redirect_uri
    };
    request.post({
        url: openapi.securityDefinitions.jobadder_identity.tokenUrl,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: qs.stringify(data)
      }, cb);
  }

  refreshToken(refresh_token, cb) {
    let data = {
      client_id: this.config.client_id,
      client_secret: this.config.client_secret,
      grant_type: 'refresh_token',
      refresh_token: refresh_token
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
