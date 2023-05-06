import React from "react";
import {Button,Row,Col,Container} from 'react-bootstrap';
import missionImg from '../assets/images/mission.jpg'
function OurMission() {
    return (
        <>
            <div className="mb-2" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button variant="info" size="lg">
                   Our Mission
                </Button>{' '}
            </div>
            <Container style={{ display: 'flex', justifyContent:'start'}}>
                <Row>
                    <Col xl ={6} >
                        <p style={{color:'#0d6efd'}}>
                            Our mission is to support companies that want to optimize their resources and focus on tasks they are better equipped to fulfil.<br></br>

                            We take care of activities that will bring additional value to our clients.<br></br>

                            As a small enterprise we are very close to our customers and provide a customized service.<br></br>

                            We want our clients to be happy with our work.<br></br>
                        </p>
                    </Col>
                    <Col xl={6}><img src={missionImg} alt="mission img" height='400px' width ='500px' style={{borderRadius:'80px'}}/></Col>
                </Row>
            </Container> 
          
        </>

    )
}

export default OurMission