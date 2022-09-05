export const reducerFun = (state, action) => {
  switch (action.type) {
    case "Add_transaction": {
      return [...state, action.payload];
    }
    case "Delete_transaction": {
      return {
        ...state,
        transaction: state.amount.filter((val) => {
          return val.id !== action.payload;
        }),
      };
    }
  }
  return state;
};
