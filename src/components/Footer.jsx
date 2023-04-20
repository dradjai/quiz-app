
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  
  const currentYear = new Date().getFullYear();
  const githubLink = "https://github.com/dradjai/quiz-app;"

  return(
    <footer>
      <Container>
        <Row>
          <Col>
      <p><small>&copy; {currentYear}</small>
      <br />
      <a href={githubLink} target="_blank" rel="noreferrer">Code in GitHub</a></p>
        </Col>
       </Row>
      </Container>
    </footer>
  )
}