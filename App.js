import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mocks from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonteCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Cesta {...mocks}/>
    </SafeAreaView>
  );
}
// na linha 19 também pode ser topo={mocks.topo} detalhes={mocks.detalhes}