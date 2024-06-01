import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from './src/pages/Signin';
import Signup from './src/pages/Signup';
import Home from './src/pages/Home';
import Vagas from './src/pages/Vagas';
import Cursos from './src/pages/Cursos';
import Input from './src/pages/Input';
import Resp from './src/pages/Resp';
import RouterPage from './src/pages/RouterPage';
import FinalPage from './src/pages/FinalPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={Signin} 
          options={{ headerShown: false }} // Ocultar o cabeçalho para a tela "Signin"
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Vagas" 
          component={Vagas} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Cursos" 
          component={Cursos} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Input" 
          component={Input} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Resp" 
          component={Resp} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="RouterPage" 
          component={RouterPage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="FinalPage" 
          component={FinalPage} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}