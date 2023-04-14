import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextInput, View } from 'react-native';
import types from '../../actions/poke-actions/types';

const Search: React.FC = () => {

  const [name, setName] = useState("")
  const dispatch = useDispatch()

  const onChange = (value: string) => {
    setName(value)
  }

  const search = () => {
    dispatch({ type: types.GET_POKE_REQUESTED, payload: { name } })
  }

  useEffect(() => {
    if (name.length === 0) {
      dispatch({ type: types.GET_ALL_POKES_REQUESTED })
    }
  }, [name])

  return (
    <View style={{ margin: 10 }}>
      <TextInput
        style={{
          borderColor: "#969696",
          borderWidth: 1,
          borderRadius: 8,
          paddingLeft: 10,
          fontSize: 20
        }}
        placeholder="Ex: Pikachu"
        onChangeText={onChange}
      />

      <View style={{ marginTop: 10 }}>
        <Button
          title="Pesquisar"
          onPress={search}
        />
      </View>

    </View>
  );
}

export default Search;

