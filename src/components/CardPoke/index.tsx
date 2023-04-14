import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { openModal } from '../../slices/modalSlice';
import { Image, Text, View } from 'react-native';
import types from '../../actions/poke-actions/types';
import { Habilidades, Pokemon } from '../../interfaces/pokemon';

const CardUser = () => {


  const pokes = useSelector((state: RootState) => state.poke.pokes)

  const renderHabilidades = (poke: Pokemon) => {
    return poke.abilities.map((habilidade: Habilidades) => {
      return <Text style={{ fontSize: 15, marginLeft: 10, color: "#80838a", fontWeight: 'bold' }}>* {habilidade.ability.name}</Text>
    })

  }

  return (
    <View style={{ flex: 1 }}>
      {pokes?.map((poke) => {

        const { name, height, types, abilities, sprites } = poke

        return (
          <View
            key={name}
            style={{
              height: 200,
              backgroundColor: "#cfd8ca",
              marginTop: 10
            }}
          >

            <View style={{ flexDirection: 'row', }}>
              <Image
                resizeMode='contain'
                style={{
                  height: 190,
                  width: 180,
                  margin: 5
                }}
                source={{
                  uri: sprites.front_default,
                }}
              />

              <View>
                <Text style={{ fontSize: 20, marginTop: 10, color: "#248", fontWeight: 'bold' }}>{poke.name.toUpperCase()}</Text>
                <Text style={{ fontSize: 15, color: "#248", fontWeight: 'bold' }}>Altura: {height}</Text>
                <Text style={{ fontSize: 15, color: "#248", fontWeight: 'bold' }}>Habilidades: </Text>
                {renderHabilidades(poke)}
              </View>
            </View>

          </View>
        )
      })}
    </View>

  )

}

export default CardUser;