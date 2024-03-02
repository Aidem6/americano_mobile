// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Home from './src/screens/Home';
// import Game from './src/screens/Game';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Game"
//           component={Game}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { withIAPContext } from "react-native-iap";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./src/screens/Home";
import { Subscriptions } from "./src/screens/Subscriptions";

export const screens = [
  {
    name: "Subscriptions",
    title: "Subscriptions",
    component: withIAPContext(Subscriptions),
    section: "Context",
    color: "#cebf38",
  },
  {
    name: "Home",
    component: Home,
    section: "Context",
    color: "#cebf38",
  },
];

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ title: "MainlyPaleo Subscriptions" }}>
    {screens.map(({ name, component, title }) => (
      <Stack.Screen
        key={name}
        name={name}
        component={component}
        //hide the header on these screens
        options={{
          title: title,
          headerShown:
            name === "Home" || name === "Subscriptions" ? false : true,
        }}
      />
    ))}
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
