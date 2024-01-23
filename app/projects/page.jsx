import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Projects from '@/components/Projects';
import ProjectCards from '@/components/ProjectCards'; // Import the ProjectCards component
import web1 from "@/public/web1.png";

const Page = () => {
  return (
    <section>
      <Container fluid className="project-section">
        {/* Particle component can be added here if needed */}
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {/* Example usage of ProjectCards within the Page component */}
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath={web1}
                isBlog={false}
                title="Your Project Title"
                description="Your project description goes here."
                ghLink="https://github.com/yourusername/yourproject"
                demoLink="https://yourprojectdemo.com/"
              />
            </Col>
            {/* Add more ProjectCards as needed */}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Page;
