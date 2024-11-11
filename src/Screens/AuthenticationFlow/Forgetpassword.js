import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FONTS from '../../assets/Fonts';
import COLORS from '../../assets/colors/Colors';
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import Inputfield1 from '../../Components/Inputfields1';
import WholeButton1 from '../../Components/WholeButton1';
import { ValidateEmail, ValidatePassword } from '../../Components/ValidationConfig/Validations';
import Header from '../../Components/Header';

const { height, width } = Dimensions.get('window');
const Forgetpassword = (props) => {
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [show, setshow] = useState(true);

  const [ShowError, setShowError] = useState({

    EmailError: false,
   

  });
  const Submit = () => {

    const emailError = ValidateEmail(Email)
  

    if (emailError == '' ) {

      props.navigation.navigate('SetPassword')
    } else {

      setEmailError(emailError)
    
      setShowError({
        EmailError: true,
      

      })

    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.mainviewStyle}>
          <Header
              sign={true}
              navigate={() => props.navigation.goBack()}
              navigate1={() => props.navigation.navigate('Signup')}
            />
            <Text style={styles.logintext}>Forget password?</Text>

            <View style={styles.viewStyle1}>
                <TouchableOpacity style={styles.inputStyle1}><Text style={styles.phoneStyle2}>Phone</Text></TouchableOpacity>
                <TouchableOpacity style={styles.inputStyle1}><Text style={styles.phoneStyle2}>Email</Text></TouchableOpacity>
            </View>
            <View style={styles.inputStyle}>
            <Text style={styles.account}>Phone Number or email</Text>
              <Inputfield1
              PhoneField
                placeholder={'Email or Phone number'}
                MaxLength={256}
                value={Email}
                onBlur={() => {
                  if (Email != '' || Email != undefined) {
                    setShowError(prevState => ({
                      ...prevState,
                      EmailError: true,
                    }));
                  }
                }}
                onChangeText={(text) => {
                  if (Email != '' || Email != undefined) {
                    setEmail(text);
                    setEmailError(ValidateEmail(text));
                  }
                }}
                ShowError={ShowError.EmailError}
                Error={EmailError}
              />

            
            </View>


            <WholeButton1 Label={'Next'} Action={Submit} styles={{ width: width * 0.9 }} />
          </View>
        </KeyboardAwareScrollView>
      </View>

    </SafeAreaView>
  )
}

export default Forgetpassword

const styles = StyleSheet.create({
  mainviewStyle: {
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    marginVertical: '6%',
  },
  logintext: {
    fontSize: 32,
    fontWeight: '600',
    // fontFamily: FONTS.semiBold,
    color: '#fff',
    marginTop: '20%',
    lineHeight: 32.97,
  },
  viewStyle1:{
    flexDirection:'row',
    alignItems:'center',
    width:width*0.9,
    backgroundColor:'#000',
    padding:'2%',
    justifyContent:'space-between',
    marginTop:'12%',
    borderRadius:7
  },

  inputStyle: {
    marginTop: 40,
  },

  viewStyle: {
    width: width * 0.35,
    backgroundColor: '#2D2F36',
    height: 1.5


  },
  inputStyle1:{
    alignItems:'center',
    width:width*0.42,
    backgroundColor:'red',
    padding:'3.8%',
    backgroundColor:'rgba(42, 43, 47, 1)',
    borderRadius:5

  },
  phoneStyle2:{
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: '#FFFFFF',
    fontWeight: '500'
  },
  account: {
    fontSize: 12,
    // fontFamily: FONTS.Regular,
    fontWeight: '400',
    color: '#rgba(255, 255, 255, 0.6)',
    lineHeight: 20,
    // marginTop: 2,
    marginVertical: '2%'
},


})