
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
        name: '5%',
        discountRate: 0.05
    },
    {
        id: '2',
        name: '7%',
        discountRate: 0.07
    },
    {
        id: '3',
        name: '10%',
        discountRate: 0.1
    }
]

module.exports = {
    menus,
    coupons,
}
