export type MenuType = {
    id: string;
    name: string;
    price: number;
    isTakeout: boolean;
}

export type SelectedMenuType = {
    menuId: string;
    amount: number;
}

export type CouponType = {
    id: string;
    name: string;
    discountRate: number;
}

export type PaymentMethod = 'cash' | 'credit-card'

export type Payment = {
    user: string;
    totalPrice: number;
    menus: MenuType[],
    selectedCoupon: CouponType[],
    paymentMethod: PaymentMethod,
}