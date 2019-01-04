let request = require('request');
let qs = require('querystring');

class CandidatesApi {
  constructor(apiUrl, token, token_type) {
    this.apiUrl = apiUrl[apiUrl.length -1] !== '/' ? (apiUrl + '/') : apiUrl;
    this.token = (token_type || 'Bearer') + ' ' + token;
  }

  list() {
    return new Promise((resolve, reject) => {
      request.get({
        url: `${this.apiUrl}candidates`,
        headers: {
          'Authorization': this.token,
          'Content-Type': 'application/json'
        }
      }, (err, httpResponse, body) => {
        let resp = JSON.parse(body);
        if (resp.error || resp.ErrorMessage) {
          reject((resp.error || resp.ErrorMessage))
        } else {
          resolve(resp)
        }
      });
    });
  }

  get(id) {
    return new Promise((resolve, reject) => {
      request.get({
        url: `${this.apiUrl}candidates/${id}`,
        headers: {
          'Authorization': this.token,
          'Content-Type': 'application/json'
        }
      }, (err, httpResponse, body) => {
        let resp = JSON.parse(body);
        if (resp.error || resp.ErrorMessage) {
          reject((resp.error || resp.ErrorMessage))
        } else {
          resolve(resp)
        }
      });
    });
  }

  find(opts) {
    let findUrl = this.apiUrl + "candidates?"+qs.stringify(opts);
    let options = {
      url: findUrl,
      headers: {
        'Authorization': this.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    console.log("jobAdder: find contact " + findUrl)
    return new Promise((resolve, reject) => {
      request.get(options, (err, httpResponse, body) => {
        let resp = JSON.parse(body);
        if (resp.error || resp.ErrorMessage) {
          reject((resp.error || resp.ErrorMessage))
        } else {
          resolve(resp.items)
        }
      })
    });
  }

}
module.exports = CandidatesApi;
