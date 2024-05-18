import React from 'react';
import contactImg from "../img/web_developer_portfolio_cat sitting.webp";
import github from "../img/icons/github-mark.svg";
import mail from "../img/icons/email-svgrepo-com.svg";
import linkedin from "../img/icons/linkedin-svgrepo-com.svg";
import ContactItem from "./layout/ContactItem";

function Contact() {
    return (
        <section id="contact" className="container d-flex justify-content-center align-items-center flex-column py-5">
            <h2 className="text-uppercase fw-bold text-secondary text-center mb-5">Contact</h2>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img className="img-contact rounded-3" src={contactImg} alt="Contactez-moi"
                         style={{maxWidth: '100%'}}/>
                </div>
                <div className="col-md-6">
                    <div className="contact-info">
                        <p>Vous pouvez me joindre par les moyens suivants :</p>
                        <ul className="list-unstyled">
                            <ContactItem icon={mail} link="mailto:quadjovie.antonio@gmail.com">
                                quadjovie.antonio@gmail.com
                            </ContactItem>
                            <ContactItem icon={github} link="https://github.com/Lokikun5">
                                Lokikun5
                            </ContactItem>
                            <ContactItem icon={linkedin} link="https://www.linkedin.com/in/antonio-quadjovie">
                                Antonio Quadjovie
                            </ContactItem>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
