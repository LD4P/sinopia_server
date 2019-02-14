// Copyright 2019 Stanford University see Apache2.txt for license

const elasticsearch = require('elasticsearch')
const Stomp = require('stomp-client')
const superagent = require('superagent')

const searchHost = process.env.SEARCH_HOST || 'localhost'
const brokerHost = process.env.BROKER_HOST || 'localhost'

const searchClient = new elasticsearch.Client({
  host: `${searchHost}:9200`,
  log: 'trace'
})
const queueName = '/queue/trellis'

function main() {
  let stompClient = new Stomp(brokerHost, 61613)
  console.log(`connecting to stomp at ${brokerHost}:61613`)
  stompClient.connect((sessionId) => {
    console.log(`subscribing to ${queueName}, waiting for messages`)
    stompClient.subscribe(queueName, (body, headers) => {
      console.log(`received message with body: ${body}`)
      uri = JSON.parse(body).object.id
      console.log(`uri needs indexing: ${uri}`)
      superagent.get(uri)
        .accept('application/ld+json')
        .then(res => {
          json = res.body
          console.log(`indexing trellis resource: ${json}`)
          let indexResult = searchClient.index({
            index: 'sinopia_index',
            type: 'resourceTemplate',
            body: json
          })
          console.log(`result from ElasticSearch ${indexResult}`)
        })
    })
  })
}

main();
