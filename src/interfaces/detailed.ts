export type Format = 'Comic' | 'Magazine' | 'Digital comic';

export interface IDetailed {
    title: string;
    yearOfRelease: string;
    format: Format;
    pages: number;
    characters: string[];
    creators: string[];
    diamondCode: string;
    price: string[];
    image: string;
}
