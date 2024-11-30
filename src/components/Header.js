import React, { useEffect, useState } from "react";
import { Col, Container, Image, ListGroup, Nav } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import RecentNewsHeader from "./RecentNewsHeader";
import axios from "axios";

export default function Header() {
  const getDateTime = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    var todate = date.getDate();
    var tomonth = date.getMonth();
    var toyear = date.getFullYear();
    var week = date.getDay();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime =
      weeks[week] +
      ", " +
      todate +
      " " +
      months[tomonth] +
      " " +
      toyear +
      " " +
      hours +
      ":" +
      minutes +
      " " +
      ampm;
    return strTime;
  };

  const [location, setLocation] = useState("Surat");
  const [temp, setTemp] = useState("Surat");
  const updateWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Surat&aqi=no
        `
      )
      .then((res) => {
        setTemp(res.data.current.temp_c + " °C");
        setLocation(res.data.location.name + ", " + res.data.location.region);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    updateWeather();
  }, []);
  return (
    <div>
      <header id="header">
        <Container>
          <Nav
            fixed="top"
            className="my-auto"
            fill
            variant="tabs"
            defaultActiveKey="/home"
          >
            <Nav.Item className="my-auto">
              <Nav.Link href="/home">
                <div className="row header-tsmall">
                  <Col md={"auto"}>{getDateTime()}</Col>
                  <Col md={"auto"}>
                    {temp} | {location}
                  </Col>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-auto">
              <Nav.Link eventKey="link-1">
                <Image
                  src="assets/images/logo.png"
                  width="300"
                  style={{ height: "70px", width: "auto" }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-flex my-auto text-dark header-tsmall">
              <Nav.Link eventKey="link-2 text-dark">ENGLISH</Nav.Link>
              <Nav.Link eventKey="link-2 text-dark">ESPAÑOL</Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-auto">
              <Nav.Link eventKey="link-2">
                <ListGroup horizontal className="d-flex justify-content-center">
                  <ListGroup.Item>
                    <AiFillFacebook className="h3" />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AiFillInstagram className="h3" />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AiFillYoutube className="h3" />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AiFillLinkedin className="h3" />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AiFillTwitterSquare className="h3" />
                  </ListGroup.Item>
                </ListGroup>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav
            className="justify-content-center my-3 header2"
            activeKey="/home"
          >
            <Nav.Item>
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
        <RecentNewsHeader />
      </header>
    </div>
  );
}
