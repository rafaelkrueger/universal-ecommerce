import React from "react";

function SkeletonSlider() {
  return (
    <>
      <div className={window.outerWidth > 600 ? "col" : "row"}>
        <div
          className="card-swiper card-skeleton"
          id="card-swiper card-swiper-skeleton"
        >
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="loading screen"
            className="card-swiper-image card-swiper-skeleton-image skeleton"
            id="product-slider-swiper-image"
          />
          <div className="card-swiper-footer">
            <div className="card-swiper-title card-swiper-title-skeleton skeleton">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="loading screen"
                className="skeleton"
                id="product-slider-swiper-image"
              />
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <div className="card-swiper-title card-swiper-price-skeleton skeleton">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="loading screen"
                    className="skeleton"
                    id="product-slider-swiper-image"
                  />
                </div>
                <div className="card-swiper-title card-swiper-price-skeleton skeleton">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="loading screen"
                    className="skeleton"
                    id="product-slider-swiper-image"
                  />
                </div>
              </div>
              <div className="col">
                <div className="card-swiper-title card-swiper-button-skeleton skeleton">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="loading screen"
                    className="skeleton"
                    id="product-slider-swiper-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-swiper card-skeleton"
          id="card-swiper card-swiper-skeleton"
        >
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="loading screen"
            className="card-swiper-image card-swiper-skeleton-image skeleton"
            id="product-slider-swiper-image"
          />
          <div className="card-swiper-footer">
            <div className="card-swiper-title card-swiper-title-skeleton skeleton">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="loading screen"
                className="skeleton"
                id="product-slider-swiper-image"
              />
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <div className="card-swiper-title card-swiper-price-skeleton skeleton">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="loading screen"
                    className="skeleton"
                    id="product-slider-swiper-image"
                  />
                </div>
                <div className="card-swiper-title card-swiper-price-skeleton skeleton">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="loading screen"
                    className="skeleton"
                    id="product-slider-swiper-image"
                  />
                </div>
              </div>
              <div className="col">
                <div className="card-swiper-title card-swiper-button-skeleton skeleton">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="loading screen"
                    className="skeleton"
                    id="product-slider-swiper-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-swiper card-skeleton"
          id="card-swiper card-swiper-skeleton"
        >
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="loading screen"
            className="card-swiper-image card-swiper-skeleton-image skeleton"
            id="product-slider-swiper-image"
          />
          <div className="card-swiper-footer">
            <div className="card-swiper-title card-swiper-title-skeleton skeleton">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="loading screen"
                className="skeleton"
                id="product-slider-swiper-image"
              />
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <div className="card-swiper-title card-swiper-price-skeleton skeleton">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="loading screen"
                    className="skeleton"
                    id="product-slider-swiper-image"
                  />
                </div>
                <div className="card-swiper-title card-swiper-price-skeleton skeleton">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="loading screen"
                    className="skeleton"
                    id="product-slider-swiper-image"
                  />
                </div>
              </div>
              <div className="col">
                <div className="card-swiper-title card-swiper-button-skeleton skeleton">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="loading screen"
                    className="skeleton"
                    id="product-slider-swiper-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonSlider;
