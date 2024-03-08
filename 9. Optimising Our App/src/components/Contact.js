import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2tocwyr', 'template_wcn3usn', form.current, {
        publicKey: 's2RpikUEUAW65oMEE',
      })
      .then(
        () => {
            toast.success("Your email has been sent successfully!",{
              position:"bottom-right"
              });
        },
        (error) => {
          toast.error('Sorry, there was an error sending your email. Please try again later.',{
            position:"bottom-right"
            });
        },
      );
  };




  return (
    
    <div className="contact-body">
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">Mail: berasrijit51@gmail.com</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="app-form-group">
                  <input type='text' name="user_name" className="app-form-control" placeholder="NAME"/>
                </div>
                <div className="app-form-group">
                  <input  type='email' name="user_email" className="app-form-control" placeholder="EMAIL" />
                </div>
                {/* <div className="app-form-group">
                  <input className="app-form-control" placeholder="CONTACT NO" />
                </div> */}
                <div className="app-form-group message">
                  <input  type='text' name="message" className="app-form-control" placeholder="MESSAGE" />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button" >SEND</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="credits">
          Connect with me
          <a className="credits-link" href="https://twitter.com/yoursrijit" target="_blank">
            <svg className="dribbble" viewBox="0 0 200 200">
              <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
                <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth="20"></path>
                <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth="20"></path>
                <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth="20"></path>
              </g>
            </svg>
            Srijit Bera
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
