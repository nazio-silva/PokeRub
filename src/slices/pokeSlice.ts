import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '../interfaces/pokemon';

export interface PokesState {
  pokes: Array<Pokemon>;
  name: string,
  failure: boolean,
}

const initialState: PokesState = {
  pokes: [],
  name: "",
  failure: false
}

export const pokeSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    getAllPokesSuccess: (state, action: PayloadAction<string | any>) => {
      const pokes = action.payload
      state.pokes = pokes
    },
    getPokeSuccess: (state, action: PayloadAction<string | any>) => {
      
      const pokes = action.payload
      state.pokes = [pokes]
      state.failure = false
     
    },
    getPokeFailure: (state) => {
      state.failure = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { getAllPokesSuccess, getPokeSuccess, getPokeFailure } = pokeSlice.actions

export default pokeSlice.reducer