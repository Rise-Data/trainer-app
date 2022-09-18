import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import SettingsAccount from './components/SettingsAccount/SettingsAccount';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>       
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
