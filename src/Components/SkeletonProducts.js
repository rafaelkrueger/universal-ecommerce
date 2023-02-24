import React from "react";

function SkeletonProducts() {
  return (
    <>
      <div style={{ flex: "col", flexWrap: "wrap" }}>
        <div
          className={`card-element-${
            window.outerWidth > 600 ? "product" : "responsive"
          }`}
          style={{ minWidth: "350px", maxWidth: "350px", padding: "25px" }}
        >
          <img
            id="product-image"
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              boxShadow: "1px 1px 10px rgba(0,0,0,0.2)",
            }}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <br />
            <div style={{ width: "100%" }}></div>
            <div style={{ width: "100%" }} class="card-text"></div>
            <hr />
            <div class="card-text" id="card-text-product">
              <div className="col">
                <div className="value-product-card"></div>

                <div className="value-product-card"></div>
              </div>
              <button></button>
            </div>
            <br />
            <div className="card-category-text">
              <p className="card-category-text-p"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonProducts;
