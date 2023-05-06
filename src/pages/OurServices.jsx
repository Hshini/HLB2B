import React from "react";
import {Button,Row,Col,Container} from 'react-bootstrap';
import serviceImg from '../assets/images/service.jpg'

function OurServices() {
    return (
        <div style={{}}>
            <div className="mb-2" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button variant="info" size="lg">
                   Our Services
                </Button>{' '}
            </div>
            <Container>
                <Row>
                    <Col xl ={4} style={{marginTop:'30px',color:'#0d6efd'}}> <h4> <b>We focus on the B2B segment We offer the following services:</b> </h4>
                    <h6><b>Customer support</b></h6>
                    <ul>
                        <li>In-and outbound contacts to existing customers</li>
                        <li>Managing & growing current business</li>
                        <li>Acquiring new business</li>
                        <li>Conducting customers’ satisfaction surveys</li>
                    </ul>
                    <h6><b>Qualifying leads</b></h6>
                    <ul>
                        <li>Follow up on the leads received by our customers.</li>
                        <li>Qualify the leads and transfer them to the Sales teams of our customers.</li>
                    </ul>
                    <h6><b>Market assessment</b></h6>
                    <ul>
                        <li>Customized market research</li>
                        <li>Market assessment for new product launch</li>
                        <li>Interviews of market players to define their needs for innovation projects</li>
                        <li>Competition analysis</li>
                    </ul>
                    <h6><b>Marketing support</b></h6>
                    <ul>
                        <li>Market segmentation</li>
                        <li>Support for creating Value Propositions</li>
                    </ul>
                    <h6><b>WHY CHOOSE HLB2B</b></h6>
                    <ul>
                        <li>The company’s managing director has over 42 years of experience in Marketing and Sales with international B2B corporations</li>
                        <li>Our company is located in Albania, one of the rising countries in Europe for BPO services.</li>
                        <li>Our team is young, dynamic, motivated and speaks several languages.</li>
                        <li>Our small size allows us great flexibility and to offer customized solutions.</li>
                        <li>Our fix costs are low enabling us to provide our clients with an excellent cost/performance ratio.</li>
                        <li>We combine modern marketing methods with a lot of common sense and understanding of each situation.</li>
                    </ul>
                </Col>
                <Col xl={6}><img src={serviceImg} alt="service imgage" className="img-fluid" style={{borderRadius:'80px',marginTop:'40px'}}/></Col>
                </Row>
            </Container>               
        </div>

    )
}
export default OurServices