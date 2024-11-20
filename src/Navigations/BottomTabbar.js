// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import Home from '../Screens/HomeFlow/Home';
// import Market from '../Screens/HomeFlow/Market';
// import Trade from '../Screens/HomeFlow/Trade';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer independent={true}>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Market') {
//               iconName = focused ? 'person' : 'person-outline';
//             } else if (route.name === 'Trade') {
//               iconName = focused ? 'settings' : 'settings-outline';
//             }
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Market" component={Market} />
//         <Tab.Screen name="Trade" component={Trade} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
