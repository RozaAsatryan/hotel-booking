
export const authReducer = (state = userState, action) => {
    switch (action.type) {
      case "ADD_POST":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  