import { Fragment } from 'react';
import { IProperty } from '../../index';

const RightPanel = ({
  selectedComponent,
}: {
  selectedComponent: IProperty | null | undefined;
}) => (
  <Fragment>
    <div className="mb-4 fw-bold">Right Panel</div>
    <div>Position: {selectedComponent?.position} </div>
    <div>Top: {selectedComponent?.top} </div>
    <div>Bottom: {selectedComponent?.bottom} </div>
    <div>Left: {selectedComponent?.left} </div>
    <div>Right: {selectedComponent?.right}</div>
  </Fragment>
);

export default RightPanel;
