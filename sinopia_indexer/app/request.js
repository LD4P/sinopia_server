const superagent = require('superagent')

const defaultMimeType = process.env.DEFAULT_MIME_TYPE || 'application/ld+json'

export class Request {
  constructor(uri) {
    this.uri = uri
  }

  body(mimeType) {
    mimeType = mimeType || defaultMimeType

    return superagent.get(this.uri)
      .accept(mimeType)
      .then(res => res.body)
      .catch(err => {
        console.error(`error resolving ${this.uri}: ${err.message}`)
      })
  }
}
