let initialState = {
  cars: [],
  filters: {
    make: "",
    model: "",
    year: "",
    color: ""
  }
};

export const cars = (state = initialState, action) => {
  console.log('action', state, action)
  switch (action.type) {
    
    case 'SET_CARS':
      return {
        ...state,
        cars: action.payload
      };

    case 'SET_CAR_FILTER':
      return state
    
    default:
      return state;
  }
};
