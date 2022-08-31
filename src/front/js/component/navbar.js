import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            S&F FIT
          </Navbar.Brand>
      </Navbar>
    </>
  );
};
