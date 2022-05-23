import {Row, Col} from 'reactstrap' ;

function Card(props) {

  return (
    <div style={{backgroundColor:"#f5f5f5", padding:20, marginBottom:30}}>
      <Row>
        <Col md="2">
          <h6>Prompt</h6>
        </Col>
        <Col md="10">
          <p>{props.result.prompt}</p>
        </Col>
      </Row>
      <Row>
        <Col md="2">
          <h6>Response</h6>
        </Col>
        <Col md="10">
          <p>{props.result.response}</p>
        </Col>
      </Row>
      <Row>
        <Col md="2">
          <h6>AI Engine</h6>
        </Col>
        <Col md="10">
          <p>{props.result.engine}</p>
        </Col>
      </Row>
    </div>
)} ;

export default Card ;
