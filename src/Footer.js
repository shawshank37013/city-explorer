import React from 'react';
import {
  Col,
  Row,
 } from 'react-bootstrap';

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <Row>
          <Col md={4}>
       
                <img src="https://secureservercdn.net/166.62.110.60/1hg.c4a.myftpupload.com/wp-content/uploads/2021/09/lm-1.png" alt="Pivot Tech School" />          <h4>Pivot Technology School </h4>
          </Col>
          <Col md={{ span: 3, offset: 5 }}>
            <small>
              <a href="https://locationiq.com">Search by LocationIQ.com</a>
            </small>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer;