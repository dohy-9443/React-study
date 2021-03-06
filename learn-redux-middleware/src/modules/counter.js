import { createAction, handleActions } from "redux-actions";
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from "redux-saga/effects";

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
  const number = yield select((state) => state.counter); // state는 스토어 상태를 의미
  console.log(`현재 값은 ${number} 이다.`);
}

function* decreaseSaga() {
  yield delay(1000); // 1초를 기다린다.
  yield put(decrease()); // 특정 액션을 디스패치한다.
}

export function* counterSaga() {
  // 첫 번째 파라미터: n초 * 1000
  yield throttle(3000, INCREMENT_ASYNC, increaseSaga);
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
