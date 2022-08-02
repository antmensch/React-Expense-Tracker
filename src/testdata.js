import icon from './test-icon.jpg'

export function getTestExpenses() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(JSON.stringify(testExpenses)), 10000);
        reject(new Error('Failed to retreive test expenses. Could you please reload the page?'));
    });
}

const testExpenses = [
    {
        invoiceId: 'MGL0988217',
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
        pictureLink: '#',
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },

    {
        invoiceId: 'MGL098329898',
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
        pictureLink: icon,
        description: 'Iphone 13 Pro Max',
        vendor: 'Apple Inc.',
        type: 'Mobile',
        amount: 250.45,
        date: '14 Apr 2022',    // Date and time to be received from firebase database
        time: '8:00 PM'         // Date and time to be received from firebase database
    },
]