import { StatusBar } from 'expo-status-bar';
import {CardComponent} from '../Components/Card'
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';

const data=[
  {nome: 'Bruno', tipoSanguinio: 'AB+', id:1}
]

export default function Home() {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <FlatList
      data={data}
      renderItem={({item})=> <CardComponent nome={item.nome} tipoSanguinio={item.tioSanguinio} />}
      />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
