import { useSelector, useDispatch } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

import store from "."

type RootStateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch
