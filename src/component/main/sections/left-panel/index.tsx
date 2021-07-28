import { Fragment } from 'react';
import { Nav } from 'react-bootstrap';

interface IComponent {
  name: string;
  description: string;
}

interface IPanelProps {
  componentList: IComponent[];
  onSelectComponent: (componentName: string) => void;
}

const LeftPanel = ({ componentList, onSelectComponent }: IPanelProps) => (
  <Fragment>
    <div className="mb-4 fw-bold">Left Panel</div>
    <Nav className="flex-column">
      {componentList.map((component, index) => (
        <Nav.Link key={index} onClick={() => onSelectComponent(component.name)}>
          {component.name}
        </Nav.Link>
      ))}
    </Nav>
  </Fragment>
);

export default LeftPanel;
