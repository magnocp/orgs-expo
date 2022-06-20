import { StyleSheet, Image, Dimensions, Text, View } from 'react-native'

import Topo from '../Cesta/componentes/Topo'

import Detalhes from './componentes/Detalhes'

export default function Cesta({ topo, detalhes }) {
  return (
    <>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 8,
    paddingVertical: 16
  }
})