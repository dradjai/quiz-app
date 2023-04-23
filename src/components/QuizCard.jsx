import { Col, Row, Container } from "react-bootstrap";

export default function QuizCard({quizData, quizId, quizLength, handleAnswer}) {

  return(
    <section>
      <Container className="quiz-card">
        <Row>
          <Col>
          <h2>Question: {quizId+1}</h2>
          <h2>{quizData[quizId].question}</h2>
          <ul>
            {quizData[quizId].options.map(
              (quizOption, id) => {
                return <li key={"option"+id}onClick={ () => handleAnswer(quizOption.isCorrect)
                }>{quizOption.answer}</li>
              }
              )} 
    
          </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}