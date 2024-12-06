import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import WholeButton1 from '../../Components/WholeButton1';
import Inputfield1 from '../../Components/Inputfields1';
import RBSheet from 'react-native-raw-bottom-sheet';
import FONTS from '../../assets/Fonts';
import { ValidateFullname } from '../../Components/ValidationConfig/Validations';


const { height, width } = Dimensions.get('window');
const Sendviacryptonetwork = (props) => {
  const refRBSheet = useRef();
  const [FName, setFName] = useState('');
  const [FNameError, setFNameError] = useState('');
  const [Network, setNetwork] = useState('');
  const [NetworkError, setNetworkError] = useState('');

  const [Minimum, setMinimum] = useState('');
  const [MinimumError, setMinimumError] = useState('');

  const [ShowError, setShowError] = useState({
    FNameError: false,
    NetworkError: false,
    MinimumError: false,

  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={styles.mainviewStyle}>
        <Header
          Frame={true}
          navigate={() => props.navigation.goBack()}

        />
        <Text style={styles.logintext}>Send USDT</Text>
        <Text style={styles.account}>Address</Text>
        <Inputfield1
          placeholder={'Enter First Name'}
          MaxLength={256}
          vector
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.account}>Network</Text>
          <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '1.8%' }} />

        </View>
        {/* <Inputfield1
          placeholder={'Select Network'}
          MaxLength={256}
          Network
          NetworkPress={() => { refRBSheet.current.open() }}
          value={Network}
          onBlur={() => {
            if (Network != '' || Network != undefined) {
              setShowError(prevState => ({
                ...prevState,
                NetworkError: true,
              }));
            }
          }}
          onChangeText={(text) => {
            if (Network != '' || Network != undefined) {
              setNetwork(text);
              setNetworkError(ValidateFullname(text));
            }
          }}
          ShowError={ShowError.NetworkError}
          Error={NetworkError} /> */}
            <TouchableOpacity onPress={() => { refRBSheet.current.open() }} style={[styles.InputFieldStyle,]}>
                        <Text style={styles.PlaceholderStyle}>Select Network</Text>
                        <TouchableOpacity onPress={props.NetworkPress}>
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#7F8082'} size={15} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.account}>Withdrawal amount</Text>
          <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '1.8%' }} />
        </View>
        <Inputfield1
          placeholder={'Minimum 0'}
          MaxLength={256}
          withamount
          value={Minimum}
          onBlur={() => {
            if (Minimum != '' || Minimum != undefined) {
              setShowError(prevState => ({
                ...prevState,
                MinimumError: true,
              }));
            }
          }}
          onChangeText={(text) => {
            if (Minimum != '' || Minimum != undefined) {
              setMinimum(text);
              setMinimumError(ValidateFullname(text));
            }
          }}
          ShowError={ShowError.MinimumError}
          Error={MinimumError} />


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9 }}>
          <Text style={styles.account}>Available</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={[styles.account, { color: '#FFFFFF' }]}>0.0223435345</Text>
            <Text style={[styles.account, { marginHorizontal: '1%', color: '#FFFFFF' }]} > USDT</Text>
            <VECTOR_ICONS.AntDesign name="down" size={15} color={'#77777A'} />

          </View>
        </View>
      </View>
      <View style={styles.viewStyle}></View>
      <View style={{ width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', marginTop: '10%', alignSelf: 'flex-start' }}>
          <VECTOR_ICONS.Entypo name="dot-single" size={20} color={'#77777A'} />
          <Text style={[styles.signStyle1, { alignSelf: 'flex-start', width: width * 0.84 }]}> Do not withdraw directly to a crowdfund or ICO. We will not credit your account with token form the sale</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: '4%', alignSelf: 'flex-start' }}>
          <VECTOR_ICONS.Entypo name="dot-single" size={20} color={'#77777A'} />
          <Text style={[styles.signStyle1, { alignSelf: 'flex-start', width: width * 0.84 }]}> Do not transact with sanctioned entitles Learn more.</Text>
        </View>
      </View>

      <View style={[styles.viewStyle]}></View>
      <View style={{ alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, flexDirection: 'row', alignSelf: 'center' }}>
        <View>
          <Text style={styles.account}>Available</Text>
          <View style={{ flexDirection: 'row', marginVertical: '2%' }}>
            <Text style={styles.account1}>0.00</Text>
            <Text style={[styles.account1, { fontSize: 14 }]}> USDT</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.account}>Network fee </Text>
            <Text style={[styles.account, { color: '#fff' }]}> 0.00</Text>
            <Text style={[styles.account, { color: '#fff' }]}> USDT</Text>

          </View>

        </View>


        <WholeButton1 Label={'Withdraw'} Action={() => props.navigation.navigate('Addressreveal') } styles={{ width: width * 0.42, padding: '3%', marginTop:'13%'}} />


      </View>


      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={630}
        animationType={"fade"}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
          draggableIcon: {
            backgroundColor: '#fff',
            width: width * 0.2
          },
          container: {
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
            backgroundColor: "#1C1D22",
          },
        }}
      >
        <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
          <Text style={styles.logintext1}>Choose network</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', marginTop: '9%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

              <View>
                <Text style={styles.crptoStyle}>BNB smart chain (BEP20?</Text>
                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.00000)</Text>
                <Text style={styles.signStyle1}>Minimum withdrawal 6 USDT</Text>
                <Text style={styles.signStyle1}>Arrival time ≈ 3 mins </Text>
              </View>


            </View>

            <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

              <View>
                <Text style={styles.crptoStyle}>Tron (TRC20)</Text>
                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.999999)</Text>
                <Text style={styles.signStyle1}>Minimum withdrawal 10 USDT</Text>
                <Text style={styles.signStyle1}>Arrival time ≈ 2 mins </Text>
              </View>


            </View>

            <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

              <View>
                <Text style={styles.crptoStyle}>BNB smart chain (BEP20?</Text>
                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.00000)</Text>
                <Text style={styles.signStyle1}>Minimum withdrawal 6 USDT</Text>
                <Text style={styles.signStyle1}>Arrival time ≈ 3 mins </Text>
              </View>


            </View>

            <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

              <View>
                <Text style={styles.crptoStyle}>Tron (TRC20)</Text>
                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.999999)</Text>
                <Text style={styles.signStyle1}>Minimum withdrawal 10 USDT</Text>
                <Text style={styles.signStyle1}>Arrival time ≈ 2 mins </Text>
              </View>


            </View>

            <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

              <View>
                <Text style={styles.crptoStyle}>BNB smart chain (BEP20?</Text>
                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.00000)</Text>
                <Text style={styles.signStyle1}>Minimum withdrawal 6 USDT</Text>
                <Text style={styles.signStyle1}>Arrival time ≈ 3 mins </Text>
              </View>


            </View>
          </ScrollView>
          <View style={[styles.viewStyle]}></View>
          <View style={{ flexDirection: 'row', marginTop: '4%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, backgroundColor: '#2E2F36', borderRadius: 5, padding: '4%', marginVertical: '1%' }}>
            <Image source={IMAGEPATH.Square} style={{ width: 20, height: 20, }} />
            <Text style={[styles.account, { color: 'rgba(255, 255, 255, 0.6)', width: width * 0.75 }]}>Ensure the network matches the withdrawal address and thedeposit platform support it, or assets may be lost</Text>

          </View>




        </View>
      </RBSheet>


    </SafeAreaView>
  )
}

