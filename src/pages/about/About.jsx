import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About us" image={HeaderImage}>
        We are a community-driven gym dedicated to helping individuals achieve
        their fitness goals through excellence, support, and personalization.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="OurStoryImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Our story began with a passion for fitness and a desire to create
              a gym that was more than just a place to work out. We wanted to
              create a community where people could come together to achieve
              their fitness goals, support each other, and inspire each other to
              be their best selves.
            </p>
            <p>
              We started small, with just a handful of members and a few pieces
              of equipment, but as our community grew, so did our gym. Today, we
              offer a wide range of programs and services designed to meet the
              needs of our diverse membership, from personalized training
              programs to group fitness classes and nutritional guidance.
            </p>
            <p>
              At the heart of our gym is our commitment to excellence, support,
              and personalization. We believe that every member deserves the
              best possible experience, and we work tirelessly to ensure that
              our facilities, equipment, and services meet the highest
              standards. Above all, we are proud to be more than just a gym - we
              are a family. We believe that fitness is not just about physical
              health, but also about mental and emotional well-being, and we are
              dedicated to helping our members achieve holistic wellness and
              lead healthy, fulfilling lives.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Our vision is to create a gym that empowers and inspires
              individuals to achieve their fitness goals and lead healthy,
              fulfilling lives. We believe that fitness is more than just
              working out - it's about creating a community of support and
              encouragement, and helping each other on our fitness journeys.
            </p>
            <p>
              We strive to provide our members with the best possible
              facilities, equipment, and services, tailored to meet their
              individual needs and goals. We aim to create an inclusive and
              diverse environment where everyone feels welcome and supported,
              regardless of their age, gender, ethnicity, or fitness level. Our
              ultimate goal is to help our members achieve their full potential
              and live their best lives, both inside and outside the gym. We
              believe that by working together, we can create a better,
              healthier, and happier world.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="VisionImage" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="VisionImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Our mission is to provide our members with the tools, resources,
              and support they need to achieve their fitness goals and lead
              healthy, fulfilling lives. We believe that fitness is not a
              one-size-fits-all approach, and that each individual has unique
              needs and goals.
            </p>
            <p>
              To achieve this, we offer personalized training programs, group
              fitness classes, nutritional guidance, and a wide range of
              amenities designed to meet the diverse needs of our membership. We
              are committed to providing a welcoming and inclusive environment
              where everyone feels supported and inspired. Above all, our
              mission is to create a community of like-minded individuals who
              share our passion for fitness and wellness. We believe that
              together, we can achieve more than we ever could alone, and we are
              dedicated to helping our members reach their full potential and
              live their best lives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
