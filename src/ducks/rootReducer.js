import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./store/user";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["form"],
};

const rootReducer = combineReducers({
  form: formReducer,
  user,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer as default, persistedReducer };
