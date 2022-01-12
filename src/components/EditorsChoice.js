import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
import { TiBookmark } from "react-icons/ti";
import { BsChatRight } from "react-icons/bs";

export default class EditorsChoice extends Component {
  fs_8 = {
    fontSize: "8px",
  };
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
  latestNewsData = [
    {
      title: "South Korea’s Moon Jae-in sworn in vowing address",
      time: "2 hours ago",
      comments: "126",
    },
    {
      title: "South Korea’s Moon Jae-in sworn in vowing address",
      time: "2 hours ago",
      comments: "126",
    },
    {
      title: "South Korea’s Moon Jae-in sworn in vowing address",
      time: "2 hours ago",
      comments: "126",
    },
    {
      title: "South Korea’s Moon Jae-in sworn in vowing address",
      time: "2 hours ago",
      comments: "126",
    },
  ];
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <h4 className="text-success">Editor choice ____</h4>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Row>
              {this.newsData.map((element, index) => {
                return (
                  <Col className="my-2" key={index} md={4}>
                    <NewsCard data={element} />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={3}>
            <h4 className="text-success">Latest News ____</h4>
            {this.latestNewsData.map((element, index) => {
              return (
                <div key={index} className="my-3">
                  <h6>{element.title}</h6>
                  <div className="time_line d-flex justify-content-between">
                    <span>
                      {element.comments} <BsChatRight />
                    </span>
                    <span>
                      {element.time} <TiBookmark />
                    </span>
                  </div>
                  <hr />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
