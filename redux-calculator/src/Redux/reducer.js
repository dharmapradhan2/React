import { BTN_ACTIONS } from "../Component/Calculator/btnConfig";
const initialState = {
  expression: "",
  ans: "",
};
const reducer = (state = initialState, action) => {
  function expresssion(data) {
    try {
      let res = eval(data);
      return res;
    } catch {
      return "Syntx error...";
    } finally {
      console.log("Calculation Complete.");
    }
  }
  function btnClick(data) {
    if (
      data.startsWith("Syntx error...", 0) ||
      data.startsWith("Infinity", 0)
    ) {
      return data.split('').pop();
    } else {
      return data;
    }
  }
  // console.log(action);
  switch (action.type) {
    case BTN_ACTIONS.ADD:
      return {
        state,
        expression: btnClick(state.expression + action.data),
      };
    case BTN_ACTIONS.ALLCLEAR:
      return { ...state, expression: "" };
    case BTN_ACTIONS.CALC:
      // console.log(eval(state.ans));
      return {
        state,
        expression: expresssion(state.expression),
        // expression: action.data,
      };
    default:
      return state;
  }
};
export default reducer;
