import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import SettingsAccount from './components/SettingsAccount/SettingsAccount';
import Members from './components/Members/Members';
import MemberInfo from './components/MemberInfo/MemberInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterMember from './components/RegisterMember/RegisterMember';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>       
        <Stack.Screen name="SettingsAccount" component={SettingsAccount} options={{headerShown: false}} />
        <Stack.Screen name="Members" component={Members} options={{headerShown: false}} />
        <Stack.Screen name="MemberInfo" component={MemberInfo} options={{headerShown: false}} />
        <Stack.Screen name="RegisterMember" component={RegisterMember} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
