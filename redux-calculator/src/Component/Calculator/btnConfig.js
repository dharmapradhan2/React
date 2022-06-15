export const BTN_ACTIONS = {
  ADD: "ADD",
  CALC: "CALC",
  ALLCLEAR: "ALLCLEAR",
};
export const btns = [
  {
    display: "AC",
    action: BTN_ACTIONS.ALLCLEAR,
    class: "btn__op row1 btn__op1",
  },
  {
    display: "%",
    action: BTN_ACTIONS.ADD,
    class: "btn__op row1",
  },
  {
    display: "/",
    action: BTN_ACTIONS.ADD,
    class: "btn__op col4",
  },
  {
    display: "7",
    action: BTN_ACTIONS.ADD,
    class: "btn__op digit",
  },
  {
    display: "8",
    action: BTN_ACTIONS.ADD,
    class: "btn__op digit",
  },
  {
    display: "9",
    action: BTN_ACTIONS.ADD,
    class: "btn__op digit",
  },
  {
    display: "*",
    action: BTN_ACTIONS.ADD,
    class: "btn__op col4",
  },
  {
    display: "4",
    action: BTN_ACTIONS.ADD,
    class: "btn__op digit",
  },
  {
    display: "5",
    action: BTN_ACTIONS.ADD,
    class: "btn__op digit",
  },
  {
    display: "6",
    action: BTN_ACTIONS.ADD,
    class: "btn__op digit",
  },
  {
    display: "-",
    action: BTN_ACTIONS.ADD,
    class: "btn__op col4",
  },
  {
    display: "1",
    action: BTN_ACTIONS.ADD,
    class: "btn__op digit",
  },
  {
    display: "2",
    action: BTN_ACTIONS.ADD,
    class: "btn__op digit",
  },
  {
    display: "3",
    action: BTN_ACTIONS.ADD,
    class: "btn__op digit",
  },
  {
    display: "+",
    action: BTN_ACTIONS.ADD,
    class: "btn__op col4",
  },
  {
    display: "0",
    action: BTN_ACTIONS.ADD,
    class: "btn__op btn__op1 digit",
  },
  {
    display: ".",
    action: BTN_ACTIONS.ADD,
    class: "btn__op dot",
  },
  {
    display: "=",
    action: BTN_ACTIONS.CALC,
    class: "btn__op",
  },
];
