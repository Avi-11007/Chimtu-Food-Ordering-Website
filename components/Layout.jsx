import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = ({children}) => {
  return(
    <>
       <Header></Header>
        {children}
        <Footer></Footer>
    </>
  );
};

export default Layout;
