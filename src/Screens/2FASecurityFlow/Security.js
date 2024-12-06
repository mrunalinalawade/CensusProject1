import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import ToggleSwitch from 'toggle-switch-react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import WholeButton1 from '../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const Security = (props) => {
  const refRBSheet1 = useRef();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

      <View style={styles.mainviewStyle}>
        <Header
          navigate={() => props.navigation.goBack()}
        />
        <Text style={styles.logintext}>Security</Text>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Text style={styles.textStyle}>Two-Factor Authentication (2FA)</Text>
          <Text style={styles.signStyle}>To protect your account, it is recommended to turn on at least <Text style={[styles.signStyle, { fontWeight: '500', color: '#FFFFFF' }]}>Two 2FA</Text></Text>

          <View style={{ backgroundColor: 'rgba(34, 35, 42, 1)', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={IMAGEPATH.verified} style={{ width: 25, height: 25 }} />
                <Text style={styles.Password}>Trading password</Text>
              </View>
              <TouchableOpacity onPress={()=>{props.navigation.navigate('EmptyTradingPassword')}}><Text style={styles.set}>Set password</Text></TouchableOpacity>
              
            </TouchableOpacity>
            <View style={[styles.viewStyle]}></View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={IMAGEPATH.Authentcate} style={{ width: 20, height: 21 }} />
                <Text style={styles.Password}>Authenticator App</Text>
              </View>
              <TouchableOpacity onPress={()=>{props.navigation.navigate('AddAuthenticatorAppverification')}}><Text style={styles.set}>Add Authenticator</Text></TouchableOpacity>
              
              
            </TouchableOpacity>
            <View style={[styles.viewStyle]}></View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={IMAGEPATH.setting} style={{ width: 25, height: 25 }} />
                <Text style={[styles.Password, { marginLeft: '18%' }]}>Email</Text>
              </View>
              <TouchableOpacity onPress={()=>{props.navigation.navigate('EmptyEmailVerification')}}>
              <Image source={IMAGEPATH.rightcircle} style={{ width: 21, height: 21, right: 12 }} />

              </TouchableOpacity>
            </TouchableOpacity>
            <View style={[styles.viewStyle]}></View>
            <TouchableOpacity onPress={() => refRBSheet1.current.open()} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={IMAGEPATH.phoneapp} style={{ width: 25, height: 25 }} />
                <Text style={styles.Password}>Phone number</Text>
              </View>
              <TouchableOpacity onPress={()=>{props.navigation.navigate('AddPhoneverification')}}>
              <Image source={IMAGEPATH.rightcircle} style={{ width: 21, height: 21, right: 12 }} />
                </TouchableOpacity>
             
            </TouchableOpacity>

            <View style={{ backgroundColor: '#272930', width: width * 0.83, alignItems: 'center', padding: '3%', alignSelf: 'center', marginVertical: '4%', borderRadius: 7 }}>
              <View style={{ flexDirection: 'row', padding: '2%' }}>
                <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                <Text style={styles.react}>Choose (Authenticator app + Email ) or (Mobile Phone + Trading password) to ensure the safety of your assets.</Text>
              </View>

              <View style={{ flexDirection: 'row', padding: '2%' }}>
                <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                <Text style={styles.react}>Keep your trading password safe and do no disclose it to others.</Text>
              </View>

            </View>
          </View>
          
          <View style={{ backgroundColor: 'rgba(34, 35, 42, 1)', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '5%' }}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Changepassword')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={IMAGEPATH.loginPassword} style={{ width: 20, height: 22 }} />
                <Text style={styles.Password}>Login Password</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={{ backgroundColor: 'rgba(34, 35, 42, 1)', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '5%' }}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('PaymentMethod')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={IMAGEPATH.paymentmethod} style={{ width: 26, height: 17.95 }} />
                <Text style={styles.Password}>Payment method</Text>
              </View>

            </TouchableOpacity>
          </View>
          
          <View style={{ backgroundColor: 'rgba(34, 35, 42, 1)', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '5%' }}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Deleteaccount')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={IMAGEPATH.deleteaccount} style={{ width: 22, height: 22 }} />
                <Text style={styles.Password}>Delete account</Text>
              </View>
            </TouchableOpacity>
          </View>








          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '15%' }}>
            <View>
              <Text style={styles.signStyle1}>Face ID</Text>
              <Text style={[styles.vibrate, { width: width * 0.64, marginTop: '3%', marginTop: '6%' }]}>Enabling this feature indicated that you agree to the </Text>
              <Text style={[styles.vibrate, { fontWeight: '500', color: '#2F9ED6' }]}>Biometrics usage agreement</Text>
            </View>
            <ToggleSwitch
              isOn={false}
              onColor="rgba(118, 140, 92, 1)"
              offColor="rgba(255, 255, 255, 0.6)"
              // labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => console.log("changed to : ", isOn)}
            />
          </View>

        </ScrollView>



        <RBSheet
          ref={refRBSheet1}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={430}
          animationType={"fade"}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
            draggableIcon: {
              backgroundColor: '#fff',
              width: width * 0.2,
              height: 100
            },
            container: {
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
              backgroundColor: "#1C1D22",
            },
          }}
        >
          <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
            <Image source={IMAGEPATH.stepverification} style={{ width: 80, height: 80, marginVertical: '7%' }} />
            <Text style={styles.change}>Are you sure you want to {'\n'}change phone number?</Text>

            <View style={{ flexDirection: 'row', padding: '2%', marginTop: '8%' }}>
              <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
              <Text style={[styles.react, { fontSize: 12, color: 'rgba(255, 255, 255, 0.8)', lineHeight: 16 }]}>Withdrawals and P2P transactions will be disabled for 24 hours after removing your phone number verification to ensure of safety of your assets.</Text>
            </View>

            <View style={{ flexDirection: 'row', padding: '2%', marginTop: '2%' }}>
              <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
              <Text style={[styles.react, { fontSize: 12, color: 'rgba(255, 255, 255, 0.8)', lineHeight: 16 }]}>Two security verification methods are required for withdrawals and other actions. Using only one verification method will put your account at greater risk.</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>

              <WholeButton1 Label={'Cancel'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
              <WholeButton1 Label={'Continue'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', }} />
            </View>


          </View>
        </RBSheet>

      </View>
    </SafeAreaView>
  )
}

export default Security

const styles = StyleSheet.create({
  mainviewStyle: {
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    flex: 1

  },
  logintext: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    marginTop: '12%',
    lineHeight: 32.97,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginTop: '16%',

  },
  signStyle: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: 7,
  },
  Password: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    marginLeft: '10%'

  },
  set: {
    fontSize: 10,
    fontWeight: '400',
    color: '#768C5C',
    right: 10

  },
  viewStyle: {
    width: width * 0.82,
    backgroundColor: 'rgba(69, 71, 79, 1)',
    height: 1.5,
    marginVertical: '2.5%'
    // right: 16,
  },
  react: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',

  },
  signStyle1: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',

  },
  vibrate: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '400',
  },
  change: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 25


  }
})