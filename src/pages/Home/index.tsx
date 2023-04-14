import * as React from 'react';
import Search from './../../components/Search/index';
import CardUser from '../../components/CardPoke';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../components/Error';
import { NOT_FOUND } from './../../erros/index';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../components/Header';
import types from '../../actions/poke-actions/types';

const HomePage: React.FC = () => {

  const dispatch = useDispatch()

  const failure = useSelector((state: RootState) => state.poke.failure)

  React.useEffect(() => {
    dispatch({ type: types.GET_ALL_POKES_REQUESTED })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header title={"PokeRub"} background={"#259"} />
      <Search />

      <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
        <CardUser />
      </ScrollView>
    </View>
  )
}

export default HomePage;