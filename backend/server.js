var express = require('express');

var { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser')
const cors = require('cors')
 
const { schema } = require('./graphql/index');

var app = express();

app.use( cors() );
app.use(
    `/graphql`,
    graphqlHTTP( {
        schema: schema, 
        graphiql: true
    } )
);;

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');