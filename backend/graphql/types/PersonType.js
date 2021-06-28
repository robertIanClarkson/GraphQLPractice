const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString
} = require('graphql');

const PersonType = new GraphQLObjectType({
  name: "Person",
  description: "A single person",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    first: { type: GraphQLNonNull(GraphQLString) },
    last: { type: GraphQLNonNull(GraphQLString) },
    gender: { type: GraphQLNonNull(GraphQLString) },
    dob: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) }
  })
});

module.exports = {
  PersonType
}