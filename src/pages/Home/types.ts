export interface CardType {
    id: number;
    name: string;
    price: number;
    description: string;
    image : string;
    category: string;
}

export enum Categories {
   all = 'לכל הקטגוריות',
   shabat = 'שבת',
   hagim = 'הלכות חגי ישראל',
   sederYom = 'הלכות סדר יום'
}