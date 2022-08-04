import icon from './test-icon.jpg';
import netflixLogo from './img/netflix-logo.svg'
import {nanoid} from 'nanoid';

export function getTestExpenses() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(JSON.stringify(testExpenses)), 1000);
        reject(new Error('Failed to retreive test expenses. Could you please reload the page?'));
    });
}

export function getTestRecurringExpenses() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(JSON.stringify(testRecurringExpenses)), 5000);
        reject( new Error('Failed to retreive test expenses. Please reload page'));
    })
}

const testExpenses = [
    {
        invoiceId: 'MGL0988217',
        id: nanoid(),
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },

    {
        invoiceId: 'MGL0986717',
        id: nanoid(),
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },

    {
        invoiceId: 'MGL0934217',
        id: nanoid(),
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },

    {
        invoiceId: 'MGL1830007',
        id: nanoid(),
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },

    {
        invoiceId: 'MGL0983dD7',
        id: nanoid(),
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },

    {
        invoiceId: 'MGL098329898',
        id: nanoid(),
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },

    {
        invoiceId: 'MGL3383217',
        id: nanoid(),
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },

    {
        invoiceId: 'MGL5553217',
        id: nanoid(),
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },

    {
        invoiceId: 'MGL0983111',
        id: nanoid(),
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },
]

const testRecurringExpenses = [
    {
        id: nanoid(),
        description: 'Netflix Subscription',
        seller: 'Netflix',
        icon: netflixLogo,
        frequency: 'monthly',
        price: 132
    },

    {
        id: nanoid(),
        description: 'Netflix Subscription',
        seller: 'Netflix',
        icon: netflixLogo,
        frequency: 'monthly',
        price: 132
    },

    {
        id: nanoid(),
        description: 'Netflix Subscription',
        seller: 'Netflix',
        icon: netflixLogo,
        frequency: 'monthly',
        price: 132
    },
]