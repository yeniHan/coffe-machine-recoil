
const menus = [
    {
    id: '1',
    name: '아메리카노(Take out)',
    price: 500,
    isTakeout: true,
    },
    {
        id: '2',
        name: '아메리카노',
        price: 1000,
        isTakeout: false,
    },
    {
        id: '3',
        name: '카페라떼',
        price: 1500,
        isTakeout: false,
    },
    {
        id: '4',
        name: '카라멜 마끼야또',
        price: 2000,
        isTakeout: false,
    },
]

const coupons = [
    {
        id:'1',
        name: '5% 할인 쿠폰',
        discountRate: 0.05
    },
    {
        id: '2',
        name: '7% 할인 쿠폰',
        discountRate: 0.07
    },
    {
        id: '3',
        name: '10% 할인 쿠폰',
        discountRate: 0.1
    }
]

export const paymentMethods = [
    {
        id: '1',
        name: 'credit-card',
        text: '신용 카드',
        discountRate: 0
    },
    {
        id: '2',
        name: 'cash',
        text: '현금',
        discountRate: 0.05
    }
]

module.exports = {
    menus,
    coupons,
}
