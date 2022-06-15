import React, { useRef, useEffect } from "react";
import "./calculator.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { btns, BTN_ACTIONS } from "./btnConfig";
import { addBtn, allClearBtn, calculte } from "../../Redux/action";
export const Calculator = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state);
  // console.log(myState);
  // console.log(eval('9%9'));
  const btnsRef = useRef(null);
  useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll("button"));
    btns.forEach((e) => (e.style.height = e.offsetWidth + "px"));
  }, []);
  return (
    <div className="calculator">
      <div className="calculator__result">
        <div className="calculator__result__exp">{myState.expression!==''?myState.expression:'Type somthing..'}</div>
      </div>
      <div ref={btnsRef} className="calculator__btns">
        {btns.map((item, index) => {
          // let f;
          // console.log(item);
          switch (item.action) {
            case BTN_ACTIONS.ADD: {
              return (
                <button
                  key={index}
                  className={item.class}
                  onClick={() => dispatch(addBtn(item.display))}
                >
                  {item.display}
                </button>
              );
            }
            case BTN_ACTIONS.CALC: {
              return (
                <button
                  key={index}
                  className={item.class}
                  onClick={() => dispatch(calculte())}
                >
                  {item.display}
                </button>
              );
            }
            case BTN_ACTIONS.ALLCLEAR: {
              return (
                <button
                  key={index}
                  className={item.class}
                  onClick={() => dispatch(allClearBtn())}
                >
                  {item.display}
                </button>
              );
            }
            case BTN_ACTIONS.PLM: {
              return (
                <button key={index} className={item.class}>
                  {item.display}
                </button>
              );
            }
          }
        })}
      </div>
    </div>
  );
};
