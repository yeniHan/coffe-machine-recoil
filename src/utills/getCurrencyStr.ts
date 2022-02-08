
const getCurrencyStr = (number: number): string => new Intl.NumberFormat('kr-WO').format(number);

export default getCurrencyStr;