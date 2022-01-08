import React from "react";
import { Carousel, Button } from "react-bootstrap";
import Dune from "../../assets/dune.jpg";
import jamesBond from "../../assets/jamesBond.jpg";

export default function slider() {
  return (
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={Dune}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="caption">
              <h3>Dune</h3>
              <Button variant="outline-warning flat">Review</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={jamesBond}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="caption">
              <h3>No Time to Die</h3>
              <Button variant="outline-warning flat">Review</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
