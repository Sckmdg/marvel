import { TITLES, PRICES, IMAGES } from 'mocks/cover';

export const getRandom = (list: string[]): string => {
    return list[Math.floor(Math.random() * list.length)];
};

export const generateRandomCover = () => {
  return {
      title: getRandom(TITLES),
      price: getRandom(PRICES),
      img:   getRandom(IMAGES),
  };
};

export const generateCoverList = () => {
    return Array.from({ length: 20 }, (_, i) => generateRandomCover());
};
