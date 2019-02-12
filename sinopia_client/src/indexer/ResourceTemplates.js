// Copyright 2019 Stanford University see Apache2.txt for license

const elasticsearch = require('elasticsearch')
const fs = require('fs')
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

const index = () => {
  console.log(`Resource Template Indexer`)
  const rtPath = process.argv[2]
  fs.readFile(rtPath, 'utf8', async function(err, contents) {
    const resourceTemplate = JSON.parse(contents)
    const response = await client.index({
      index: 'rt_index',
      type: 'resourceTemplate',
      body: resourceTemplate
    })
    console.log(`Response from Elasticsearch ${response}`)
  })

}

index()
