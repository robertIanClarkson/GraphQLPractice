const { GraphQLObjectType } = require('graphql');
const { car, cars } = require('./queries/car');
const { person, persons } = require('./queries/person');

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    cars: cars,
    car: car,
    persons: persons,
    person: person
  })
});

module.exports = {
  RootQueryType
}