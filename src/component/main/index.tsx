import { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LeftPanel from '../ui/left-panel';
import './index.scss';

interface IProperty {
  componentName: string;
  position: string;
  top: string;
  bottom: string;
  left: string;
  right: string;
}

interface IProps {}

interface IState {
  componentList: any[];
  selectedComponent?: IProperty | null;
}

export default class index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      componentList: [
        {
          name: 'Component One',
          description: 'This is component one',
        },
        {
          name: 'Component Two',
          description: 'This is component two',
        },
        {
          name: 'Component Three',
          description: 'This is component three',
        },
      ],
      selectedComponent: null,
    };
  }
  componentDidUpdate(prevProps: IProps, prevState: IState) {
    // this process loops through all card component ensuring that their backgroundColor is
    // set to default once they are deselected
    if (prevState.selectedComponent !== this.state.selectedComponent) {
      const cards = document.getElementsByClassName('Card');
      Array.from(cards).forEach((card: any) => {
        if (this.state.selectedComponent?.componentName !== card.id) {
          card.style.backgroundColor = null;
        }
      });
    }
  }

  /**
   * Sets the the current selected element in the state
   * @param element
   */
  setSelectedComponent = (element: any, componentName: string) => {
    const { position, height, width } = window.getComputedStyle(element);

    element.style.backgroundColor = 'lightblue';

    this.setState({
      selectedComponent: {
        componentName,
        position: `${position} px`,
        top: `${window.pageYOffset + element.getBoundingClientRect().top} px`,
        bottom: `${
          window.pageYOffset + element.getBoundingClientRect().bottom
        } px`,
        left: `${window.pageXOffset + element.getBoundingClientRect().left} px`,
        right: `${
          window.pageXOffset + element.getBoundingClientRect().right
        } px`,
      },
    });
  };

  onDeselectComponent = () => {
    this.setState({
      selectedComponent: null,
    });
  };

  /**
   * Sets the current element based on the component name selected
   * @param componentName
   */
  onSelectComponent = (componentName: string) => {
    const element = document.getElementById(componentName);

    this.setSelectedComponent(element, componentName);
  };

  /**
   * Sets the current element based on the component clicked
   * @param event
   */
  onClickComponent = (event: any, componentName: string) => {
    const { currentTarget: element } = event;
    this.setSelectedComponent(element, componentName);
  };

  render() {
    return (
      <Container className="Main" fluid>
        <Row className="Row">
          <Col className="Left-Panel">
            Left Panel
            <LeftPanel
              componentList={this.state.componentList}
              onSelectComponent={this.onSelectComponent}
            />
          </Col>
          <Col className="Canvas" xs={8}>
            <div className="mb-4">Main Canvas</div>
            <Row className="mx-auto">
              {this.state.componentList.map(({ name, description }, index) => (
                <Col className="mb-5">
                  <Card
                    className="Card"
                    id={name}
                    key={index}
                    onClick={(event) => this.onClickComponent(event, name)}
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
            <div>Position: {this.state.selectedComponent?.position} </div>
            <div>Top: {this.state.selectedComponent?.top} </div>
            <div>Bottom: {this.state.selectedComponent?.bottom} </div>
            <div>Left: {this.state.selectedComponent?.left} </div>
            <div>Right: {this.state.selectedComponent?.right}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}
