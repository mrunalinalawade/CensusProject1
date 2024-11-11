import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
  // import Country from './Country';

import { WIDTH } from '../../Helpers/Dimentions';

import FONTS from '../assets/Fonts';
import COLORS from '../assets/colors/Colors';
import Coutry from './ValidationConfig/Country';

const { height, width } = Dimensions.get('window');

const Inputfield1 = (props) => {
  const { LabelStyle, ContainerStyle } = styles;
  const {CountryCode,setCountryCode}=useState('+91')

  return (
    <>
      <View style={[ContainerStyle, props.ContainerStyle]}>
        <View
          style={
            props.Replace
              ? styles.Replace
              : [styles.InputFieldStyle, props.InputFieldStyle]
          }>

          {
            props.PhoneField &&


            <View style={{ width: '20%', backgroundColor: '#rgba(255, 255, 255, 0.06)', flexDirection: 'row', height: 50, alignItems: 'center', borderRadius: 10, }} >


              <Coutry setCountrycode={setCountryCode} style={{  }} />


            </View>
          }

          {
            props.PhoneField &&

            <View
              style={{
                height: 30,
                borderWidth: 1,
                // borderColor:'#rgba(255, 255, 255, 0.06)',
                marginTop: '1%',
                marginRight: '2%',
                backgroundColor: '#rgba(255, 255, 255, 0.06)'

              }}
            />

          }
          <TextInput
            editable={props.edit}
            placeholder={props.placeholder}
            placeholderTextColor={'#rgba(255, 255, 255, 0.4)'}
            autoCapitalize="none"
            style={[
              styles.PlaceholderStyle,
              styles.InputFieldStyle,
              {
                width:
                  props.PasswordField || props.CorrectEmailTrue ? '90%' : '99%',
                backgroundColor: props.backgroundColor,
                paddingVertical: '4.2%',
                paddingLeft: '3.2%',
              },
            ]}
            {...props}
            selectionColor={COLORS.INPUTLABELDARKGRAY}
            secureTextEntry={props.ShowPassword}
            maxLength={props?.MaxLength}
          />
          {props.CorrectEmailTrue && (
            <View style={{ marginRight: -8 }}>
              <ForgotCheckIcon />
            </View>
          )}
          {props.PasswordField ? (
            <TouchableOpacity
              style={[props.passwordIconStyle]}
              onPress={props.PasswordPress}>
              <Ionicons
                name={props.ShowPassword ? 'eye-off-outline' : 'eye'}
                color={'rgba(199, 199, 199, 1)'}
                size={18}
              />
            </TouchableOpacity>
          ) : props.SearchField ? (
            <TouchableOpacity
              style={[props.passwordIconStyle]}
              onPress={props.PasswordPress}>
              <Entypo name={'cross'} color={'rgba(199, 199, 199, 1)'} size={18} />
            </TouchableOpacity>
          ) : null}
        </View>

      </View>
      {props.Error && props.ShowError && (
        <Text style={[styles.Errorstyle, props.Errorstyle]}>{props.Error}</Text>
      )}
    </>
  );
};

export default Inputfield1;

const styles = StyleSheet.create({
  SearchField: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    justifyContent: 'space-between',
  },
  ContainerStyle: {
    alignSelf: 'center',
    width: width * 0.9,
    marginVertical: '1.5%',

  },
  LabelStyle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.PLACEHOLDER_COLOR,
    fontWeight: '400',
  },
  PlaceholderStyle: {
    color: '#rgba(255, 255, 255, 0.4)',
    fontSize: 12,
    width: '90%',
    fontWeight: '400',
    fontFamily: FONTS.regular,
    borderRadius: 7,
  },
  InputFieldStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#rgba(255, 255, 255, 0.06)',
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '400',
    borderRadius: 7,
    fontFamily: FONTS.regular,
    color: '#rgba(255, 255, 255, 0.4)',
  },
  Errorstyle: {
    color: 'red',
    fontSize: 13,
    fontFamily: FONTS.regular,
    // marginTop: 1,
    fontWeight: '400',
    paddingLeft: 5,
  },
  Replace: {},
});
