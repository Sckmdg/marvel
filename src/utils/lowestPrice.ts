export const getLowerPrice = (prices: string[]):string => {
    return `${Math.min(...prices.map(price => parseFloat(price)))} €`;
}
