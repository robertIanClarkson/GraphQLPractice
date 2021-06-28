let initialState = {
  persons: [],
  filter: {
    first: "",
    last: "",
    gender: "",
    dob: "",
    state: ""
  }
}

export const persons = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_PERSONS':
      return {
        ...state,
        persons: action.payload
      };
    case 'SET_PERSONS_FILTER':
        return state;
    default:
      return state;
  }
};