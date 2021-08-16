import { IComponent } from '../../index';
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { DEFAULT_CARD_IMAGE } from '../../constants';

import './index.scss';

const MainCanvas = ({
  componentList,
  onClickComponent,
}: {
  componentList: IComponent[];
  onClickComponent: (event: any, componentName: string) => void;
}) => {
  const compList = componentList.map(
    ({ name, description, properties }: IComponent, index) => (
      <Col className="mb-5">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="button-tooltip">
              Height: {properties?.height} Width: {properties?.width}
            </Tooltip>
          }
        >
          <Card
            className="Card"
            id={name}
            key={index}
            onClick={(event) => onClickComponent(event, name)}
          >
            <Card.Img variant="top" src={DEFAULT_CARD_IMAGE} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </OverlayTrigger>
      </Col>
    )
  );
  return (
    <>
      <div className="mb-4 fw-bold">Main Canvas</div>
      <Row className="mx-auto">{compList}</Row>
    </>
  );
};

export default MainCanvas;
