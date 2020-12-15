import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./style.css";
import { NavLink } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Layout sidebar>
        Home
      </Layout>
    </div>
  );
}

export default Home;
