import React, { useEffect, useState } from "react";

function Carousel({ data }) {
  const [carousel, setCarousel] = useState(null);
  useEffect(() => {
    if (carousel == null) {
      setCarousel(
        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
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
            <img
              style={{ minHeight: "100%" }}
              src={carousel}
              class={`d-block w-100 ${data === null ? "skeleton" : ""}`}
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
