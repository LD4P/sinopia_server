import { UriHandler } from './uri_handler.js'

const Stomp = require('stomp-client')
const brokerHost = process.env.BROKER_HOST || 'localhost'
const queueName = process.env.QUEUE_NAME || '/queue/trellis'

export class Listener {
  static listen() {
    let stompClient = new Stomp(brokerHost, 61613)
    console.log(`connecting to stomp at ${brokerHost}:61613`)
    stompClient.connect((_sessionId) => {
      console.log(`subscribing to ${queueName}, waiting for messages`)
      stompClient.subscribe(queueName, (body, _headers) => {
        console.log(`received message with body: ${body}`)
        let uri = JSON.parse(body).object.id
        new UriHandler(uri).handle()
      })
    })
  }
}
