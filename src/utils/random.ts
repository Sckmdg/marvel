import {Format, IComics, IDetailed} from 'interfaces';
import { TITLES, PRICES, IMAGES, CREATORS, FORMAT, PAGES, CHARACTERS, DIAMOND_CODE, YEAR_OF_RELEASE } from 'mocks';

export const getRandom = (list: string[]): string => {
    return list[Math.floor(Math.random() * list.length)];
};

export const generateRandomCover = (): IComics => {
  return {
      title: getRandom(TITLES),
      price: Array.from({ length: Math.floor(Math.random() * 4) || 1 }, () => getRandom(PRICES)),
      img:   getRandom(IMAGES),
  };
};

export const generateCoverList = (): IComics[] => {
    return Array.from({ length: 20 }, (_, i) => generateRandomCover());
};

export const generateRandomDetailed = (): IDetailed => {
    return {
        title: getRandom(TITLES),
        yearOfRelease: getRandom(YEAR_OF_RELEASE),
        format: getRandom(FORMAT) as Format,
        pages: Number(getRandom(PAGES)),
        characters: Array.from({ length: Math.floor(Math.random() * 4) || 1 }, () => getRandom(CHARACTERS)),
        creators: Array.from({ length: Math.floor(Math.random() * 4) || 1 }, () => getRandom(CREATORS)),
        diamondCode: getRandom(DIAMOND_CODE),
        price: Array.from({ length: Math.floor(Math.random() * 4) || 1 }, () => getRandom(PRICES)),
        image: getRandom(IMAGES),
    }
};