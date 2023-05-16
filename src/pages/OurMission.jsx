import React from "react";
import {Row,Col} from 'react-bootstrap';
import missionImg from '../assets/images/mission.jpg'
function OurMission() {
    return (
        <div>
            <div style={{marginTop:'50px'}}>
                <Row>
                    <Col xl ={4} >
                        <p>
                            Our mission is to support companies that want to optimize their resources and focus on tasks they are better equipped to fulfil.<br></br>

                            We take care of activities that will bring additional value to our clients.<br></br>

                            As a small enterprise we are very close to our customers and provide a customized service.<br></br>

                            We want our clients to be happy with our work.<br></br>
                        </p>
                    </Col>
                    <Col xl={8}><img src={missionImg} alt="mission img" className="img-fluid" style={{borderRadius:'1000px', width: '1000px', height: '500px'}}/></Col>
                </Row>          
             </div>
         </div>
    )
}

export default OurMission