import s from "./counter.module.css";
import { useAppDispatch } from "../../app/hooks/useCustomDispatch.ts";
import { useTypedSelector } from "../../app/hooks/useCustomSelector.ts";
import {
  selectMaxValue,
  selectResult,
  selectStartValue,
} from "../../app/hooks/selectors.ts";
import {
  increment,
  reset,
  setMaxValue,
  setStartValue,
} from "../../features/counter/counterSlice.ts";
import { ChangeEvent } from "react";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const maxValue = useTypedSelector(selectMaxValue);
  const startValue = useTypedSelector(selectStartValue);
  const result = useTypedSelector(selectResult);

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValue({ maxValue: +e.currentTarget.value }));
  };
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartValue({ startValue: +e.currentTarget.value }));
  };
  const onSetValueHandler = () => {};
  const onIncrementHandler = () => {
    dispatch(increment());
  };
  const onResetHandler = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.value}>
          <div>max value:</div>
          <input
            type="number"
            value={maxValue}
            onChange={onChangeMaxValueHandler}
          />
        </div>

        <div className={s.value}>
          <div>start value:</div>
          <input
            type="number"
            value={startValue}
            onChange={onChangeStartValueHandler}
          />
        </div>

        <button onClick={onSetValueHandler}>set</button>
      </div>

      <div className={s.wrapper}>
        <div className={s.value}>
          <div>result:</div>
          <div>{result}</div>
        </div>

        <button onClick={onIncrementHandler}>increment</button>
        <button onClick={onResetHandler}>reset</button>
      </div>
    </div>
  );
};
