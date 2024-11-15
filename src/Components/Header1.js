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
const Header1 = (props) => {
    const { sign, ViewStyle, navigation } = props;

    return (
        <View style={[styles.logoStyle, ViewStyle]} {...props}>
            <TouchableOpacity onPress={props?.navigate}>
                <VECTOR_ICONS.AntDesign name="close" size={25} color={COLORS.WHITE} />
            </TouchableOpacity>
          
            <Text style={styles.signStyle}>{props.textlabel}</Text>
           

            {props.label && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={props.navigate3}><Image source={IMAGEPATH.Frame1} style={{ width: 35, height: 32 }} /></TouchableOpacity>
                    <TouchableOpacity><Image source={IMAGEPATH.Frame} style={{ width: 30, height: 38,  marginTop: '2%' }} /></TouchableOpacity>
                </View>

            )

            }
           
        </View>
    );
};

export default Header1;

const styles = StyleSheet.create({
    logoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: '4%'
    },
    signStyle: {
        fontSize: 16,
        fontFamily: FONTS.medium,
        color: '#fff',
        fontWeight: '500'
    },
    account1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        // lineHeight: 20,
        // marginVertical: '1.5%'
    },

});
