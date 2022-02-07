import {atom, RecoilLoadable, selector} from 'recoil';
import {CouponType, MenuType, SelectedMenuType} from "../types";
import {getMenus} from "../apiCalls";

export const menusState = selector({
    key: 'menusState',
    get: async () => {
        const { data }: { data: MenuType[]} = await getMenus()
        return data;
    }
})

export const selectedMenuInfoState = atom({
    key: 'selectedMenuIdsState',
    default: [] as SelectedMenuType[],
})

export const selectedMenusState = selector({
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


export const couponsState = atom({
    key: 'couponsState',
    default: [],
})

export const paymentState = atom({
    key: 'paymentState',
    default: [],
})