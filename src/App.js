import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routhing from "./navigation/routing";
// import store from "./store/configureStore";
// import NavRoutes from "./navigation/routes";
import { store, persistor } from "./store/configureStore";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routhing />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
};

export default App;
