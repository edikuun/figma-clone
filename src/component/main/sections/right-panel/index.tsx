import { Fragment } from 'react';
import { IComponent } from '../../index';

const RightPanel = ({
  selectedComponent,
}: {
  selectedComponent: IComponent | null | undefined;
}) => {
  return (
    <Fragment>
      <div className="mb-4 fw-bold">Right Panel</div>
      <div>Position: {selectedComponent?.properties?.position} </div>
      <div>Top: {selectedComponent?.properties?.top} </div>
      <div>Bottom: {selectedComponent?.properties?.bottom} </div>
      <div>Left: {selectedComponent?.properties?.left} </div>
      <div>Right: {selectedComponent?.properties?.right}</div>
    </Fragment>
  );
};

export default RightPanel;
