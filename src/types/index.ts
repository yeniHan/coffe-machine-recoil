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

export type PaymentMethodType = {
    id: string;
    name: string;
    text: string;
    discountRate: number;
}

export type PaymentType = {
    user: string;
    totalPrice: number;
    menus: string[];
    selectedCoupon?: string;
    paymentMethod?: string;
}