import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Cadastro from './src/screens/cadastro';
import Login from './src/screens/Login';
import Home from './src/screens/home';


const ContainerApp = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden/>
      {/* <Cadastro/> */}
      {/* <Login/> */}
      <Home/>
    </ContainerApp>
  );
}