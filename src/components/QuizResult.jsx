import { Button, Col, Container, Row } from "react-bootstrap";

export default function QuizResult({score, quizLength, handleReset}) {
  
  const grade = score/quizLength * 100;
  const passFail = grade > 60 ? 'You Passed' : 'You Failed';

  return(
    <section>
      <Container className="quiz-result">
        <Row>
          <Col>
          <h2>Quiz Result</h2>
          <p>You scored {score} out of {quizLength} </p>
          <p>Your received {grade}%</p>
          <p>{passFail}</p>
           
          <Button onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}