
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { WIDTH } from '../Helpers/Dimensions';
import FONTS from '../assets/Fonts';



const FiatDropdown = (props) => {
  const data = [
    { label: 'INR', value: '1' },
    { label: 'INR1', value: '2' },
    { label: 'INR2', value: '3' },
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  console.log("Selected Gender: ", props.INR);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      iconColor={'rgba(127, 128, 130, 1)'}
      containerStyle={styles.containerStyle}
      data={data}
      activeColor={'rgba(255, 255, 255, 0.06)'}
      maxHeight={350}
      labelField="label"
      valueField="label"
      placeholder="INR"
      value={props.INR}
      onChange={item => {
        props.setINR(item.label);
        props.setINRError('');
      }}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: '3%',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    width: WIDTH * 0.42,
    alignSelf: 'center',
    // borderWidth: 1,
    // borderColor: '#1C57A5',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
    width: WIDTH * 0.8,
    alignSelf: 'center',
    paddingVertical: '2%',
  },
  textItem: {
    flex: 1,
    fontSize: 15,
    // fontFamily: FONTS.semibold,
    color:'rgba(255, 255, 255, 1)',
    paddingVertical: '2%',
  },
  placeholderStyle: {
    fontSize: 15,
    fontFamily: FONTS.semibold,
    color: 'rgba(255, 255, 255, 1)',
    paddingLeft: '8%',
  },
  selectedTextStyle: {
    fontSize: 15,
    fontFamily: FONTS.medium,
    color: 'rgba(255, 255, 255, 1)',
    paddingLeft: '8%',
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginRight: 13,
  },
  containerStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 8,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  Errorstyle: {
    color: 'red',
    fontSize: 13,
    fontFamily: FONTS.regular,
  },
});

export default FiatDropdown;
