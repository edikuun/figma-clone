import { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { IComponent } from '../../index';
interface IPanelProps {
  componentList: IComponent[];
  onChooseComponent: (componentName: string) => void;
}

const LeftPanel = ({ componentList, onChooseComponent }: IPanelProps) => (
  <Fragment>
    <div className="mb-4 fw-bold">Left Panel</div>
    <Nav className="flex-column">
      {componentList.map((component, index) => (
        <Nav.Link key={index} onClick={() => onChooseComponent(component.name)}>
          {component.name}
        </Nav.Link>
      ))}
    </Nav>
  </Fragment>
);

export default LeftPanel;
