const { 
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql');

const { CarType } = require('./../types/CarType');

const CAR_DATA = require('./../../data/CAR_DATA.json');

const car = {
  type: CarType,
  description: "A single car.",
  args: {
    id: { type: GraphQLInt }
  },
  resolve: (parent, args) => CAR_DATA.find(car => car.id === args.id)
};

const cars = {
  type: new GraphQLList(CarType),
  description: "List of cars.",
  args: {
    make: { type: GraphQLString },
    model: { type: GraphQLString },
    year: { type: GraphQLInt },
    color: { type: GraphQLString },
  },
  resolve: (parent, args) => {
    if (Object.keys(args).length === 0) return CAR_DATA;

    let query = CAR_DATA;
    if (Object.keys(args).includes("make")) query = query.filter(car => car.make.toLowerCase() === args.make.toLowerCase());
    if (Object.keys(args).includes("model")) query = query.filter(car => car.model.toLowerCase() === args.model.toLowerCase());
    if (Object.keys(args).includes("year")) query = query.filter(car => car.year === args.year);
    if (Object.keys(args).includes("color")) query = query.filter(car => car.color.toLowerCase() === args.color.toLowerCase());
    return query;
  }
};

module.exports = {
  car,
  cars
}