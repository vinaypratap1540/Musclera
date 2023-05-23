import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Contact = () => {
	return (
		<>
			<Header title="Get In Touch" image={HeaderImage}>
			You don't have to be great to start, but you have to start to be great.
			</Header>

			<section className="contact">
				<div className="container contact__container">
					<div className="contact__wrapper">
						<a
							href="https://www.linkedin.com/in/itsvinaypratap/"
							target="_blank"
							rel=""
						>
							<FaLinkedin />
						</a>
						<a
							href="https://www.instagram.com/kunwar_pratap_1540/"
							target="_blank"
							rel=""
						>
							<AiFillInstagram />
						</a>
						<a
							href="https://github.com/vinaypratap1540"
							target="_blank"
							rel=""
						>
							<AiFillGithub />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
