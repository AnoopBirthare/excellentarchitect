import React from "react";
import "./TeamCards.css";
import "./Footer.css";

const TeamCards = () => {
  const TeamMembers = [
    {
      image: "https://i.ibb.co/8x9xK4H/team.jpg",
      name: "Parth",
      designation: "Team Manager",
    },
    {
      image: "https://i.ibb.co/8x9xK4H/team.jpg",
      name: "Aditya",
      designation: "Associate",
    },
    {
      image: "https://i.ibb.co/8x9xK4H/team.jpg",
      name: "Parth",
      designation: "Team Leader",
    },
    {
      image: "https://i.ibb.co/8x9xK4H/team.jpg",
      name: "Parth",
      designation: "Team Leader",
    },
  ];
  return (
    <>
      <section class="speakers-section-three">
        <div class="container">
          <div class="sec-title text-center">
            <span class="title">Team</span>
            <h2>Our Team</h2>
          </div>
          <div class="row">
            {TeamMembers.map((member) => {
              return (
                <div class="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
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
    </>
  );
};

export default TeamCards;
