import { Fragment } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const MainCanvas = ({
  componentList,
  onClickComponent,
}: {
  componentList: any[];
  onClickComponent: (event: any, componentName: string) => void;
}) => (
  <Fragment>
    <div className="mb-4 fw-bold">Main Canvas</div>
    <Row className="mx-auto">
      {componentList.map(({ name, description }, index) => (
        <Col className="mb-5">
          <Card
            className="Card"
            id={name}
            key={index}
            onClick={(event) => onClickComponent(event, name)}
            style={{ width: '18rem' }}
          >
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Fragment>
);

export default MainCanvas;
