import React from "react";
import about from '../assets/images/about.jpg';
import {Button,Row,Col,Container} from 'react-bootstrap';
import '../assets/css/style.css';

function AboutUs() {

    return (
        <div style={{marginTop:'10px'}}>
            <div className="mb-2" style={{ display: 'flex', justifyContent: 'center'}}>
                <Button variant="info" size="lg" style={{color:'white'}}>
                    About Us
                </Button>{' '}
            </div>
            <Container style={{ display: 'flex', justifyContent:'start'}}>
                <Row>
                    <Col xl ={6} >
                        <p style={{color:'#0d6efd'}}>
                        Our company HLB2B was created in 2023 by two partners, Fatmir Hoti and Philippe Lazerme.<br></br>

                        Fatmir is an Albanian citizen that has lived for many years in Switzerland. <br></br>

                        He oversees the administrative tasks of the company and takes care of the relationships with the Albanian administration.<br></br>

                        His deep understanding of the Albanian culture is a great asset for the recruitment of talented associates.<br></br>

                        Philippe, a French national, has more than 30 years experience in Marketing and Sales functions in the chemical industry.<br></br>

                        He has worked for international companies in the B2B sector and lead and trained international teams.<br></br>

                        He will use his strong expertise to best serve our customers.<br></br>

                        HLB2B is based in Tirana, the capital city of Albania.<br></br>

                        Our team consists of young and dynamic Albanians with an international education in sales and marketing and is full of energy and open to new challenges<br></br>
                        HLB2B is a small start-up with a very flat structure, which enables fast and customer-oriented decisions.<br></br>

                        Fatmir Hoti is the CEO, in charge of Finance, Legal, HR, IT.<br></br>

                        Philippe Lazerme is the Managing Director, responsible for Strategy, Marketing and Sales.<br></br>

                        Our operational team comprises 2 specialists: X and Y
                        </p>
                    </Col>
                    <Col xl={6}><img src={about} alt="mission img" className="img-fluid" style={{borderRadius:'80px'}}/></Col>
                </Row>
            </Container> 
        </div>
    )


}
export default AboutUs