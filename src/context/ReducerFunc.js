export const reducerFun = (state, action) => {
  switch (action.type) {
    case "Add_transaction": {
      return [...state, action.payload];
    }
  }
  return state;
};
