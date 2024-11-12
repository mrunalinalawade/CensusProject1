import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import the tab navigator
import Home from '../Screens/HomeFlow/Home';
import Market from '../Screens/HomeFlow/Market';
import Trade from '../Screens/HomeFlow/Trade';
import Transfer from '../Screens/HomeFlow/Transfer';
import Assets from '../Screens/HomeFlow/Assets';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from '../assets/colors/Colors';

const Tab = createBottomTabNavigator();

const BottomTabbar = () => {
    function MyTabBar({ state, descriptors, navigation }) {
        return (
            <View style={styles.bottomTabContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: "tabLongPress",
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.menuContainer}
                        >
                            <Image
                                source={
                                    index == 0
                                        ? Icons.doc_menu_1
                                        : index == 1
                                            ? Icons.doc_menu_2
                                            : index == 2
                                                ? Icons.doc_menu_3
                                                : Icons.doc_menu_4
                                }
                                style={{
                                    height: isFocused ? 23 : 20,
                                    width: isFocused ? 23 : 20,
                                    resizeMode: "contain",
                                }}
                            />
                            {isFocused && (
                                <View style={{ alignItems: "center" }}>
                                    <Text
                                        style={{
                                            color: isFocused ? 'red':COLORS.WHITE,
                                            // fontFamily: "poppinsMedium",
                                            fontSize: 12,
                                            marginTop: 2,
                                            marginBottom: 1,
                                        }}
                                    >
                                        {label}
                                    </Text>
                                    <View
                                        style={{
                                            width:50,
                                            height:3,
                                            backgroundColor: COLORS.WHITE ,
                                            borderTopLeftRadius: 10,
                                            borderTopRightRadius: 10,
                                        }}
                                    />
                                </View>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    return (
        <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Market" component={Market} />
            <Tab.Screen name="Trade" component={Trade} />
            <Tab.Screen name="Transfer" component={Transfer} />
            <Tab.Screen name="Assets" component={Assets} />
        </Tab.Navigator>
    );
}

export default BottomTabbar;

const styles = StyleSheet.create({
    bottomTabContainer: {
        minHeight:60,
        backgroundColor:'red',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "row",
        paddingTop: 12,
    },
    menuContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
});
