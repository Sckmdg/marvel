export interface IDetailed {
    title: string;
    format: 'Comic' | 'Magazine' | 'Digital comic';
    pages: number;
    characters: string[];
    creators: string[];
    diamondCode: string;
    price: string;
}
