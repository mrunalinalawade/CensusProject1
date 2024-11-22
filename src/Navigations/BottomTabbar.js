import { StyleSheet, Text, View,SafeAreaView ,Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IMAGEPATH, VECTOR_ICONS } from '../assets/Theme';
import Home from '../Screens/HomeFlow/Home';
import Market from '../Screens/HomeFlow/Market';
import Trade from '../Screens/HomeFlow/Trade';
import Assets from '../Screens/HomeFlow/Assets';
import News from '../Screens/HomeFlow/Transfer';







const Tab = createBottomTabNavigator();
const BottomTabNavigation = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#000'}}>
    <Tab.Navigator  initialRouteName="Home"    
    screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
            // fontFamily: 'Poppins-Regular',
          },
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#9DA9AC',
          tabBarHideOnKeyboard: true,

          tabBarStyle: {
            backgroundColor: '#04191F',
            paddingBottom:'4%',
            height: 85,
            borderTopWidth: 1,
            borderTopColor: 'red',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingTop: '1.5%',
          },
        
        }}>


     <Tab.Screen name="Home" component={Home}  options={{
            tabBarIcon: ({focused, color}) =>
              focused ? (
              <VECTOR_ICONS.Octicons name={'home'} color={'#768C5C'}  size={20} />
              ) : (
                <VECTOR_ICONS.Octicons name={'home'} color={'#868D9E'}  size={20} />
              ),
          }} />   




    <Tab.Screen name="Market" component={Market} 
       options={{
            tabBarLabel: 'Market',
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Image
                  source={IMAGEPATH.Market}
                //   style={CommonStyles.TabIconStyle}
                />
              ) : (
                <Image
                source={IMAGEPATH.Market}
              //   style={CommonStyles.TabIconStyle}
              />
              ),
          }}
    />   

    <Tab.Screen name="Trade" component={Trade}
      options={{
        tabBarLabel:'Trade',
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Image
                source={IMAGEPATH.Market}
              //   style={CommonStyles.TabIconStyle}
              />
              ) : (
                <Image
                source={IMAGEPATH.Market}
              //   style={CommonStyles.TabIconStyle}
              />
              ),
          }}
    />

    <Tab.Screen name="News" component={News} 
       options={{
        tabBarLabel:'News',
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Image
                  source={IMAGEPATH.News}
                  style={[ {width: 20, height: 22}]}
                />
              ) : (
                <Image
                source={IMAGEPATH.News}
                style={[ {width: 20, height: 22}]}
              />
              ),
          }}
    />
    <Tab.Screen name="Assets" component={Assets}
    
    options={{
        tabBarLabel:'Assets',
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Image
                  source={IMAGEPATH.Assets}
                  style={[ {width: 19, height: 23}]}
                />
              ) : (
                <Image
                source={IMAGEPATH.Assets}
                style={[ {width: 19, height: 23}]}
              />
              ),
          }} />
   
    
  </Tab.Navigator>
</SafeAreaView>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})