

import { StyleSheet, Text, View ,SafeAreaView,ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const RateBTCBtoUSDT = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
    <ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.mainviewStyle}>
  <Header
    swap={true}
    navigate={() => props.navigation.goBack()}
  />

  <Text style={styles.logintext}>Swap</Text>


  <View style={{ width: width * 0.9, borderWidth: 1, borderColor: '#393C48', borderRadius: 7, alignSelf: 'center', marginVertical: '7%' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.82, marginLeft: '3%', marginVertical: '3%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.33, }}>
        <Text style={styles.signStyle}>From</Text>
        <Image source={IMAGEPATH.BNBChain} style={{ width: 25, height: 25 }} />
        <Text style={styles.signStyle}>BNB Chain</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.30, }}>
        <Image source={IMAGEPATH.Doc} style={{ width: 25, height: 25 }} />
        <Text style={styles.signupStyle}>0</Text>
        <TouchableOpacity>
        <Text style={[styles.signStyle, { color: '#2F9ED6' }]}>Add Funds</Text>
        </TouchableOpacity>
       

      </View>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.82, marginLeft: '3%', marginVertical: '3%' }}>
      <Text style={[styles.signupStyle, { fontSize: 20 }]}>1</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.24, }}>
        <Image source={IMAGEPATH.BNBChainBlack} style={{ width: 25, height: 25 }} />
        <Text style={styles.logintext1}>BNB</Text>
        <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={14} />

      </View>
    </View>

    <Text style={[styles.signStyle, { marginHorizontal: '4%', marginTop: '1%' }]}>$2,779.19</Text>

    <View style={styles.accountStyle}>
      <View style={styles.viewStyle}></View>
      <Image source={IMAGEPATH.SwapIcon} style={{ width: 45, height: 45, marginHorizontal: '4%' }} />
      <View style={styles.viewStyle}></View>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.82, marginLeft: '3%', marginVertical: '3%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.33, }}>
        <Text style={styles.signStyle}>From</Text>
        <Image source={IMAGEPATH.BNBChain} style={{ width: 25, height: 25 }} />
        <Text style={styles.signStyle}>BNB Chain</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.30, }}>
        <Image source={IMAGEPATH.Doc} style={{ width: 25, height: 25 }} />
        <Text style={styles.signupStyle}>0</Text>
        <Text style={[styles.signStyle, { color: '#2F9ED6' }]}>Add Funds</Text>

      </View>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.82, marginLeft: '3%', marginVertical: '3%' }}>
      <Text style={[styles.signupStyle, { fontSize: 20 }]}>583.2645435</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.27, }}>
        <Image source={IMAGEPATH.Tether} style={{ width: 25, height: 25 }} />
        <Text style={styles.logintext1}>USDT</Text>
        <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={14} />

      </View>
    </View>

    <Text style={[styles.signStyle, { marginHorizontal: '4%', marginVertical: '4%' }]}>$2,779.19</Text>


  </View>


  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9,marginVertical:'3%' }}>
    <Text style={styles.signStyle}>Rate</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
      <Text style={[styles.signupStyle,{fontSize:12}]}>1BNB ≈ 583.264356345 </Text>
      <Text style={[styles.signupStyle,{fontSize:12}]}>USDT  </Text>
      <VECTOR_ICONS.AntDesign name={'swap'} color={'#8D939F'} size={20} />
    </View>
  </View>

  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9,marginVertical:'3%' }}>
    <Text style={styles.signStyle}>Provider</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
  <Image source={IMAGEPATH.DOT} style={{ width: 20, height: 20}} />
  <View style={{backgroundColor:'rgba(47, 158, 214, 0.1)',borderRadius:5,padding:'5%',}}>
    <Text style={[styles.signupStyle,{color:'#2F9ED6',fontSize:10}]}>Best price</Text>
  </View>
  <VECTOR_ICONS.AntDesign name={'right'} color={'#8D939F'} size={16} />

    </View>
  </View>

  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9,marginVertical:'3%' }}>
    <Text style={styles.signStyle}>Minimum received</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
      <Text style={[styles.signupStyle,{fontSize:12}]}>577.123424312 USDT</Text>
      <Text style={[styles.signStyle]}>(1%) </Text>
      <Image source={IMAGEPATH.edittext} style={{ width: 15, height: 15,}} />
     
    </View>
  </View>

  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9,marginVertical:'3%' }}>
    <Text style={styles.signStyle}>Network fee</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
      <Text style={[styles.signupStyle,{fontSize:12}]}>0.000245 BNB </Text>
      <Text style={[styles.signupStyle,{fontSize:12}]}>($0.14)  </Text>
      <Text style={[styles.signStyle]}> (1 min)</Text>

    </View>
  </View>







  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9,marginTop:'13%',backgroundColor:'#24262D',borderRadius:7,padding:'5%'}}>
    <Text style={[styles.signStyle,{color:'#fff'}]}>BNB/USDT</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
      <Text style={[styles.signStyle,{color:'#fff'}]}>583.5635434535  </Text>
      <Text style={[styles.signStyle,{color:'#FF6666'}]}>-3.14%  </Text>
      <VECTOR_ICONS.AntDesign name={'up'} color={'#fff'} size={16} />

    </View>
  </View>


  <WholeButton1 Label={'Swap Now'} Action={()=>{}} styles={{ width: width * 0.9,marginTop:'8%' }} />




  </View>
</ScrollView>



</SafeAreaView>
  )
}

export default RateBTCBtoUSDT

const styles = StyleSheet.create({
    mainviewStyle: {
      justifyContent: 'center',
      width: width * 0.9,
      alignSelf: 'center',
  
    },
    logintext: {
      fontSize: 32,
      fontWeight: '600',
      color: '#fff',
      marginTop: '12%',
      lineHeight: 32.97,
    },
    signStyle: {
      fontSize: 12,
      fontWeight: '400',
      color: 'rgba(255, 255, 255, 0.6)',
  
    },
    signupStyle: {
      fontSize: 13,
      fontWeight: '500',
      color: '#fff',
    },
    logintext1: {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff',
  
  
    },
    accountStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      alignItems: 'center',
      marginVertical: '3%'
  
    },
    viewStyle: {
      width: width * 0.33,
      backgroundColor: '#2D2F36',
      height: 1.5
    },
    logintext2: {
      fontSize: 22,
      fontWeight: '600',
      // fontFamily: FONTS.semiBold,
      alignSelf:'flex-start',
      color: '#fff',
      marginTop: '6%',
      lineHeight: 32.97,
  
  },
  signStyle1: {
    fontSize: 12,
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