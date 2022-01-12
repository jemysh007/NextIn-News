import React, { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";

export default class WorldNews extends Component {
  newsData = [
    {
      img: "assets/images/dashboard/travel.jpg",
      category: "Travel",
      title: "Refugees flood Turkey's border with Greece",
      text: "Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      img: "assets/images/dashboard/news.jpg",
      category: "Travel",
      title: "Refugees flood Turkey's border with Greece",
      text: "Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      img: "assets/images/dashboard/travel.jpg",
      category: "Travel",
      title: "Refugees flood Turkey's border with Greece",
      text: "Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      img: "assets/images/dashboard/news.jpg",
      category: "Travel",
      title: "Refugees flood Turkey's border with Greece",
      text: "Lorem Ipsum has been the industry's standard dummy text",
    },
  ];
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <h4 className="text-success">World News ____</h4>
          </Col>
        </Row>
        <Row>
          {this.newsData.map((element, index) => {
            return (
              <Col key={index} md={3}>
                <NewsCard data={element} />
              </Col>
            );
          })}
          <Col />
        </Row>
      </Container>
    );
  }
}
