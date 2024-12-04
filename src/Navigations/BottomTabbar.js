// import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { IMAGEPATH } from '../assets/Theme';
// import Home from '../Screens/HomeFlow/Home';
// import Market from '../Screens/HomeFlow/Market';
// import Trade from '../Screens/HomeFlow/Trade';
// import News from '../Screens/HomeFlow/Transfer';
// import Assets from '../Screens/HomeFlow/Assets';







// const Tab = createBottomTabNavigator();
// const BottomTabNavigation = props => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor:'rgba(35, 36, 42, 0.89)' }}>
//       <Tab.Navigator initialRouteName="Home"
//         screenOptions={{
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontWeight: '400',
//             // fontFamily: 'Poppins-Regular',
//           },
//           headerShown: false,
//           tabBarShowLabel: true,
//           tabBarActiveTintColor: '#9DA9AC',
//           tabBarHideOnKeyboard: true,

//           tabBarStyle: {
//             backgroundColor: '#04191F',
//             paddingBottom: '4%',
//             height: 85,
//             borderTopWidth: 1,
//             borderTopColor:'rgba(35, 36, 42, 0.89)',
//             borderTopRightRadius: 20,
//             borderTopLeftRadius: 20,
//             paddingTop: '1.5%',
//           },

//         }}>


//         <Tab.Screen name="Home" component={Home} options={{
//           tabBarIcon: ({ focused, color }) =>
//             focused ? (
//               <Image
//                 source={IMAGEPATH.Home}
               
//               />
//             ) : (
//               <Image
//               source={IMAGEPATH.Home}
             
//             />  
//             ),
//         }} />




//         <Tab.Screen name="Market" component={Market}
//           options={{
//             tabBarLabel: 'Chats',
//             tabBarIcon: ({ focused, color }) =>
//               focused ? (
//                 <Image
//                   source={IMAGEPATH.Market}
                  
//                 />
//               ) : (
//                 <Image
//                 source={IMAGEPATH.Market}
                
//               />  
//               ),
//           }}
//         />

//         <Tab.Screen name="Trade" component={Trade}
//           options={{
//             tabBarIcon: ({ focused, color }) =>
//               focused ? (
//                 <Image
//                   source={IMAGEPATH.Trade}
                  
//                 />
//               ) : (
//                 <Image
//                   source={IMAGEPATH.Trade}
                  
//                 />
                  
//               ),
//           }}
//         />

//         <Tab.Screen name="News" component={News}
//           options={{
//             tabBarIcon: ({ focused, color }) =>
//               focused ? (
//                 <Image
//                   source={IMAGEPATH.News}
//                 />
//               ) : (
//                 <Image
//                 source={IMAGEPATH.News}
//                 />
//               ),
//           }}
//         />
//         <Tab.Screen name="Assets" component={Assets}

//           options={{
//             tabBarIcon: ({ focused, color }) =>
//               focused ? (
//                 <Image
//                   source={IMAGEPATH.Assets}
//                 />
//               ) : (
//                 <Image
//                 source={IMAGEPATH.Assets}
//                 />
//               ),
//           }} />


//       </Tab.Navigator>
//     </SafeAreaView>
//   )
// }

// export default BottomTabNavigation

// const styles = StyleSheet.create({})



import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/HomeFlow/Home';
import Market from '../Screens/HomeFlow/Market';
import Trade from '../Screens/HomeFlow/Trade';



const Tab = createBottomTabNavigator();

export default function BottomTabbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Market') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Trade') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Market" component={Market} />
        <Tab.Screen name="Trade" component={Trade} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
