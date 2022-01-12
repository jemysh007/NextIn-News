import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
import axios from "axios";

export default function CommanNews(props) {
  // this.state = {
  //   articles: [],
  //   category: this.props.category,
  //   title: this.props.title,
  //   limit: this.props.limit,
  // };

  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState(props.title);
  const [limit, setLimit] = useState(props.limit);
  const [category, setCategory] = useState(
    props.category && props.category != "" ? props.category : "general"
  );

  const updateNews = () => {
    props.setProgress(15);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${process.env.REACT_APP_NEWSAPI}`
      )
      .then((res) => {
        // console.log(res.data);
        props.setProgress(80);
        setArticles(res.data.articles.slice(0, limit ? limit : 150));
        props.setProgress(100);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    updateNews();
  }, []);
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <h4 className="text-success">{title}</h4>
          </Col>
        </Row>
        <Row>
          {articles.map((element, index) => {
            return (
              <Col className="my-3" key={index} md={4}>
                <NewsCard data={element} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
