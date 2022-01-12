import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function NewsCard(props) {
  let { urlToImage, source, description, title, url, publishedAt } = props.data;
  const handleImgError = (e) => {
    e.target.src = "assets/images/dashboard/glob.jpg";
  };

  let myImgStyle = {
    width: "100%",
    height: "15vw",
    objectFit: "cover",
    minHeight: "250px",
  };

  const getDateTime = (date) => {
    date = new Date(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    var todate = date.getDate();
    var tomonth = date.getMonth() + 1;
    var toyear = date.getFullYear();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime =
      todate +
      "/" +
      tomonth +
      "/" +
      toyear +
      " " +
      hours +
      ":" +
      minutes +
      " " +
      ampm;
    return strTime;
  };

  return (
    <Card className="h-100">
      <Card.Body>
        <div className="position-relative img-hover">
          <img
            className="img-fluid"
            src={urlToImage ? urlToImage : ""}
            onError={handleImgError}
            style={myImgStyle}
            alt=""
          />
          <span className="thumb-title">
            {source && source.name ? source.name : ""}
          </span>
        </div>
        <h6 title={title} className="mt-3">
          {title ? title.slice(0, 100) + ".." : ""}
        </h6>
        <Card.Text>
          {description ? description.slice(0, 150) + ".." : ""}
        </Card.Text>
        <Row>
          <Col md={6}>
            <a className="btn btn-dark" target="_blank" href={url}>
              Read Article
            </a>
          </Col>
          <Col md={6} className="mt-auto">
            <p className="mt-auto fst-italic text-danger">
              Publish on: {getDateTime(publishedAt)}
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
