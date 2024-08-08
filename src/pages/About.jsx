import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                At Tripathi Travels, safety is our top priority. We are committed to providing safe ride solutions that you can trust. 
                Our fleet of vehicles is meticulously maintained and regularly inspected to ensure they meet the highest safety standards. 
                Additionally, all our drivers undergo thorough background checks and are trained to prioritize your safety and comfort throughout your journey.
                </p>

                <p className="section__description">
                We understand the importance of peace of mind when traveling, which is why we go the extra mile to implement strict safety measures. 
                From adhering to traffic regulations to sanitizing our vehicles regularly, 
                we strive to provide a safe and worry-free experience for every passenger. 
                When you choose Tripathi Travels, you can rest assured that you are in safe hands.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4><a href="tel:9022388185">+91 9022 388 185</a></h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Reviews</h6>
              <h2 className="section__title">Our Customers</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
