import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { Creators as UserActions, Types as UserTypes } from "../store/user";

function* fetchUser() {
  try {
    const { data } = yield axios.get(
      "https://private-9d65b3-tinnova.apiary-mock.com/users"
    );
    yield put(UserActions.getAllUser(data));
  } catch (error) {
    console.log("erros", error);
  }
}

function* watchUserActions() {
  yield takeEvery(UserTypes.FETCH_USER, fetchUser);
}

export { watchUserActions as default, watchUserActions };
