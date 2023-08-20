import { useSelector, useDispatch } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { createAsyncThunk } from "@reduxjs/toolkit"

import store from "."

/** store.getState */
export type RootStateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

/** store.dispatch */
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch

/** createAsyncThunk */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootStateType
  dispatch: DispatchType
  // other fields type
}>()
