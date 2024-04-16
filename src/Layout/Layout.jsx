import React from "react";
import Wrapper from "../helpers/Wrapper";
import Header from "../components/molecules/Header/Header";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrapper>
        <Outlet />
    </Wrapper>
  );
}

export default Layout;
