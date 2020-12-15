export const initialState = {
  kosarica: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "DODAJ_U_KOSARICU":
      return {
        ...state,
        kosarica: [...state.kosarica, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
