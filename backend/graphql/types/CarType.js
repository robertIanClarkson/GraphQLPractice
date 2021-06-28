const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString
} = require('graphql');

const CarType = new GraphQLObjectType({
  name: 'Car',
  description: 'This represents a car',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    make: { type: GraphQLNonNull(GraphQLString) },
    model: { type: GraphQLNonNull(GraphQLString) },
    year: { type: GraphQLNonNull(GraphQLInt) },
    color: { type: GraphQLNonNull(GraphQLString)}
  })
});

module.exports = {
  CarType
}