import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import types from '../../actions/poke-actions/types';
import { getAllPokesSuccess, getPokeFailure, getPokeSuccess } from '../../slices/pokeSlice';
import { api, apiImage } from '../../api/api';
import { getDetails } from '../../function/getDetails';
import axios from 'axios';

function* getAllPokes(action: PayloadAction<string | any>): Generator<any> {
  
  try {
    
    const response = yield call(() => api.get(`/`))
    const {results} = response

    const data: any = []

    yield all(results.map((item: any) =>
      call(async() => {
        const nazio = await axios.get(item.url)
        data.push(nazio.data);
      }),
  ))


    yield put(getAllPokesSuccess(data))
    
  } catch (e) {
    yield put(getPokeFailure())
  }
}

function* getPoke(action: PayloadAction<string | any>): Generator<any> {
  try {

    const name = action.payload.name
    
    const poke = yield call(() => api.get(`/${name}`))

    yield put(getPokeSuccess(poke))
  } catch (e) {
    yield put(getPokeFailure())
  }
}

function* rootSaga() {
  yield takeEvery(types.GET_ALL_POKES_REQUESTED, getAllPokes)
  yield takeEvery(types.GET_POKE_REQUESTED, getPoke)
}

export default rootSaga;