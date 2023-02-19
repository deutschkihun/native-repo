import { useReducer, useState } from "react";
export const useCalculator = () => {
  const [event, updateEvent] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      input: 0,
      currentOperator: null,
      result: null,
      tempInput: null,
      tempOperator: null,
      isClickedOperator: false,
      isClickedEqual: false,
    }
  );

  // const hasInput = input ? true : false;
  const hasInput = !!event.input;

  const onPressNum = (num) => {
    if (event.currentOperator && event.isClickedOperator) {
      updateEvent({ result: num, input: num, isClickedOperator: true });
    } else {
      const newInput = Number(`${input}${sum}`);
      updateEvent({ input: newInput });
    }
  };

  const onPressOperator = () => {
    if (operator !== "=") {
      updateEvent({
        currentOperator: operator,
        isClickedOperator: true,
        isClickedEqual: false,
      });
    } else {
      let finalResult = event.result;
      const finalInput = isClickedEqual ? event.tempInput : input;
      const finalOperator = isClickedEqual
        ? event.tempOperator
        : currentOperator;

      switch (finalOperator) {
        case "+":
          finalResult = result + finalInput;
          break;
        case "-":
          finalResult = result - finalInput;
          break;
        case "*":
          finalResult = result * finalInput;
          break;
        case "/":
          finalResult = result / finalInput;
          break;
        default:
          break;
      }
      updateEvent({
        result: finalResult,
        input: finalResult,
        tempInput: finalInput,
        currentOperator: null,
        isClickedEqual: true,
      });
    }
  };

  const onPressReset = () => {
    hasInput
      ? updateEvent({ input: 0 })
      : updateEvent({
          input: 0,
          currentOperator: null,
          result: null,
          tempInput: null,
          tempOperator: null,
        });
  };

  return {
    event,
    onPressNum,
    onPressOperator,
    onPressReset,
  };
};
