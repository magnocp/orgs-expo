import { StyleSheet, FlatList, View } from 'react-native'

import Topo from '../Cesta/componentes/Topo'

import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'
import Texto from '../../componentes/Texto'

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilos.tituloItem}>{itens.titulo}</Texto>
              </View>
            </>
          )
        }}
      />
    </>
  )
}

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  tituloItem: {
    color: '#464646',
    fontWeight: 'bold',
    margin: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  }
})
