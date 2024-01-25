// import { createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import rootReducer from "../redux/reducers";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer, applyMiddleware(thunk));
// const persistor = persistStore(store);

// export { store, persistor };
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { thunk } from "redux-thunk";
import rootReducer from "../redux/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
