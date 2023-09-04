import { createSlice } from "@reduxjs/toolkit";
import { filterInitialState } from "./initialStates"

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload
    },
    filterOptions(state, action) {
      state.filterOptions = action.payload
    }
  }
})

export const filterReducer = filterSlice.reducer
export const {filterContacts, filterOptions} = filterSlice.actions