import {useCallback} from "react";
import {useRecoilState} from "recoil";
import {selectedMenuInfoState} from "../../../recoil";

const useAddDeleteMenuMethods = () => {
    const [selectedMenuInfos, setSelectedMenuInfos] = useRecoilState(selectedMenuInfoState)

    const addSelectedMenu = useCallback((menuId: string) => {
        const exist = selectedMenuInfos.find((v) => v.menuId === menuId)
        if(exist) return;

        setSelectedMenuInfos([...selectedMenuInfos, { menuId, amount: 1 }])
    }, [selectedMenuInfos])

    const deleteSelectedMenu = useCallback((menuId: string) => {
        setSelectedMenuInfos(selectedMenuInfos.filter((v) => v.menuId !== menuId))
    }, [selectedMenuInfos])

    return {
        addSelectedMenu, deleteSelectedMenu,
    }
}

export default useAddDeleteMenuMethods;