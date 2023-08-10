import React from "react";
import { Link } from "react-router-dom";
export default function Ropa() {
  return (
    <>
      <div class="row mb-5">
        <div
          class="col-sm-6 col-lg-4 mb-4 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div class="block-4 text-center border">
            <figure class="block-4-image">
            <Link to="/Shop_Single">
                <img
                  src="images/cloth_1.jpg"
                  alt="Image placeholder"
                  class="img-fluid"
                ></img>
              </Link>
            </figure>
            <div class="block-4-text p-4">
              <h3>
                <Link to="/Shop_Single">Tank Top</Link>
              </h3>
              <p class="mb-0">Finding perfect t-shirt</p>
              <p class="text-primary font-weight-bold">$50</p>
            </div>
          </div>
        </div>
        <div
          class="col-sm-6 col-lg-4 mb-4 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div class="block-4 text-center border">
            <figure class="block-4-image">
            <Link to="/Shop_Single">
                <img
                  src="images/shoe_1.jpg"
                  alt="Image placeholder"
                  class="img-fluid"
                ></img>
              </Link>
            </figure>
            <div class="block-4-text p-4">
              <h3>
              <Link to="/Shop_Single">Corater</Link>
              </h3>
              <p class="mb-0">Finding perfect products</p>
              <p class="text-primary font-weight-bold">$50</p>
            </div>
          </div>
        </div>
        <div
          class="col-sm-6 col-lg-4 mb-4 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div class="block-4 text-center border">
            <figure class="block-4-image">
            <Link to="/Shop_Single">
                <img
                  src={"images/cloth_2.jpg"}
                  alt="Image placeholder"
                  class="img-fluid"
                ></img>
              </Link>
            </figure>
            <div class="block-4-text p-4">
              <h3>
              <Link to="/Shop_Single">Polo Shirt</Link>
              </h3>
              <p class="mb-0">Finding perfect products</p>
              <p class="text-primary font-weight-bold">$50</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
