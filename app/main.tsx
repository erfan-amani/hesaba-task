import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/header";
import Footer from "./components/footer";
import Help from "./routes/help";

const Main = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <main className="main">
          <Help />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default Main;
