import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import FONTS from '../assets/Fonts';



const WholeButton1 = (props) => {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.Action}
            style={[styles.WholeButtonStyle, styles.linearGradient, props.styles]}>
            <Text style={styles.buttonText}>{props.Label}</Text>

        </TouchableOpacity>
    );
};

export default WholeButton1;

const styles = StyleSheet.create({
    linearGradient: {
        marginVertical: '10%',
        paddingVertical: '4%',
        borderRadius: 5,
        backgroundColor: '#768C5C',
         alignItems:'center',
         justifyContent:'center'
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight:'500',
        fontFamily: FONTS.semibold,
       
    },
    WholeButtonStyle: {
        width: '90%',
        alignSelf: 'center',
       
    },
});
