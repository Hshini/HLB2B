
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiMailSend} from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { BsFacebook,BsFillTelephoneFill,BsInstagram,BsLinkedin} from "react-icons/bs";
import { Row, Col } from 'react-bootstrap';
 const Contact = () => {
  function refreshPage(){
    setTimeout(()=>{
      window.location.reload();
  }, 1000); 
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kql931g', 'template_91207qo', form.current, 'nNwQl30MNPJoEpDHO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <Row  >
        <Col xl={6} >
          <div style={{marginLeft:'20px',marginTop: '50px'}}>
            <h4 style={{lineHeight:'80px'}}>You are interested in our services?<br></br>
              Please get in touch with us to discuss your needs
              and our offers specifically targeted to your
              company.
            </h4>
          <h4>Looking forward to talking to you.</h4>
          </div>
          <div style={{display:'flex',marginLeft:'20px',marginRight:'7px',marginTop:'70px',justifyContent:'center'}}>
            <h1><a href="mailto:hlb2b23@gmail.com"><BiMailSend/></a></h1>
            <h1><a href="tel:+41789733528"><BsFillTelephoneFill/></a></h1>
            <h1><a href="https://www.linkedin.com/in/philippe-lazerme-8b5392a6/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></h1>
            <h1><a href="https://www.facebook.com/romaio.hoti"  target="_blank" rel="noopener noreferrer"><BsFacebook/></a></h1>
            <h1><a href="https://www.instagram.com/fatmirhoti1/"  target="_blank" rel="noopener noreferrer"><BsInstagram/></a></h1>
            <h1><a href="https://goo.gl/maps/eDgVxoLxJCKizk2q6"  target="_blank" rel="noopener noreferrer"><VscLocation/></a></h1>
          </div>
        </Col>
        <Col xl={6}>
          <form ref={form} onSubmit={sendEmail} style={{ marginTop: '20px' }}>
            <div>
              <label className="form-label" htmlFor="name">
                Name *
              </label>
              <input className="form-control" type="text" name="name" required />
            </div>
            <div >
              <label className="form-label" htmlFor="lastName">
                Last Name *
              </label>
              <input className="form-control" type="text" name="lastName" required />
            </div>
            <div>
              <label className="form-label" htmlFor="company">
                Company Name *
              </label>
              <input className="form-control" type="text" name="company" required />
            </div>
            <div >
              <label className="form-label" htmlFor="email">
                Email *
              </label>
              <input className="form-control" type="email" name="email" required />
            </div>
            <div>
              <label className="form-label" htmlFor="phone">
                Telephone Number*
              </label>
              <input className="form-control" type="tel" name="phone" required />
            </div>
            <div >
              <label className="form-label" htmlFor="message">
                Message *
              </label>
              <textarea className="form-control" name="message" required />
            </div >
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit" value="Send"  onClick={ refreshPage } style={{ color: 'white', marginTop: '15px', justifyContent: 'center' }} >
               
                Send
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  )
}
 export default Contact;