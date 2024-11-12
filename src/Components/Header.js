

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
} from "react-native";
import React from "react";
import COLORS from "../assets/colors/Colors";
import { IMAGEPATH, VECTOR_ICONS } from "../assets/Theme";
import FONTS from "../assets/Fonts";
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");
const Header = (props) => {
    const { sign, ViewStyle, navigation } = props;

    return (
        <View style={[styles.logoStyle, ViewStyle]} {...props}>
            <TouchableOpacity onPress={props?.navigate}>
                <VECTOR_ICONS.AntDesign name="arrowleft" size={30} color={COLORS.WHITE} />
            </TouchableOpacity>
            {props.sign && (
                <TouchableOpacity onPress={props?.navigate1}>
                    <Text style={styles.signStyle}>Sign up</Text>
                </TouchableOpacity>
            )}

            {props.label && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={props.navigate3}><Image source={IMAGEPATH.Frame} /></TouchableOpacity>
                    <TouchableOpacity onPress={props.navigate4}><Image source={IMAGEPATH.Headphone} /></TouchableOpacity>
                </View>

            )

            }
            {
                props.Frame && (

                    <TouchableOpacity><Image source={IMAGEPATH.Frame} style={{ width: 30, height: 38, right: 5, marginTop: '2%' }} /></TouchableOpacity>

                )
            }
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    logoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    signStyle: {
        fontSize: 14,
        fontFamily: FONTS.medium,
        color: '#768C5C',
        fontWeight: '500'
    },

});
