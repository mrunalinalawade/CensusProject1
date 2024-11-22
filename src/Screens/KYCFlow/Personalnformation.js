import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { VECTOR_ICONS } from '../../assets/Theme'
import COLORS from '../../assets/colors/Colors'
import Inputfield1 from '../../Components/Inputfields1'
import WholeButton1 from '../../Components/WholeButton1'
import { ValidateFullname, ValidateMiddlename, ValidateMobileNo, ValidateMobileNo1, ValidateSurname } from '../../Components/ValidationConfig/Validations'
import FONTS from '../../assets/Fonts'
import Header from '../../Components/Header'
const { height, width } = Dimensions.get('window');
const Personalnformation = (props) => {
  const [FName, setFName] = useState('');
  const [FNameError, setFNameError] = useState('');
  const [SName, setSName] = useState('');
  const [SNameError, setSNameError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [ShowError, setShowError] = useState({
    FNameError: false,
    phoneError: false,
    SNameError: false,

  });
  const Form1com = () => {
    let fnameError = ValidateFullname(FName);
    let PhoneError = ValidateMobileNo1(phone);
    let snameError = ValidateSurname(SName);


    if (fnameError == '' && PhoneError == '' && snameError == "") {
      props.navigation.navigate('IDphotoinfo')

    } else {
      setFNameError(fnameError);
      setPhoneError(PhoneError);
      setSNameError(snameError);

      setShowError({
        FNameError: true,
        phoneError: true,
        SNameError: true,

      });
    }

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.mainviewStyle}>
            <Header navigate={() => props.navigation.goBack()} />
            <Text style={styles.logintext}>Personal Information</Text>
            <Text style={styles.signStyle}>We’re so excited to see you again!</Text>




            <View style={styles.inputStyle}>
              <Text style={styles.account}>First Name</Text>
              <Inputfield1
                placeholder={'Enter first Name'}
                MaxLength={256}
                value={FName}
                onBlur={() => {
                  if (FName != '' || FName != undefined) {
                    setShowError(prevState => ({
                      ...prevState,
                      FNameError: true,
                    }));
                  }
                }}
                onChangeText={(text) => {
                  if (FName != '' || FName != undefined) {
                    setFName(text);
                    setFNameError(ValidateFullname(text));
                  }
                }}
                ShowError={ShowError.FNameError}
                Error={FNameError} />
              <Text style={styles.account}>Last name</Text>


              <Inputfield1
                placeholder={'Enter last name'}
                MaxLength={256}
                value={SName}
                onBlur={() => {
                  if (SName.trim() !== '') {
                    setShowError((prevState) => ({
                      ...prevState,
                      SNameError: true,
                    }));
                  }
                }}
                onChangeText={(text) => {
                  if (SName != '' || SName != undefined) {
                    setSName(text);
                    setSNameError(ValidateSurname(text));
                  }
                }}
                ShowError={ShowError.SNameError}
                Error={SNameError}
              />
              <Text style={styles.account}>ID number</Text>

              <Inputfield1
                // edit={EmailEdit}
                placeholder={'Enter ID number'}
                MaxLength={12}
                value={phone}
                keyboardType="number-pad"
                onBlur={() => {
                  if (phone != '' || phone != undefined) {
                    setShowError(prevState => ({
                      ...prevState,
                      phoneerror: true,
                    }));
                  }
                }}
                onChangeText={(num) => {
                  if (phone != '' || phone != undefined) {
                    setPhone(num);
                    setPhoneError(ValidateMobileNo1(num));
                  }
                }}
                ShowError={ShowError.phoneError}
                Error={phoneError}

              />


            </View>


            <WholeButton1 Label={'Next'} Action={Form1com} styles={{ width: width * 0.9, marginTop: height * 0.25 }} />





          </View>
        </KeyboardAwareScrollView>
      </View>

    </SafeAreaView>
  )
}

export default Personalnformation

const styles = StyleSheet.create({
  mainviewStyle: {
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    // marginVertical: '6%',
  },
  logoStyle: {
    // marginTop: 84.43,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  logintext: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    marginTop: '15%',
    lineHeight: 32.97,
  },
  signStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 20,
    marginTop: 9,
  },
  inputStyle: {
    marginTop: 40,
  },
  account:{
    fontSize: 12,
    fontWeight: '400',
    color:'rgba(255, 255, 255, 0.6)'

  }

})