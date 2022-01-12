import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout(props) {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
}
