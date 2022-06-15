import { BTN_ACTIONS } from "../Component/Calculator/btnConfig";

export const addBtn = (data) => {
  return {
    type: BTN_ACTIONS.ADD,
    data: data,
  };
};
export const allClearBtn = () => {
  console.log("all clear btn");
  return {
    type: BTN_ACTIONS.ALLCLEAR,
  };
};

// export const clearBtn = () => {
//     console.log("clearbtn");
//     return {
//       type: BTN_ACTIONS.CLEAR,
//     };
//   };
export const calculte = () => {
  return {
    type: BTN_ACTIONS.CALC,
  };
};
