import { Request } from './request.js'
import { Searcher } from './searcher.js'

export class UriHandler {
  constructor(uri) {
    this.uri = uri
  }

  handle() {
    console.log(`uri needs indexing: ${this.uri}`)
    new Request(this.uri).body()
      .then(json => {
        console.log(`indexing trellis resource: ${JSON.stringify(json)}`)
        return new Searcher().index(json)
      })
      .catch(err => {
        console.error(`error handling ${this.uri}: ${err.message}`)
      })
  }
}
