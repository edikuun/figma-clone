import { Container, Row, Col } from 'react-bootstrap';
import LeftPanel from './sections/left-panel';
import MainCanvas from './sections/main-canvas';
import RightPanel from './sections/right-panel';
import { IComponent } from '.';

const Main = ({
  componentList,
  onChooseComponent,
  onClickComponent,
  selectedComponent,
}: {
  componentList: IComponent[];
  onChooseComponent: (componentName: string) => void;
  onClickComponent: (event: any, componentName: string) => void;
  selectedComponent: IComponent | null | undefined;
}) => (
  <Container className="Main" fluid>
    <Row className="Row">
      <Col className="Left-Panel">
        <LeftPanel
          componentList={componentList}
          onChooseComponent={onChooseComponent}
        />
      </Col>
      <Col id="canvas" className="Canvas" xs={8}>
        <MainCanvas
          componentList={componentList}
          onClickComponent={onClickComponent}
        />
      </Col>
      <Col className="Right-Panel">
        <RightPanel selectedComponent={selectedComponent} />
      </Col>
    </Row>
  </Container>
);

export default Main;
