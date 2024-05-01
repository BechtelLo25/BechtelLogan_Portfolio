import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import '../css/Github.css';

function Github() {
  return (
    <Row className="justify-content-center"> 
      <Col>
        <h1 className="project-heading">
          When I Code
        </h1>
        <div className="grid">
          <GitHubCalendar 
            username="BechtelLo25"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={20} 
          />
        </div>
      </Col>
    </Row>
    
  );
}

export default Github;
