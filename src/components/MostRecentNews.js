import React, { Component } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
const axios = require("axios").default;

export default class MostRecentNews extends Component {
  userMessages = [
    {
      user: "Henry Itondo",
      icon: "assets/images/dashboard/Profile_1.jpg",
      msg: "The Most And Least Visited Countries In The World",
    },
    {
      user: "Oka Tomoaki",
      icon: "assets/images/dashboard/Profile_2.jpg",
      msg: "The Best Places to Travel in month August",
    },
    {
      user: "Joana Leite",
      icon: "assets/images/dashboard/Profile_3.jpg",
      msg: "Focus On Fun And Challenging Lifetime Activities",
    },
    {
      user: "Rita Leite",
      icon: "assets/images/dashboard/Profile_4.jpg",
      msg: "Bread Is The Most Widely Consumed Food In The World",
    },
    {
      user: "Jurrien Oldhof",
      icon: "assets/images/dashboard/Profile_5.jpg",
      msg: "What Is Music, And What Does It Mean To Us",
    },
    {
      user: "Yamaha Toshinobu",
      icon: "assets/images/dashboard/Profile_6.jpg",
      msg: "Is Breakfast The Most Important Meal Of The Day",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      category: this.props.category,
    };
  }

  componentDidMount() {
    let category = this.state.category ? this.state.category : "general";
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${process.env.REACT_APP_NEWSAPI}`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ articles: res.data.articles });
      })
      .catch((error) => {});
  }
  handleImgError = (e) => {
    e.target.src = "assets/images/dashboard/glob.jpg";
  };
  render() {
    return (
      <div>
        <Container className="mt-4 most-recent">
          <Row>
            <Col md={8}>
              <Carousel indicators={false}>
                {this.state.articles.slice(0, 5).map((element, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <a target="_blank" href={element.url}>
                        <Image
                          style={this.bannerImageStyle}
                          className="d-block w-100 most-recent-news-image"
                          src={
                            element.urlToImage != null
                              ? element.urlToImage
                              : "assets/images/tech/demo.jpg"
                          }
                          onError={this.handleImgError}
                        />
                        <Carousel.Caption className="px-lg-4 px-3 ">
                          <h3 className="text-start">
                            {element.title ? element.title.slice(0, 100) : "-"}
                            ...
                          </h3>
                          <p className="text-start">
                            {element.description
                              ? element.description.slice(0, 70)
                              : "-"}
                            ...
                          </p>
                        </Carousel.Caption>
                      </a>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
            <Col md={4}>
              <Row>
                {this.userMessages.map((element, index) => {
                  return (
                    <Col className="user-msg" md={6} key={index}>
                      <p className="mb-1">
                        <Image
                          className="mx-2"
                          width="20"
                          fluid
                          src={element.icon}
                        />
                        <span className="username">{element.user}</span>
                      </p>
                      <p>{element.msg}</p>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
