const { GraphQLSchema } = require('graphql');
const { RootQueryType } = require('./RootQueryType'); 

const schema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = {
  schema
}