import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const INCREMENT_ASYNC = "counter/INCREMENT_ASYNC";
const DECREMENT_ASYNC = "counter/DECREMENT_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREMENT_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREMENT_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초를 기다린다.
  yield put(increase()); // 특정 액션을 디스패치한다.
}

function* decreaseSaga() {
  yield delay(1000); // 1초를 기다린다.
  yield put(decrease()); // 특정 액션을 디스패치한다.
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해준다.
  yield takeEvery(INCREMENT_ASYNC, increaseSaga);
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고
  // 가장 마지막으로 실행된 작업만 수행한다.
  yield takeLatest(DECREMENT_ASYNC, decreaseSaga);
}

const initialState = 0; // 상태는 꼭 객체일 필요가 없다. 숫자도 작동

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
