import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Footer() {
  return (
    <Container className="footer my-5 px-5">
      <hr />
      <Row>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>News</ListGroup.Item>
            <ListGroup.Item>Home</ListGroup.Item>
            <ListGroup.Item>World</ListGroup.Item>
            <ListGroup.Item>Magazine</ListGroup.Item>
            <ListGroup.Item>Business</ListGroup.Item>
            <ListGroup.Item>Politics</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>World</ListGroup.Item>
            <ListGroup.Item>Home</ListGroup.Item>
            <ListGroup.Item>World</ListGroup.Item>
            <ListGroup.Item>Magazine</ListGroup.Item>
            <ListGroup.Item>Business</ListGroup.Item>
            <ListGroup.Item>Politics</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>News</ListGroup.Item>
            <ListGroup.Item>Home</ListGroup.Item>
            <ListGroup.Item>World</ListGroup.Item>
            <ListGroup.Item>Magazine</ListGroup.Item>
            <ListGroup.Item>Business</ListGroup.Item>
            <ListGroup.Item>Politics</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>News</ListGroup.Item>
            <ListGroup.Item>Home</ListGroup.Item>
            <ListGroup.Item>World</ListGroup.Item>
            <ListGroup.Item>Magazine</ListGroup.Item>
            <ListGroup.Item>Business</ListGroup.Item>
            <ListGroup.Item>Politics</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={6}>
          <Image fluid src="assets/images/logo.png" width="200" height="auto" />
        </Col>
        <Col md={6}>
          <div className="d-flex w-50 justify-content-between">
            <div className="fw-bold">Follow on</div>
            <div className="social-group d-flex">
              <div>
                <AiFillFacebook className="h3" />
              </div>
              <div>
                <AiFillInstagram className="h3" />
              </div>
              <div>
                <AiFillYoutube className="h3" />
              </div>
              <div>
                <AiFillLinkedin className="h3" />
              </div>
              <div>
                <AiFillTwitterSquare className="h3" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}
