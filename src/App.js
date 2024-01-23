import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routhing from "./navigation/routing";
// import store from "./store/configureStore";
// import NavRoutes from "./navigation/routes";
import { store, persistor } from "./store/configureStore";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routhing />
      </PersistGate>
    </Provider>
  );
};

export default App;
