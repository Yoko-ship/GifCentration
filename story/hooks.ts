import { useDispatch,useSelector,useStore } from "react-redux";
import type { RootState,AppDispatch,AppStore } from "./story"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelect = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()