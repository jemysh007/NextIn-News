import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
const axios = require("axios").default;

export default class RecentNewsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=general&country=us&apiKey=${process.env.REACT_APP_NEWSAPI}`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ articles: res.data.articles });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <div className="mx-3 ">
        <Row>
          {this.state.articles.slice(0, 4).map((element, index) => {
            return (
              <Col md={6} lg={3} className="my-3" key={index}>
                <a
                  className="text-dark text-decoration-none"
                  href={element.url}
                  target="_blank"
                >
                  <Row>
                    <Col md={4}>
                      <Image fluid src={element.urlToImage}></Image>
                    </Col>
                    <Col className="fw-bolder" md={8}>
                      {element.title.slice(0, 40)}...
                    </Col>
                  </Row>
                </a>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
