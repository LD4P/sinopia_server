const superagent = require('superagent')

export class Request {
  constructor(uri) {
    this.uri = uri
  }

  body(mimeType) {
    mimeType = mimeType || 'application/json'

    return superagent.get(this.uri)
      .accept(mimeType)
      .then(res => res.body)
      .catch(err => {
        console.error(`error resolving ${this.uri}: ${err.message}`)
      })
  }
}