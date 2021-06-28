const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString
} = require('graphql');

// const { CarType } = require('./CarType');

// const CAR_DATA = require('../../data/CAR_DATA.json');
// const JOIN_DATA = require('../../data/JOIN_DATA.json');

const PersonType = new GraphQLObjectType({
  name: "Person",
  description: "A single person",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    first: { type: GraphQLNonNull(GraphQLString) },
    last: { type: GraphQLNonNull(GraphQLString) },
    gender: { type: GraphQLNonNull(GraphQLString) },
    dob: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
    // car: {
    //   type: CarType,
    //   resolve: (person) => {
    //     let car_id = JOIN_DATA.find(row => row.person_id === person.id).car_id;
    //     return CAR_DATA.find(car => car.id === car_id);
    //   }
    // }
  })
});

module.exports = {
  PersonType
}