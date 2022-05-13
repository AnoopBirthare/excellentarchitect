import React, { useEffect } from "react";
import "./Stats.css";

const Stats = () => {
  useEffect(() => {
    // $(document).ready(function ($) {
    //   $(".count-number").counterUp({
    //     delay: 10,
    //     time: 10000,
    //   });
    // });
  });
  return (
    <>
      <div class="timer count-title count-number" style={{ fontSize: 30 }}>
        What We Achieve
      </div>
      <div class="timer count-title count-number" style={{ fontSize: 18 }}>
        Our Values Equity, Diversity , Professionalism, Team and Our Work
        Priority.
      </div>
      <section id="statistic" class="statistic-section one-page-section">
        <div class="container">
          <div class="row text-center">
            <div class="col-xs-12 col-md-3">
              <div class="counter">
                <i class="fa fa-coffee fa-2x stats-icon"></i>
                <h2 class="timer count-title count-number">999+</h2>
                <div class="stats-line-black"></div>
                <p class="stats-text">Projects Done</p>
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="counter">
                <i class="fa fa-code fa-2x stats-icon"></i>
                <h2 class="timer count-title count-number">100+</h2>
                <div class="stats-line-black"></div>
                <p class="stats-text">Cities Covered</p>
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="counter">
                <i class="fa fa-clock-o fa-2x stats-icon"></i>
                <h2 class="timer count-title count-number">800+</h2>
                <div class="stats-line-black"></div>
                <p class="stats-text">Residential Project Done</p>
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="counter">
                <i class="fa fa-laptop fa-2x stats-icon"></i>
                <h2 class="timer count-title count-number">100+</h2>
                <div class="stats-line-black"></div>
                <p class="stats-text">Commercial Project Done</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
