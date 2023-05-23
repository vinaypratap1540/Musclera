import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={{background:"#ffb116"}}>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Our state-of-the-art facilities, experienced trainers, and
            supportive community are here to help you reach your fitness goals.
            Join us today and start your journey to a healthier you.
          </p>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/itsvinaypratap/" target="_blank" rel="">
              <FaLinkedin />
            </a>
            <a href="https://github.com/vinaypratap1540" target="_blank" rel="">
              <AiFillGithub />
            </a>
            <a href="https://twitter.com/BANNAJAIHIND" target="_blank" rel="">
              <AiOutlineTwitter />
            </a>
            <a href="https://www.instagram.com/kunwar_pratap_1540/" target="_blank" rel="">
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/constact">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Plans</Link>
          <Link to="/trainers">Trainers</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small> &copy; Vinay Pratap Singh Sirohiya </small>
      </div>
    </footer>
  );
};

export default Footer;
