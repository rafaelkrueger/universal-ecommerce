import React, { useEffect, useState } from "react";

function Carousel({ data }) {
  const [carousel, setCarousel] = useState(null);
  useEffect(() => {
    if (carousel == null) {
      setCarousel(
        "https://i.pinimg.com/originals/fa/6a/a8/fa6aa8b9f02691e42df56f1678e795fc.gif"
      );
    } else {
      setTimeout(() => {
        setCarousel(data !== null ? data.website.websiteCarousel : "");
      }, 500);
    }
  });

  return (
    <>
      <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carousel} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
