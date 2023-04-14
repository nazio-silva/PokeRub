import React from 'react'
import { Text, View } from 'react-native';

interface Prosp {
  title: string,
  background?: string,
}

const Header: React.FC<Prosp> = ({ title, background }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: background }}>
      <Text style={{ color: "#FFF", padding: 10, fontWeight: "600", fontSize: 20, textAlign: 'center' }}>{title}</Text>
    </View>
  );
}

export default Header;

