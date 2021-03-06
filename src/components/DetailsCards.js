import React from "react";
import "./DetailsCards.css";

const DetailsCards = () => {
  return (
    <div id="details" class="feat bg-gray pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="section-head col-sm-12">
            <h4>
              <span>Why Choose</span> Us?
            </h4>
            <p>
              When It Comes About getting Your Dream house to be get Build, Why Would You choose Us? 
              Here The reasons ARE!!
            </p>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_one">
                <img
                  src="https://img.icons8.com/color/48/000000/modern-art.png"
                  alt="Location"
                  height="50px"
                  width="50px"
                  style={{ marginTop: -25 }}
                />
              </span>
              <h6>Modern Design</h6>
              <p>
                We design your imagination with perfect blend of modern and latest designs where considering your choice is our priority!
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_two">
                <img
                  src="https://img.icons8.com/color/48/000000/brainstorm-skill.png"
                  alt="Location"
                  height="50px"
                  width="50px"
                  style={{ marginTop: -25 }}
                />
              </span>
              <h6>Creative Design</h6>
              <p>
                We have special Team  of  Specialised architects, civil engineers, interior designers who want client satisfaction only and their main aim is to bring always a new creativity in each and every project. 
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_two">
                <img
                  src="https://img.icons8.com/color/48/000000/design--v1.png"
                  alt="Location"
                  height="50px"
                  width="50px"
                  style={{ marginTop: -25 }}
                />
              </span>
              <h6>100% Customised Design</h6>
              <p>
                We also design award-winning custom house plans. Architect's Team has been designing homes for clients'since for nearly 5 years.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_two">
                <img
                  src="https://img.icons8.com/color/48/000000/goal--v1.png"
                  alt="Location"
                  height="50px"
                  width="50px"
                  style={{ marginTop: -25 }}
                />
              </span>
              <h6>High Accuracy Drawings</h6>
              <p>
                All drawings checked by team, high aesthetic quality in a work o
                art, it is nevertheless an important .
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_two">
                <img
                  src="https://img.icons8.com/color/48/000000/hourglass-sand-bottom--v1.png"
                  alt="Location"
                  height="50px"
                  width="50px"
                  style={{ marginTop: -25 }}
                />
              </span>
              <h6>Time Saving</h6>
              <p>
                Energy Time saving house design from us. The planning and
                designing process is also required less time to look into a
                proper designs that can be provide comfort, satisfaction, and
                living standard.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              {" "}
              <span class="icon feature_box_col_two">
                <img
                  src="https://img.icons8.com/color/48/000000/price-comparison.png"
                  alt="Location"
                  height="50px"
                  width="50px"
                  style={{ marginTop: -25 }}
                />
              </span>
              <h6>Cost Saving</h6>
              <p>
                Tested ,Quality, value engineered house plans utilizing a grid
                system layout provide affordable, cost-effective construction
                and use building materials with proper grading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCards;
