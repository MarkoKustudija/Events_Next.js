import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {

  
  return (
    <Fragment>
        <MainHeader />
        <main>{children}</main>
    </Fragment>
  )
}

export default Layout;
