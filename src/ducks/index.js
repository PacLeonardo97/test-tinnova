import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { persistedReducer } from './rootReducer';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
    : applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
