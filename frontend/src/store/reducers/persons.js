let initialState = {
  persons: [],
  filter: new Map()
}

export const persons = (state=initialState, action) => {
  
  switch (action.type) {

    case 'SET_PERSONS':
      return {
        ...state,
        persons: action.payload
      };

    case 'SET_PERSONS_FILTER':
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