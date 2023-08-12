import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Header from "./header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-4 sm:px-0 py-4 flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
