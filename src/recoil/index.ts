import {atom, RecoilLoadable, selector} from 'recoil';
import {CouponType, MenuType, PaymentMethodType, SelectedMenuType, PaymentType} from "../types";
import {getCoupons, getMenus, getPaymentMethods} from "../apiCalls";

export const menusState = selector<MenuType[]>({
    key: 'menusState',
    get: async () => {
        const { data } = await getMenus()
        return data;
    }
})

export const selectedMenuInfoState = atom<SelectedMenuType[]>({
    key: 'selectedMenuIdsState',
    default: [],
})

export const selectedMenusState = selector<(MenuType & { amount: number }) []>({
    key: 'selectedMenusState',
    get: ({get}) => {
        const selectedMenuIds = get(selectedMenuInfoState);
        const allMenus = get(menusState);
        const selectedMenus = [] as (MenuType & { amount: number }) []
        selectedMenuIds.forEach((v) => {
            const menuData = allMenus.find((vv) => v.menuId === vv.id)
            if(menuData) {
                selectedMenus.push({
                    ...menuData,
                    amount: v.amount,
                })
            }
        })

        return selectedMenus;
    }
})

export const couponsState = selector<CouponType[]>({
    key: 'couponsState',
    get: async () => {
        const { data } = await getCoupons()
        return data;
    },

})

export const selectedCouponState = atom<CouponType|null>({
    key: 'selectedCouponState',
    default: null,
})


export const paymentMethodsState = selector<PaymentMethodType[]>({
    key: 'paymentMethodsState',
    get: async () => {
        const { data } = await getPaymentMethods()
        return data;
    },
})


export const selectedPaymentMethodState = atom<PaymentMethodType | null>({
    key: 'selectedPaymentMethodState',
    default: null,
})

export const paymentState = selector<PaymentType>({
    key: 'paymentState',
    get: ({get}) => {
        const selectedMenus = get(selectedMenusState);
        const selectedCoupon = get(selectedCouponState);
        const selectedPaymentMethod = get(selectedPaymentMethodState);
        let takoutTotalPrice = 0;

        let inTotalPrice = selectedMenus.reduce((prev, cur) => {
            if(cur.isTakeout) {
                takoutTotalPrice += cur.price * cur.amount
                return prev;
            }
            else return prev + cur.amount* cur.price
        }, 0);

        let totalPrice;
        if(selectedCoupon) totalPrice = inTotalPrice*(1 - selectedCoupon.discountRate) + takoutTotalPrice;
        else totalPrice = inTotalPrice + takoutTotalPrice;
        if(selectedPaymentMethod && selectedPaymentMethod.name === 'cash') totalPrice = totalPrice*(1 - selectedPaymentMethod.discountRate)

        return {
            user: 'someone',
            totalPrice,
            menus: selectedMenus.map((v) => v.id),
            selectedCoupon: selectedCoupon ? selectedCoupon.id : undefined,
            paymentMethod:  selectedPaymentMethod ? selectedPaymentMethod.id : undefined,
        }
    },
})