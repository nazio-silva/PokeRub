import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Users } from '../interfaces/pokemon';

export interface ModalState {
  open: boolean,
  userSelected: Users
}

const initialState: ModalState = {
  open: false,
  userSelected: {
    login: '',
    name: '',
    avatar_url: '',
    url: '',
    html_url: '',
    email: '', 
    public_repos: '',
    location: '',  
  }
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string | any>) => {
      const userSelected = action.payload

      state.userSelected = userSelected
      state.open = true
    },
    closeModal: (state) => {
      state.userSelected = initialState.userSelected
      state.open = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer