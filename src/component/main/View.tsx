import { Container, Row, Col, Card } from 'react-bootstrap';
import LeftPanel from './sections/left-panel';
import { IProperty } from '.';

const Main = ({
  componentList,
  onSelectComponent,
  onClickComponent,
  selectedComponent,
}: {
  componentList: any[];
  onSelectComponent: (componentName: string) => void;
  onClickComponent: (event: any, componentName: string) => void;
  selectedComponent: IProperty | null | undefined;
}) => (
  <Container className="Main" fluid>
    <Row className="Row">
      <Col className="Left-Panel">
        Left Panel
        <LeftPanel
          componentList={componentList}
          onSelectComponent={onSelectComponent}
        />
      </Col>
      <Col id="canvas" className="Canvas" xs={8}>
        <div className="mb-4">Main Canvas</div>
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
      </Col>
      <Col className="Right-Panel">
        <div className="mb-2">Right Panel</div>
        <div>Position: {selectedComponent?.position} </div>
        <div>Top: {selectedComponent?.top} </div>
        <div>Bottom: {selectedComponent?.bottom} </div>
        <div>Left: {selectedComponent?.left} </div>
        <div>Right: {selectedComponent?.right}</div>
      </Col>
    </Row>
  </Container>
);

export default Main;
