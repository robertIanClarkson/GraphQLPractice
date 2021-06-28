const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString
} = require('graphql');

// const { PersonType } = require('./PersonType');

// const PERSON_DATA = require('../../data/PERSON_DATA.json');
// const JOIN_DATA = require('../../data/JOIN_DATA.json');

const CarType = new GraphQLObjectType({
  name: 'Car',
  description: 'This represents a car',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    make: { type: GraphQLNonNull(GraphQLString) },
    model: { type: GraphQLNonNull(GraphQLString) },
    year: { type: GraphQLNonNull(GraphQLInt) },
    color: { type: GraphQLNonNull(GraphQLString)},
    // owner: {
    //   type: PersonType,
    //   resolve: (car) => {
    //     let row = JOIN_DATA.find(row => row.car_id === car.id);
    //     let owner = PERSON_DATA.find(person => person.id === row.person_id);
    //     return owner
    //   }
    // },
    // purchased: {
    //   type: GraphQLString,
    //   resolve: (car) => {
    //     let row = JOIN_DATA.find(row => row.car_id === car.id);
    //     return row.purchaseDate
    //   }
    // }
  })
});

module.exports = {
  CarType
}