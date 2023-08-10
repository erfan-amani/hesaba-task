import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./routes";

const Main = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto py-4 flex-1 overflow-auto">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default Main;
