import React from "react";
import "./TeamCards.css";
import "./Footer.css";

const TeamCards = (props) => {
  const TeamMembers = [
    {
      image:
        "https://img.icons8.com/color/500/000000/circled-user-male-skin-type-4--v1.png",
      name: "Parth",
      designation: "Team Manager",
    },
    {
      image:
        "https://img.icons8.com/color/500/000000/circled-user-male-skin-type-4--v1.png",
      name: "Aditya",
      designation: "Associate",
    },
    {
      image:
        "https://img.icons8.com/color/500/000000/circled-user-male-skin-type-4--v1.png",
      name: "Anoop",
      designation: "Team Leader",
    },
    {
      image:
        "https://img.icons8.com/color/500/000000/circled-user-male-skin-type-4--v1.png",
      name: "Rohit",
      designation: "Team Leader",
    },
  ];
  return (
    <div id="teams">
      <section class="speakers-section-three">
        <div class="container">
          <div class="sec-title text-center">
            {/* <span class="title">Team</span> */}
            <h2>Our Team</h2>
          </div>
          <div class="row">
            {TeamMembers.map((member) => {
              return (
                <div
                  class="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  key={member.name}
                >
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image">
                        <a href="#">
                          <img src={member.image} alt="" />
                        </a>
                      </figure>
                    </div>
                    <div class="info-box">
                      <h4 class="name">
                        <a href="#">{member.name}</a>
                      </h4>
                      <span class="designation">{member.designation}</span>
                    </div>
                    <div class="social-box">
                      <ul class="social-links social-icon-colored">
                        <li>
                          <a href="#">
                            <i class="icons8-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icons8-whatsapp"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icons8-linkedin-circled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icons8-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamCards;
