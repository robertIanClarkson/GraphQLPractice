const { 
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql');

const { PersonType } = require('./../types/PersonType');

const PERSON_DATA = require('./../../data/PERSON_DATA.json');

const person = {
  type: PersonType,
  description: "A single person.",
  args: {
    id: { type: GraphQLInt }, 
  },
  resolve: (parent, args) => {
    if (Object.keys(args).includes("id")) return PERSON_DATA.find(person => person.id === args.id)
  }
};

const persons = {
  type: new GraphQLList(PersonType),
  description: "List of persons.",
  args: {
    first: { type: GraphQLString },
    last: { type: GraphQLString },
    gender: { type: GraphQLString },
    dob: { type: GraphQLString },
    state: { type: GraphQLString },
  },
  resolve: (parent, args) => {
    if (Object.keys(args).length === 0) return PERSON_DATA;
    
    let query = PERSON_DATA;
    if (Object.keys(args).includes("first")) query = query.filter(person => person.first.toLowerCase() === args.first.toLowerCase());
    if (Object.keys(args).includes("last")) query = query.filter(person => person.last.toLowerCase() === args.last.toLowerCase());
    if (Object.keys(args).includes("gender")) query = query.filter(person => person.gender.toLowerCase() === args.gender.toLowerCase());
    if (Object.keys(args).includes("dob")) query = query.filter(person => person.dob.toLowerCase() === args.dob.toLowerCase());
    if (Object.keys(args).includes("state")) query = query.filter(car => car.state.toLowerCase() === args.state.toLowerCase());
    return query;
  }
};

module.exports = {
  person,
  persons
}