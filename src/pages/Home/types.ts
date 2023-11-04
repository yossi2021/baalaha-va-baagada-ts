export interface CardType {
    id: number;
    name: string;
    // price: number;
    description: string;
    image : string;
    category: Categories;
}

export enum Categories {
   all = 'לכל הקטגוריות',
   shabat = 'הלכות שבת',
   hagim = 'הלכות חגי ישראל',
   sederYom = 'הלכות סדר יום',
   nashim = 'הלכות נשים',
   musar = ' ספרי מוסר',
   shonot = 'שונות'
}