export const setCarsFilter = (filter, value) => ({
  type: 'SET_CARS_FILTER',
  payload: {filter, value}
});

export const setPersonsFilter = (filter, value) => ({
  type: 'SET_PERSONS_FILTER',
  payload: {filter, value}
});

export const setCars = cars => ({
  type: 'SET_CARS',
  payload: cars
})

export const setPersons = persons => ({
  type: 'SET_PERSONS',
  payload: persons
})