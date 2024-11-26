import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH } from '../../assets/Theme';
import FONTS from '../../assets/Fonts';
import AssetDropdown from '../../Components/AssetDropdown';
import FiatDropdown from '../../Components/FiatDropdown';
import PriceTypeDropdown from '../../Components/PriceTypeDropdown';
import WholeButton1 from '../../Components/WholeButton1';
import RBSheet from 'react-native-raw-bottom-sheet';

const { height, width } = Dimensions.get('window');
const SetTypeandPrice = (props) => {
  const [selected, setSelected] = useState('phone');
  const [Asset, setAsset] = useState(null);
  const [AssetError, setAssetError] = useState('');
  const [INR, setINR] = useState(null);
  const [INRError, setINRError] = useState('');
  const [Fixed, setFixed] = useState(null);
  const [FixedError, setFixedError] = useState('');
  const refRBSheet = useRef();

  const [value, setValue] = useState(621.19);
  const increaseValue = () => setValue(prevValue => prevValue + 1);
  const decreaseValue = () => setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={styles.mainviewStyle}>
        <Header
          // Add={true}
          textlabel={'Support'}
          navigate={() => props.navigation.goBack()}
        />

        <ScrollView showsVerticalScrollIndicator={false} style={{bottom:'1%'}} >
          <Image source={IMAGEPATH.line2} style={{ width: '99%', height: 27, marginTop: '15%' }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
            <Text style={styles.text}>Set Type & Price</Text>
            <Text style={styles.text1}>Set Amount & Method</Text>
            <Text style={styles.text1}>Set Conditions</Text>
          </View>


          <Text style={styles.main}>I want to</Text>
          <View style={styles.viewStyle1}>
            <TouchableOpacity
              style={[
                styles.inputStyle1,
                selected === 'phone' ? { backgroundColor: 'rgba(42, 43, 47, 1)' } : null
              ]}
              onPress={() => setSelected('phone')}
            >
              <Text style={styles.phoneStyle2}>Buy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.inputStyle1,
                selected === 'email' ? { backgroundColor: 'rgba(42, 43, 47, 1)' } : null
              ]}
              onPress={() => setSelected('email')}
            >
              <Text style={styles.phoneStyle2}>Buy</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.61, justifyContent: 'space-between', marginTop: '3%', }}>
            <Text style={styles.main}>Asset</Text>
            <Text style={styles.main}>With fiat</Text>
          </View>
          <View style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between' }}>
            <AssetDropdown
              setAsset={setAsset}
              Asset={Asset}
              setAssetError={setAssetError}
            />
            {AssetError && Asset === null && (
              <Text style={styles.Errorstyle1}>{AssetError}</Text>
            )}

            <FiatDropdown
              setINR={setINR}
              INR={INR}
              setINRError={setINRError}
            />
            {INRError && INR === null && (
              <Text style={styles.Errorstyle1}>{INRError}</Text>
            )}
          </View>

          <TouchableOpacity onPress={() => { refRBSheet.current.open() }}><Text style={styles.main}>Price Type</Text></TouchableOpacity>
          <PriceTypeDropdown
          // dropvalue={onPress={() => { refRBSheet.current.open() }
            setFixed={setFixed}
            Fixed={Fixed}
            setFixedError={setFixedError}
          />
          {FixedError && Fixed === null && (
            <Text style={styles.Errorstyle1}>{FixedError}</Text>
          )}

          <Text style={[styles.main, { marginTop: '9%' }]}>Wallet label (Optional)</Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={decreaseValue}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.valueText}>{value.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={increaseValue}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={[styles.main, { marginTop: '4%' }]}>Price range:</Text>
            <Text style={[styles.main, { marginTop: '4%' }]}> 84.41 - 92.85</Text>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={[styles.main, { marginTop: '8%' }]}>Your Price</Text>
            <Text style={[styles.text6, { marginTop: '8%' }]}>  ₹ 84.41</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={[styles.main, { marginTop: '8%' }]}>Highest Ad Price</Text>
            <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '1.8%', marginTop: '8%' }} />
            <Text style={[styles.text6, { marginTop: '8%' }]}>  ₹ 92.85</Text>
          </View>

        </ScrollView>



        <View style={[styles.viewStyle]}></View>
        <WholeButton1 Label={'Next'} Action={() => {props.navigation.navigate('SetAmountandmethods') }} styles={{ width: width * 0.9, bottom: '4%' }} />






      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={335}
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
          <Text style={styles.logintext1}>Price Type</Text>
          <TouchableOpacity  style={{flexDirection:'row',marginTop:'9%',justifyContent:'space-between',alignItems:'center',width: width * 0.9,borderWidth:1,borderColor:'rgba(75, 77, 86, 1)',borderRadius:5,padding:'4%',marginVertical:'3%'}}>
        
            <View>
            <Text style={styles.crptoStyle}>Fixed</Text>
            <Text style={styles.signStyle1}>Set a constant price, unaffected by market fluctuations</Text>
            </View>
           

          </TouchableOpacity>

          <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width: width * 0.9,borderWidth:1,borderColor:'rgba(75, 77, 86, 1)',borderRadius:5,padding:'4%',marginVertical:'3%'}}>
        
            <View style={{width:width*0.68}}>
            <Text style={styles.crptoStyle}>Floating</Text>
            <Text style={styles.signStyle1}>Specify a dynamic price. Floating price = Market price x price margin</Text>
            </View>
           

          </View>
       
       

        </View>
      </RBSheet>
    </SafeAreaView>
  )
}

export default SetTypeandPrice

const styles = StyleSheet.create({
  mainviewStyle: {
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '400'
  },
  text6: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500'
  },
  text1: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 10,
    fontWeight: '400'
  },
  main: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    fontWeight: '400',
    marginTop: '14%'

  },
  viewStyle1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9,
    backgroundColor: '#000',
    padding: '2%',
    justifyContent: 'space-between',
    marginTop: '4%',
    borderRadius: 7
  },
  inputStyle1: {
    alignItems: 'center',
    width: width * 0.42,
    // backgroundColor:'red',
    padding: '3.8%',

    borderRadius: 5

  },
  phoneStyle2: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: '#FFFFFF',
    fontWeight: '500'
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 10,
    padding: 8,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#555',
    // borderRadius: 5,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 20,
    fontWeight: '400',

  },
  valueText: {
    marginHorizontal: 20,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: '9%'
  },
  viewStyle: {
    width: width,
    backgroundColor: 'rgba(69, 71, 79, 1)',
    height: 1.5,
    right: 16,
    marginTop: '1%',bottom:'1%'
  },
  logintext1: {
    fontSize: 22,
    fontWeight: '600',
    // fontFamily: FONTS.semiBold,
    alignSelf:'flex-start',
    color: '#fff',
    marginTop: '6%',
    lineHeight: 32.97,

},
signStyle1: {
  fontSize: 11,
  fontWeight: '400',
  color: 'rgba(255, 255, 255, 0.6)',
  lineHeight: 18,
  marginTop: '3%',

},
crptoStyle:{
  fontSize:16,
  fontWeight: '600',

  color: '#fff',
  marginTop: '6%',

}
})