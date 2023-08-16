import { data } from './../pages/Home/data';

export interface Offer {
    id: number;
    date: string;
    location: string;
    price: number
}

    export const dataOffers = [
        {
            id: 1,
            date: '22/10/2022',
            location: 'A day in Disneyland, Florida',
            price: 350
        },
        {
            id: 2,
            date: '01/10/2022',
            location: 'New York, USA',
            price: 800
        },
        {
            id: 3,
            date: '05/10/2022',
            location: 'The great park, Somewhere',
            price: 995
        },
    ];

    