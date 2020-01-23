import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import watchAudioSaga from "./sagas/audioSaga";
import watchCardsSaga from "./sagas/cardsSaga";
import watchPlaylistsSaga from "./sagas/playlistsSaga";

export default (initialState, context = {}) => {
  const sagaMiddleware = createSagaMiddleware({
    context
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(watchAudioSaga);
  sagaMiddleware.run(watchCardsSaga);
  sagaMiddleware.run(watchPlaylistsSaga);

  return store;
};
