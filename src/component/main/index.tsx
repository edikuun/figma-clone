import { Component } from 'react';
import './index.scss';
import View from './View';

import { DEFAULT_COMPONENT_LIST } from '../main/constants';
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

interface IProps {}

export interface IComponent {
  name: string;
  description?: string;
  properties?: IProperty;
}

interface IState {
  componentList: IComponent[];
  selectedComponent?: IComponent | null;
}

export default class index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      componentList: DEFAULT_COMPONENT_LIST,
      selectedComponent: null,
    };
  }

  componentDidMount() {
    // sets the height and width of the cards on load
    let newComponentList = [...this.state.componentList];
    const cards = document.getElementsByClassName('Card');
    Array.from(cards).forEach((card: any) => {
      const height = card.offsetHeight;
      const width = card.offsetWidth;
      const cardIndex = newComponentList.findIndex(
        (component) => component.name === card.id
      );

      newComponentList[cardIndex] = {
        ...this.state.componentList[cardIndex],
        properties: { height, width },
      };
    });
    this.setState({ componentList: newComponentList });
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    // this process loops through all card component ensuring that their backgroundColor is
    // set to default once they are deselected
    if (prevState.selectedComponent !== this.state.selectedComponent) {
      const cards = document.getElementsByClassName('Card');
      Array.from(cards).forEach((card: any) => {
        if (this.state.selectedComponent?.name !== card.id) {
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
    const { position } = window.getComputedStyle(element);
    const { top, left } = element.getBoundingClientRect();

    // set backgroundColor highlight when selected
    element.style.backgroundColor = 'lightblue';

    // update element boundaries
    this.setState({
      selectedComponent: {
        name: componentName,
        properties: {
          componentName,
          position,
          top: Number(top).toFixed(2),
          bottom: Number(
            window.innerHeight - top - element.offsetHeight
          ).toFixed(2),
          left: Number(left).toFixed(2),
          right: Number(window.innerWidth - left - element.offsetWidth).toFixed(
            2
          ),
          height: element.offsetHeight,
          width: element.offsetWidth,
        },
      },
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

  /**
   * This function retrieves all the values to be passed down as props
   * @returns
   */
  getProps = () => {
    return {
      componentList: this.state.componentList,
      onSelectComponent: this.onSelectComponent,
      onClickComponent: this.onClickComponent,
      selectedComponent: this.state.selectedComponent,
    };
  };

  render() {
    return <View {...this.getProps()} />;
  }
}
