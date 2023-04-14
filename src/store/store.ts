import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { configureStore } from '@reduxjs/toolkit'
import pokeReducer from '../slices/pokeSlice'
import modalReducer from '../slices/modalSlice'

// SAGAS
import saga from "../sagas/pokeSaga/pokeSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    poke: pokeReducer,
    modal: modalReducer,
  },
  middleware
})


applyMiddleware(...middleware)
sagaMiddleware.run(saga);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
// export const useAppDispatch = () => useDispatch<AppDispatch>()