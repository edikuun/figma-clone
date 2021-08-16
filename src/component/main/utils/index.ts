import { IComponent } from '../../main/index';
export const convertComponent = (componentList: IComponent[]): IComponent[] => {
  // sets the height and width of the cards on load
  let newComponentList = [...componentList];
  const cards = document.getElementsByClassName(
    'Card'
  ) as HTMLCollectionOf<HTMLDivElement>;
  Array.from(cards).forEach((card) => {
    const height = card.offsetHeight;
    const width = card.offsetWidth;
    const cardIndex = newComponentList.findIndex(
      (component) => component.name === card.id
    );

    newComponentList[cardIndex] = {
      ...componentList[cardIndex],
      properties: { height, width },
    };
  });

  return newComponentList;
};
