

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
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.54, }}>
                <TouchableOpacity onPress={props?.navigate}>
                    <VECTOR_ICONS.AntDesign name="arrowleft" size={30} color={COLORS.WHITE} />
                </TouchableOpacity>
                <Text style={[styles.signStyle1,props.text]}>{props.textlabel}</Text>

            </View>

            {props.sign && (
                <TouchableOpacity onPress={props?.navigate1}>
                    <Text style={styles.signStyle}>Sign up</Text>
                </TouchableOpacity>
            )}

            {props.label && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={props.navigate3}><Image source={IMAGEPATH.Frame1} style={{ width: 30, height: 30 }} /></TouchableOpacity>
                    <TouchableOpacity onPress={props.navigate4}><Image source={IMAGEPATH.Headphone} /></TouchableOpacity>
                </View>

            )

            }
            {
                props.Frame && (

                    <TouchableOpacity><Image source={IMAGEPATH.Frame} style={{ width: 30, height: 38, right: 5, marginTop: '2%' }} /></TouchableOpacity>

                )
            }

            {

                props.Add &&

                (<TouchableOpacity onPress={props.AddPress} style={{ borderWidth: 1, borderColor: '#343434', padding: '2.5%', width: width * 0.2, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={styles.account1}>Add</Text>
                </TouchableOpacity>)


            }

            {

                props.INR &&

                (<TouchableOpacity onPress={props.INRPress} style={{ borderWidth: 1, borderColor: '#343434', padding: '2%', width: width * 0.2, alignItems: 'center', borderRadius: 5, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <Text style={styles.account1}>INR</Text>

                    <VECTOR_ICONS.AntDesign name={'down'} size={14} color={'#768C5C'} />
                </TouchableOpacity>)


            }

            {props.swap && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={props.navigate3}><Image source={IMAGEPATH.Frame1} style={{ width: 36, height: 35 }} /></TouchableOpacity>
                    <TouchableOpacity><Image source={IMAGEPATH.Frame} style={{ width: 30, height: 38, marginTop: '2%' }} /></TouchableOpacity>
                </View>

            )

            }


            {props.camera && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <VECTOR_ICONS.AntDesign name={'questioncircleo'} color={'rgba(255, 255, 255, 0.6)'} size={20} style={{ marginTop: '5%', right: 10 }} />
                    <TouchableOpacity><Image source={IMAGEPATH.Camera1} style={{ width: 25, height: 21, marginTop: '2%' }} /></TouchableOpacity>
                </View>

            )

            }

            {
                props.order && (
                    <TouchableOpacity onPress={props.orderPress} style={{backgroundColor:'rgba(255, 102, 102, 0.1)',borderRadius:7,padding:'2.3%',alignItems:'center'}}>
                        <Text style={{color:'rgba(255, 102, 102, 1)',fontSize:12,fontWeight:'500',marginHorizontal:'3%'}}>Cancel the order</Text>
                    </TouchableOpacity>
                )
            }
            {
                 props.label4 && (
                    
                        <TouchableOpacity onPress={props.navigate3}><Image source={IMAGEPATH.Frame1} style={{ width: 30, height: 35,marginTop:'2%' }} /></TouchableOpacity>
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
        justifyContent: 'space-between',
        marginTop: '4%'
    },
    signStyle: {
        fontSize: 14,
        fontFamily: FONTS.medium,
        color: '#768C5C',
        fontWeight: '500'
    },
    account1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        // lineHeight: 20,
        // marginVertical: '1.5%'
    },
    signStyle1: {
        fontSize: 16,
        // fontFamily: FONTS.medium,
        color: '#fff',
        fontWeight: '500',

    },

});
