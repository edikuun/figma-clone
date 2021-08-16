import { IComponent } from '../../main/index';

/**
 * Converts component list to components with css values
 *
 * @param componentList
 * @returns
 */
export function convertComponent(componentList: IComponent[]): IComponent[] {
  // sets the height and width of the cards on load
  let newComponentList = [...componentList];
  const cards = document.getElementsByClassName(
    'Card'
  ) as HTMLCollectionOf<HTMLDivElement>;

  Array.from(cards).forEach((card: HTMLDivElement) => {
    const height = card.offsetHeight;
    const width = card.offsetWidth;
    const cardIndex = newComponentList.findIndex(
      ({ name }) => name === card.id
    );

    newComponentList[cardIndex] = {
      ...componentList[cardIndex],
      properties: { height, width },
    };
  });

  return newComponentList;
}
