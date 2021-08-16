import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './index.scss';
import View from './View';

import { DEFAULT_COMPONENT_LIST } from '../main/constants';
import { convertComponent } from '../main/utils';
export interface IProperty {
  bottom?: string | undefined;
  componentName?: string;
  height?: string | number;
  left?: string | undefined;
  position?: string;
  right?: string | undefined;
  top?: string | undefined;
  width?: string | number;
}

export interface IComponent {
  name: string;
  description?: string;
  properties?: IProperty;
}

const MainComponent: FC = () => {
  const [componentList, setComponentList] = useState<IComponent[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<IComponent | null>(
    null
  );

  const newComponents = useMemo(
    () => DEFAULT_COMPONENT_LIST as IComponent[],
    []
  );

  useEffect(() => {
    setComponentList(convertComponent(newComponents));
  }, [newComponents]);

  useEffect(() => {
    const cards = document.getElementsByClassName(
      'Card'
    ) as HTMLCollectionOf<HTMLDivElement>;
    Array.from(cards).forEach((card) => {
      if (selectedComponent?.name !== card.id) {
        card.style.backgroundColor = '';
      }
    });
  }, [selectedComponent]);

  /**
   * Sets the the current selected element in the state
   * @param element
   */
  const onSelectComponent = useCallback(
    (element: HTMLElement | null, componentName: string) => {
      // do nothing when element is null
      if (!element) {
        return;
      }

      const { position } = window.getComputedStyle(element);
      const { top, left } = element.getBoundingClientRect();

      // set backgroundColor highlight when selected
      element.style.backgroundColor = 'lightblue';

      const bottom = Number(
        window.innerHeight - top - element.offsetHeight
      ).toFixed(2);
      const right = Number(
        window.innerWidth - left - element.offsetWidth
      ).toFixed(2);

      const height = element.offsetHeight;
      const width = element.offsetWidth;

      // update element boundaries
      setSelectedComponent({
        name: componentName,
        properties: {
          componentName,
          position,
          top: top.toFixed(2),
          bottom,
          left: left.toFixed(2),
          right,
          height,
          width,
        },
      });
    },
    [setSelectedComponent]
  );

  /**
   * Chosses the current element based on the component name selected
   * @param componentName
   */
  const onChooseComponent = (componentName: string) => {
    const element = document.getElementById(componentName);

    onSelectComponent(element, componentName);
  };

  /**
   * Sets the current element based on the component clicked
   * @param event
   */
  const onClickComponent = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    componentName: string
  ) => {
    const { currentTarget: element } = event;
    onSelectComponent(element, componentName);
  };

  /**
   * This function retrieves all the values to be passed down as props
   * @returns
   */
  const getProps = () => {
    return {
      componentList,
      onChooseComponent,
      onClickComponent,
      selectedComponent,
    };
  };

  return <View {...getProps()} />;
};

export default MainComponent;
