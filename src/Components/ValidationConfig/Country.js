import { Text, TouchableOpacity, View, Platform, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CountryPicker } from 'react-native-country-codes-picker';

const { height, width } = Dimensions.get('window');
const Coutry = ({ setCountrycode, countryCode1, code, flag1 }) => {
    const [refreshCounter, setRefreshCounter] = useState(0);
    const [see, SetSee] = useState(0);

    useEffect(() => {
        if (see !== 1) {
            const timer = setTimeout(() => {
                setRefreshCounter(prevCounter => prevCounter + 1);
            }, 10);

            setFlag(flag1);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [refreshCounter]);

    const [showCountryCodePicker, setShowCountryCodePicker] = useState(false);
    const [flag, setFlag] = useState('🇺🇸');
    const [countryCode, setCountryCode] = useState('+91');

    return (
        <View style={{ width: '40%', flexDirection: 'row' }}>
            <CountryPicker
                show={showCountryCodePicker}
                lang={'en'}
                style={{
                    modal: {
                        height: 400,
                        backgroundColor:'#rgba(255, 255, 255, 0.06)',
                    },
                    backdrop: { backgroundColor:'#rgba(255, 255, 255, 0.06)' },
                    line: {},
                    itemsList: {},
                    textInput: {
                        borderWidth: 1,
                        // borderColor: 'rgba(0,0,0,0.15)',
                        fontFamily: 'Poppins-Regular',
                        color: '#rgba(255, 255, 255, 0.4)'
                    },
                    countryButtonStyles: {
                        height: 50,
                    },
                    searchMessageText: {
                        color: '#rgba(255, 255, 255, 0.4)',
                    },
                    countryMessageContainer: {},
                    flag: { fontSize: 13, color: '#rgba(255, 255, 255, 0.4)' },
                    dialCode: {
                        fontFamily: 'Poppins-Regular',
                        fontSize: 13,
                        color:'#rgba(255, 255, 255, 0.4)',
                    },
                    countryName: {
                        fontFamily: 'Poppins-Regular',
                        fontSize: 13,
                        color:'#rgba(255, 255, 255, 0.4)',
                    },
                }}
                onBackdropPress={() => {
                    setShowCountryCodePicker(false);
                }}
                pickerButtonOnPress={item => {
                    setCountrycode(item.dial_code);
                    setFlag(item.flag);
                    setCountryCode(item.dial_code);
                    setShowCountryCodePicker(false);
                }}
            />
            <TouchableOpacity
                onPress={() => { setShowCountryCodePicker(true); SetSee(1); }}
                style={{
                    backgroundColor:'#rgba(255, 255, 255, 0.06)',
                    flexDirection: 'row',
                    paddingVertical: '11%',
                    borderRadius: 10,
                    width: width * 0.21,
                    alignItems: 'center'
                }}>
                <Text
                    style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 20,
                        color:'#rgba(255, 255, 255, 0.4)',
                        paddingLeft: '4%'
                    }}>
                    {flag}{' '}
                </Text>
                <Text
                    style={{
                        color: '#rgba(255, 255, 255, 0.4)',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 15,
                    }}>
                    {countryCode1 ?? countryCode}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Coutry;
