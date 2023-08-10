import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Help from "./routes/help";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Help />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
