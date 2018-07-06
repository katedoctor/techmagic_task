const express = require('express');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./schemas/schema');
const cors = require('cors');

app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: global,
  graphiql: true
}));


app.listen(process.env.PORT || 4000, () => {
  console.log(`server is listening on port 4000`);
})