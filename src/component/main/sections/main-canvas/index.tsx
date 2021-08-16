import { Fragment } from 'react';
import { IComponent } from '../../index';
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { DEFAULT_CARD_IMAGE } from '../../constants';

const MainCanvas = ({
  componentList,
  onClickComponent,
}: {
  componentList: IComponent[];
  onClickComponent: (event: any, componentName: string) => void;
}) => (
  <Fragment>
    <div className="mb-4 fw-bold">Main Canvas</div>
    <Row className="mx-auto">
      {componentList.map(({ name, description, properties }, index) => (
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
              style={{ width: '18rem' }}
            >
              <Card.Img variant="top" src={DEFAULT_CARD_IMAGE} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
            </Card>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  </Fragment>
);

export default MainCanvas;