export default Sendviacryptonetwork

const styles = StyleSheet.create({
  logintext: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    marginTop: '17%',
    lineHeight: 32.97,
  },
  mainviewStyle: {
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    marginVertical: '1%',
  },
  account: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 20,
    marginVertical: '1.5%'
  },
  account1: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    // lineHeight: 20,
    // marginVertical: '1.5%'
  },
  signStyle1: {
    fontSize: 12,
    // fontFamily: FONTS.Regular,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 18,
    // marginTop: '6%',
    // textAlign:'center'
  },
  viewStyle: {
    width: width,
    backgroundColor: '#2D2E36',
    height: 1.5,
    marginTop: '5.5%'


  },
  logintext1: {
    fontSize: 22,
    fontWeight: '600',
    // fontFamily: FONTS.semiBold,
    alignSelf: 'flex-start',
    color: '#fff',
    marginTop: '6%',
    lineHeight: 32.97,

  },
  crptoStyle: {
    fontSize: 16,
    fontWeight: '600',

    color: '#fff',
    marginTop: '2%',

  },
  InputFieldStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '400',
    borderRadius: 7,
    width: width * 0.9,
    padding: '6%',
    fontFamily: FONTS.regular,
    color: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'space-between',
    marginVertical: '2%'
},
PlaceholderStyle: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 12,
    marginLeft: '3%',
    fontWeight: '400',
    fontFamily: FONTS.regular,

},


})














{/* <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={235}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={styles.logintext1}>Identify verification required</Text>
                    <Text style={styles.signStyle1}>To enjoy the full range of our products and services, we kindly request you complete the identity verification process.</Text>
                    <WholeButton1 Label={'Okay'} Action={() => { props.navigation.navigate('FaceIDpermission') }} styles={{ width: width * 0.9, }} />

                </View>
            </RBSheet> */}