import React from "react";
import fatmir from '../assets/images/fatmir.jpg';
import philippe from '../assets/images/philippe.jpg';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/style.css';

function AboutUs() {

    return (
        <div>
            <div style={{ marginTop: '50px' }}>
                <h4 style={{ textAlign:'center' }}>Our company HLB2B was created in 2023 by two partners, Fatmir Hoti and Philippe Lazerme.</h4>
                <Row>
                    <Col xl={6} >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href='https://www.facebook.com/romaio.hoti'> <img src={fatmir} alt="Miri" className="img-fluid" style={{ borderRadius: '200px', width: '200px', height: '200px', marginTop: '40px', marginRight: '20px' }} /></a>   
                        </div>
                        <p>
                            Fatmir is an Albanian citizen that has lived for many years in Switzerland. <br></br>

                            He oversees the administrative tasks of the company and takes care of the relationships with the Albanian administration.<br></br>

                            His deep understanding of the Albanian culture is a great asset for the recruitment of talented associates.<br></br>
                        </p>
                    </Col>
                    <Col xl={6} >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <a href='https://www.linkedin.com/in/philippe-lazerme-8b5392a6/'><img src={philippe} alt="philippe " className="img-fluid" style={{ borderRadius: '200px', width: '200px', height: '200px', marginTop: '40px', justifyContent: 'center' }} /> </a><br></br>
                        </div>
                        <p>
                            Philippe, a French national, has more than 30 years experience in Marketing and Sales functions in the chemical industry.<br></br>

                            He has worked for international companies in the B2B sector and lead and trained international teams.<br></br>

                            He will use his strong expertise to best serve our customers.<br></br>

                        </p>
                    </Col>
                    <Col>
                    <p>
                        HLB2B is based in Tirana, the capital city of Albania.

                        Our team consists of young and dynamic Albanians with an international education in sales and marketing and is full of energy and open to new challenges
                        HLB2B is a small start-up with a very flat structure, which enables fast and customer-oriented decisions.

                        Fatmir Hoti is the CEO, in charge of Finance, Legal, HR, IT.

                        Philippe Lazerme is the Managing Director, responsible for Strategy, Marketing and Sales.

                        Our operational team comprises 2 specialists: X and Y
                    </p>
                    </Col>
                </Row>
            </div>
        </div>

    )


}
export default AboutUs