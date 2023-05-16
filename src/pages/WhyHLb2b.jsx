import React from "react"
import {Row,Col} from 'react-bootstrap';
import whyhlImg from '../assets/images/whyhl.jpg'
function choose() {
    return (
        <div>
            <div className="mb-2" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <h1>WHY HLb2b</h1>                 
            </div>
            <Row>
            <Col xl ={8} style={{marginTop:'30px'}}>
                <ul>
                    <li>The company’s managing director has over 30 years of experience in Marketing and Sales with international B2B corporations.</li>
                    <li>Our company is located in Albania, one of the rising countries in Europe for BPO services.</li>
                    <li>Our team is young, dynamic, motivated and speaks several languages.</li>
                    <li>Our small size allows us great flexibility and to offer customized solutions.</li>
                    <li>Our fix costs are low enabling us to provide our clients with an excellent cost/performance ratio.</li>
                    <li>We combine modern marketing methods with a lot of common sense and understanding of each situation.</li>
                </ul>
            </Col>
            <Col xl={4}><img src={whyhlImg} alt=" whyhlb2b" className="img-fluid" style={{borderRadius:'80px',marginTop:'70px', width: '400px', height: '300px'}}/> </Col>
            </Row>

        </div>

    )
}
export default choose;