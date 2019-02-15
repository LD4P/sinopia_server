const elasticsearch = require('elasticsearch')

export class Searcher {
  constructor() {
    let host = process.env.SEARCH_HOST || 'localhost'
    let port = process.env.SEARCH_PORT || '9200'

    this.client = new elasticsearch.Client({
      host: `${host}:${port}`,
      log: 'trace'
    })
  }

  index(json) {
    return this.client.index({
      index: 'sinopia_index',
      type: 'sinopia_resource',
      body: json
    }).then(indexResponse => {
      if (indexResponse.result != 'created') {
        throw `error indexing ${JSON.stringify(json)}`
      }
      return true
    }).catch(err => {
      console.error(`error handling ${this.uri}: ${err.message}`)
    })
  }
}
