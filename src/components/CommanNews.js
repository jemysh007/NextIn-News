import React, { useState, useEffect, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
import axios from "axios";

export default function CommanNews(props) {
  const [articles, setArticles] = useState([]);
  const { title, limit, category: propCategory, setProgress } = props;
  const category = propCategory && propCategory !== "" ? propCategory : "general";

  const updateNews = useCallback(() => {
    setProgress(15);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${process.env.REACT_APP_NEWSAPI}`
      )
      .then((res) => {
        setProgress(80);
        setArticles(res.data.articles.slice(0, limit ? limit : 150));
        setProgress(100);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setProgress(100);
      });
  }, [category, limit, setProgress]);

  useEffect(() => {
    updateNews();
  }, [updateNews]);
  
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
