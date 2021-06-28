let initialState = {
  cars: [],
  filter: new Map()
};

export const cars = (state = initialState, action) => {
  // console.log('action', state, action)
  switch (action.type) {
    
    case 'SET_CARS':
      return {
        ...state,
        cars: action.payload
      };

    case 'SET_CARS_FILTER':
      if (action.payload.value === "") {
        let newFilter = state.filter;
        newFilter.delete(action.payload.filter);
        return {
          ...state,
          filter: newFilter
        }
      }
      return {
        ...state,
        filter: state.filter.set(action.payload.filter, action.payload.value)
      }
    
    default:
      return state;
  }
};
