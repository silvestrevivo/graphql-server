const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema')

// Activate express
const app = express();

// GraphQL as middleware in express that uses schema as template for server
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('server running on port 4000...')
})
