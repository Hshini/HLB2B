import React from 'react'
import { BiMailSend} from "react-icons/bi";
import { BsFacebook,BsFillTelephoneFill,BsInstagram,BsLinkedin} from "react-icons/bs";
import { Row, Col } from 'react-bootstrap';


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message, company, phone, lastName } = e.target.elements
    let conFom = {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
      company: company.value,
      phone: phone.value,

    }
    console.log(conFom)
  }
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
            <h1><a href="tel:+6465496402"><BsFillTelephoneFill/></a></h1>
            <h1><a href="https://www.linkedin.com/in/philippe-lazerme-8b5392a6/"><BsLinkedin/></a></h1>
            <h1><a href="https://www.facebook.com/romaio.hoti"><BsFacebook/></a></h1>
            <h1><a href="https://www.instagram.com/fatmirhoti1/"><BsInstagram/></a></h1>
          </div>
        </Col>
        <Col xl={6}>
          <form onSubmit={onSubmit} style={{ marginTop: '20px' }}>
            <div>
              <label className="form-label" htmlFor="name">
                Name *
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div >
              <label className="form-label" htmlFor="lastName">
                Last Name *
              </label>
              <input className="form-control" type="text" id="lastName" required />
            </div>
            <div>
              <label className="form-label" htmlFor="company">
                Company Name *
              </label>
              <input className="form-control" type="text" id="company" required />
            </div>
            <div >
              <label className="form-label" htmlFor="email">
                Email *
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div>
              <label className="form-label" htmlFor="phone">
                Telephone Number*
              </label>
              <input className="form-control" type="tel" id="phone" required />
            </div>
            <div >
              <label className="form-label" htmlFor="message">
                Message *
              </label>
              <textarea className="form-control" id="message" required />
            </div >
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit" style={{ color: 'white', marginTop: '15px', justifyContent: 'center' }} >
                {formStatus}
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  )
}
export default Contact