import React, { useState } from "react";
<<<<<<< HEAD
import styled from "styled-components";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

import "../assets/styles/Layout.scss";

const Section = styled.section`
  margin-left: ${({ sidebar }) => (sidebar ? "230px" : "0")};
  transition: 350ms;

  @media screen and (max-width: 1110px) {
    & {
      margin-left: ${({ sidebar }) => (sidebar ? "65px" : "0")};
    }
  }
  @media screen and (max-width: 940px) {
    & {
      margin-left: ${({ sidebar }) => (sidebar ? "0" : "0")};
    }
  }
`;
=======

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

import "../assets/styles/Layout.scss";
>>>>>>> Integrated the layout with the grid, sidebar and header. The layout was rendered in the different views

export const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Header showSidebar={showSidebar} />
<<<<<<< HEAD
      <Sidebar sidebar={sidebar} />
      <Section sidebar={sidebar}>{children}</Section>
=======

      <section className="container">
        <Sidebar sidebar={sidebar} />
        {children}
      </section>
>>>>>>> Integrated the layout with the grid, sidebar and header. The layout was rendered in the different views
    </>
  );
};