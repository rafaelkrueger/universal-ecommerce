import React from "react";
import CarouselEmpty from "../images/empty-carousel.jpg";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={CarouselEmpty} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
