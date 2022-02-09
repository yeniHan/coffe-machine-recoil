import {useResetRecoilState} from "recoil";
import {selectedCouponState, selectedMenuInfoState, selectedPaymentMethodState} from "../../recoil";


const useResetAllSelectedStates = () => {
    const resetSelectedMenuInfo = useResetRecoilState(selectedMenuInfoState);
    const resetSelectedCoupon = useResetRecoilState(selectedCouponState)
    const resetSelectedPaymentMethod = useResetRecoilState(selectedPaymentMethodState)

    return () => {
        resetSelectedMenuInfo()
        resetSelectedCoupon()
        resetSelectedPaymentMethod()
    }
}

export default useResetAllSelectedStates;