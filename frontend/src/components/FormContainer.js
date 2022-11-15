import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components placed inside the FormContainer component will be passed as 'children' here
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
