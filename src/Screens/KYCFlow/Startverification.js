import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import COLORS from '../../assets/colors/Colors'
import WholeButton1 from '../../Components/WholeButton1'
import Header from '../../Components/Header'
import Inputfield1 from '../../Components/Inputfields1'
import { ValidateEmail, ValidateMobileNo } from '../../Components/ValidationConfig/Validations'
import { CountryPicker } from 'react-native-country-codes-picker'
const { height, width } = Dimensions.get('window');

const Startverification = (props) => {
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [ShowError, setShowError] = useState({
        EmailError: false,
      
    });
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('🇮🇳');

    const [showBothCircles, setShowBothCircles] = useState(false);
    const [showBothCircles1, setShowBothCircles1] = useState(false);
    const [showBothCircles2, setShowBothCircles2] = useState(false);

    const toggleCircle = () => {
        setShowBothCircles(!showBothCircles);
    };
    const toggleCircle1 = () => {
        setShowBothCircles1(!showBothCircles1);
    };
    const toggleCircle2 = () => {
        setShowBothCircles2(!showBothCircles2);
    };











    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>


                <View style={styles.mainviewStyle}>
                    <Header navigate={() => props.navigation.goBack()} />

                    <Text style={styles.logintext}>Start verification</Text>
                    <Text style={styles.signStyle}>To ensure the security of your account and prevent fraud,Identity verification is required.</Text>

                    <View style={styles.inputStyle}>
                        <Text style={styles.account}>Issuing country  </Text>
                        <VECTOR_ICONS.AntDesign name="questioncircleo" size={13} color={'#A4A5A7'} style={{ marginTop: '1%' }} />
                    </View>


                    <View style={{ width: '25%', flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'center', marginRight: '6%' ,alignSelf:'center'}} >
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={{flexDirection:'row',alignItems:'center', backgroundColor:'rgba(255, 255, 255, 0.06)',width:width*0.9,alignSelf:'center',padding:'7%',borderRadius:8}}
              >
                <Text style={{
                  color: 'rgba(255, 255, 255, 0.4)',
                  fontSize: 25,
                  fontWeight: '400',
                  marginLeft:'4%'
                }}>
                  {countryCode.flag ?countryCode.flag:'IN'} </Text>

                <VECTOR_ICONS.AntDesign name={'down'} color={'#C7C7C7'} size={14} />

                <View style={{ backgroundColor: '#C7C7C7', width: 1, height: 40, marginLeft:'4%' }} />

                <Text style={{
                  color: 'rgba(255, 255, 255, 1)',
                  fontSize: 12,
                  fontWeight: '400',
                   marginLeft:'4%'
                  
                }}>
                  {countryCode?.name?.en  ? countryCode?.name?.en  :'India'} </Text>
              </TouchableOpacity>

              <CountryPicker
                show={show}
                style={{ color: 'rgba(255, 255, 255, 0.4)',
                  fontSize: 12,
                  fontWeight: '400',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                }}
                pickerButtonOnPress={(item) => {

                //   const flag = item?.flag || '';
                
                //   const name = item?.name.en || ''; 


                //   const formattedCountry = `${flag} ${name}`;


                  setCountryCode(item);
              
                  setShow(false);
                }}
              />
            </View>

                 
                    <Text style={[styles.account, { fontSize: 16, marginTop: '7%', color: '#FFF' }]}>Select ID type</Text>
                    <Text style={[styles.signStyle, { fontSize: 12, lineHeight: 17, }]}>You will need to provide you personal information, a photo of your ID, and complete face verification (the entire process should take about 3-4 minutes).</Text>



                    <View style={[styles.inputStyle1, { flexDirection: 'row', justifyContent: 'space-between', padding: '3%', marginTop: '7%', }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 50, height: 50, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 25, alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
                                <Image source={IMAGEPATH.IDCard} style={{ width: 33, height: 20 }} />
                            </View>
                            <Text style={styles.logintext4}>ID Card</Text>

                        </View>
                        <TouchableOpacity onPress={toggleCircle} style={{ right: 10 }}>
                            <View style={{ position: 'relative', width: 32, height: 32 }}>
                                <VECTOR_ICONS.FontAwesome
                                    name={'circle-thin'}
                                    size={32}
                                    color={'#768C5C'}
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                />


                                {showBothCircles && (
                                    <VECTOR_ICONS.FontAwesome
                                        name={'circle'}
                                        size={20}
                                        color={'#768C5C'}
                                        style={{ position: 'absolute', top: 5.6, left: 5 }}
                                    />
                                )}
                            </View>
                        </TouchableOpacity>



                    </View>
                    <View style={[styles.inputStyle1, { flexDirection: 'row', justifyContent: 'space-between', padding: '3%' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 50, height: 50, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 25, alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
                                <Image source={IMAGEPATH.Passport} style={{ width: 20, height: 32 }} />
                            </View>
                            <Text style={styles.logintext4}>Passport</Text>

                        </View>
                        <TouchableOpacity onPress={toggleCircle1} style={{ right: 10 }}>
                            <View style={{ position: 'relative', width: 32, height: 32 }}>
                                <VECTOR_ICONS.FontAwesome
                                    name={'circle-thin'}
                                    size={32}
                                    color={'#768C5C'}
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                />


                                {showBothCircles1 && (
                                    <VECTOR_ICONS.FontAwesome
                                        name={'circle'}
                                        size={20}
                                        color={'#768C5C'}
                                        style={{ position: 'absolute', top: 5.6, left: 5 }}
                                    />
                                )}
                            </View>
                        </TouchableOpacity>




                    </View>
                    <View style={[styles.inputStyle1, { flexDirection: 'row', justifyContent: 'space-between', padding: '3%' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 50, height: 50, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 25, alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
                                <Image source={IMAGEPATH.Driving} style={{ width: 33, height: 20 }} />
                            </View>
                            <Text style={styles.logintext4}>Driving license</Text>

                        </View>
                        <TouchableOpacity onPress={toggleCircle2} style={{ right: 10 }}>
                            <View style={{ position: 'relative', width: 32, height: 32 }}>
                                <VECTOR_ICONS.FontAwesome
                                    name={'circle-thin'}
                                    size={32}
                                    color={'#768C5C'}
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                />


                                {showBothCircles2 && (
                                    <VECTOR_ICONS.FontAwesome
                                        name={'circle'}
                                        size={20}
                                        color={'#768C5C'}
                                        style={{ position: 'absolute', top: 5.6, left: 5 }}
                                    />
                                )}
                            </View>
                        </TouchableOpacity>



                    </View>
                    <Text style={[styles.signStyle, { textAlign: 'center', width: width * 0.9, marginVertical: '5%' }]}>Refer to the user identification statement and the jumbo privacy statement for more information on how we store and use your personal information and biometric data. by clicking the “next” button, you indicate that you have read and agree to the above statements and agreements.</Text>
                    <WholeButton1 Label={'Next'} Action={()=>{ props.navigation.navigate("Personalnformation")}} styles={{ width: width * 0.9 }} />







                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Startverification

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
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        marginTop: '16%',
        lineHeight: 32.97,
    },
    logintext4: {
        fontSize: 12,
        fontWeight: '400',
        marginLeft: '9%',
        // fontFamily: FONTS.semiBold,
        color: '#fff',

    },
    inputStyle: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center'
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
    signStyle: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: '#rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        marginTop: 9,
    },
    inputStyle1: {
        alignItems: 'center',
        width: width * 0.9,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        padding: '2%',
        marginTop: '3%',
        borderRadius: 4

    },
})