import { Text, TouchableOpacity, View, Platform, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CountryPicker } from 'react-native-country-codes-picker';
import { VECTOR_ICONS } from '../../assets/Theme';

const { height, width } = Dimensions.get('window');
const Country = ({ setCountrycode, countryCode1, code, flag1 }) => {
    const [refreshCounter, setRefreshCounter] = useState(0);
    const [see, setSee] = useState(0);
    const [showCountryCodePicker, setShowCountryCodePicker] = useState(false);
    const [flag, setFlag] = useState('🇺🇸');
    const [countryCode, setCountryCode] = useState('+91');
    const [isoCode, setIsoCode] = useState('US');  // State to hold isoCode

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

    return (
        <View style={{ width: '40%', flexDirection: 'row' }}>
            <CountryPicker
                show={showCountryCodePicker}
                lang={'en'}
                style={{
                    modal: {
                        height: 400,
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    },
                    backdrop: { backgroundColor: 'rgba(255, 255, 255, 0.06)' },
                    textInput: {
                        borderWidth: 1,
                        fontFamily: 'Poppins-Regular',
                        color: 'rgba(255, 255, 255, 0.4)'
                    },
                    countryButtonStyles: {
                        height: 50,
                    },
                    searchMessageText: {
                        color: 'rgba(255, 255, 255, 0.4)',
                    },
                    flag: { fontSize: 13, color: 'rgba(255, 255, 255, 0.4)' },
                    dialCode: {
                        fontFamily: 'Poppins-Regular',
                        fontSize: 13,
                        color: 'rgba(255, 255, 255, 0.4)',
                    },
                    countryName: {
                        fontFamily: 'Poppins-Regular',
                        fontSize: 13,
                        color: 'rgba(255, 255, 255, 0.4)',
                    },
                }}
                onBackdropPress={() => {
                    setShowCountryCodePicker(false);
                }}
                pickerButtonOnPress={item => {
                    setCountrycode(item?.phonecode);
                    setFlag(item.flag);
                    setCountryCode(item.phonecode);
                    setIsoCode(item.isoCode);
                    setShowCountryCodePicker(false);
                }}
            />
            <TouchableOpacity
                onPress={() => { setShowCountryCodePicker(true); setSee(1); }}
                style={{
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
                        color: 'rgba(255, 255, 255, 0.4)',
                        paddingLeft: '4%'
                    }}>
                    {flag}{' '}
                </Text>
                <Text
                    style={{
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 15,
                    }}>
                    {countryCode1 ?? countryCode}
                </Text>
                <VECTOR_ICONS.AntDesign name="down" size={14} color={'#C7C7C7)'} style={{marginLeft:'4%'}} />
            </TouchableOpacity>
        </View>
    );
}

export default Country;

