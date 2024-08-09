import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import ListContactPage from './pages/ListContactPage';
import ChatPage from './pages/ChatPage';

const Stack = createNativeStackNavigator();
// var ws = new WebSocket('ws://192.168.1.19:8080/gs-guide-websocket');

// ws.onopen = () => {
//   console.warn("Socket Connected!");
// };

// ws.onerror = (e) => {
//   console.error(e.message);
// };

// ws.onclose = (e) => {
//   console.error(e.code, e.reason);
// };

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
        />
        <Stack.Screen
          name="ListContactPage"
          component={ListContactPage}
        />
        <Stack.Screen
          name="ChatPage"
          component={ChatPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
