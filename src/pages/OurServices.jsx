import React from "react";
import {Row,Col} from 'react-bootstrap';

function OurServices() {
    return (
            <div>
                <div style={{marginTop:'50px'}}>
                    <h3 style={{textAlign:'center'}}>We focus on the B2B segment and offer the following services:</h3>
                    <Row style={{marginTop:'50px'}}>
                        <Col xl ={6}>
                        <h5><b>Customer support</b></h5>
                        <ul>
                            <li>In-and outbound contacts to existing customers</li>
                            <li>Managing & growing current business</li>
                            <li>Acquiring new business</li>
                            <li>Conducting customers’ satisfaction surveys</li>
                        </ul>
                        <h5><b>Qualifying leads</b></h5>
                        <ul>
                            <li>Follow up on the leads received by our customers.</li>
                            <li>Qualify the leads and transfer them to the Sales teams of our customers.</li>
                        </ul>
                     </Col>
                     <Col xl={6}>
                     <h5><b>Market assessment</b></h5>
                        <ul>
                            <li>Customized market research</li>
                            <li>Market assessment for new product launch</li>
                            <li>Interviews of market players to define their needs for innovation projects</li>
                            <li>Competition analysis</li>
                        </ul>
                        <h5><b>Marketing support</b></h5>
                        <ul>
                            <li>Market segmentation</li>
                            <li>Support for creating Value Propositions</li>
                        </ul>

                     </Col>
                    </Row>
                </div>
            </div>   

    )
}
export default OurServices