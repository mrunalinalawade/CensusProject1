import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const Ordercreated = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={styles.mainviewStyle}>
        <Header
          order={true}
          navigate={() => props.navigation.goBack()}

        />
       <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom:'40%' }} >
        <Text style={styles.logintext}>Ordered created</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '2%' }}>
          <Text style={styles.pay}>Pay the seller within </Text>
          <Text style={styles.time}>14:53</Text>
        </View>

        <View style={styles.ViewStylew2}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.8 }}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={IMAGEPATH.Arti} style={{ width: 30, height: 30 }} />
                <Text style={[styles.time, { marginLeft: '6%' }]}>Aarti1</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '9%', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 8, padding: '4%' }}>
                <Image source={IMAGEPATH.Crpto5} style={{ width: 15, height: 20, marginLeft: '2%' }} />
                <Text style={styles.text}>Escrowed Crypto</Text>
              </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: 'rgba(118, 140, 92, 1)', borderRadius: 8, padding: '3%', alignItems: 'center' }}>
              <Text style={styles.chatStyle}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ViewStylew2}>
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' }}>
            <Text style={styles.buy}>Buy</Text>
            <Text style={styles.buyUS}>USDT</Text>
          </View>
          <View style={styles.viewStle5}>
            <Text style={styles.tabText61} >Payment time limit</Text>
            <Text style={styles.tabText62}>₹ 2,000.00</Text>
          </View>
          <View style={[styles.viewStle5, { marginTop: '5%' }]}>
            <Text style={styles.tabText61} >Price</Text>
            <Text style={styles.tabText62}>₹ 89.95</Text>
          </View>
          <View style={styles.viewStle6}>
            <TouchableOpacity onPress={() => { refRBSheet1.current.open() }} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.tabText61}>Receive Quantity</Text>
              <Image source={IMAGEPATH.Square} style={{ width: 12, height: 12, marginLeft: '4%', marginTop: '4%' }} />
            </TouchableOpacity>
            <Text style={styles.tabText62}>₹ 89.95</Text>
          </View>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', width: width * 0.87, justifyContent: 'space-between', marginVertical: '5%' }}>
          <Text style={styles.time}>Payment time limit</Text>
          <View style={styles.viewStyle8}>
            <Image source={IMAGEPATH.Google} style={{ width: 35, height: 30 }} />
            <Text style={[styles.tabText62, { marginLeft: '3%' }]} >Google pay (Gpay)</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', width: width * 0.87, justifyContent: 'space-between', marginVertical: '5%' }}>
          <Text style={styles.time}>Advertiser’s Terms</Text>
          <TouchableOpacity>
            <VECTOR_ICONS.AntDesign name={'down'} size={15} color={'rgba(255, 255, 255, 0.5)'} />
          </TouchableOpacity>
        </View>



        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', backgroundColor: 'rgba(47, 158, 214, 0.1)', padding: '3%', borderRadius: 7, marginTop:height*0.13 }}>
          <VECTOR_ICONS.AntDesign name={'questioncircleo'} size={15} color={'#2F9ED6'} />
          <Text style={styles.help}>Help</Text></TouchableOpacity>








          </ScrollView>
                <View style={[styles.viewStyle]}></View>
                <WholeButton1 Label={'View payment details'} Action={() => {props.navigation.navigate('Chats') }} styles={{ width: width * 0.9, bottom: '16%' }} />
      </View>
    </SafeAreaView>
  )
}

export default Ordercreated

const styles = StyleSheet.create({
  logintext: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    marginTop: '13%',
    lineHeight: 32.97,
  },
  mainviewStyle: {

    width: width * 0.9,
    alignSelf: 'center',

  },
  pay: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '400'
  },
  time: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500'

  },
  ViewStylew2: {
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: width * 0.89,
    borderWidth: 1.5,
    borderColor: '#3A3D4B',
    alignSelf: 'flex-start',
    padding: '4%',
    borderRadius: 10,
    marginTop: '8%',
    margin: 2
  },
  text: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '400',
    marginLeft: '6%'

  },
  chatStyle: {
    fontSize: 12,
    color: '#1C1D22',
    fontWeight: '400',
    marginHorizontal: '4%'


  },
  buy: {
    fontSize: 18,
    color: '#42C9A1',
    fontWeight: '600',

  },
  buyUS: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: '4%'

  },
  viewStle5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.81,
    marginTop: '10%'
  },
  viewStle6: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.81,
    marginVertical: '4%'
  },
  tabText61: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',

  },
  tabText62: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',

  },
  viewStyle8: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.42,
    marginTop: '2%'
  },
  help: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2F9ED6',
    marginHorizontal: '2%'

  },
  viewStyle: {
    width: width,
    backgroundColor: 'rgba(69, 71, 79, 1)',
    height: 1.5,
    right: 16,
    // marginTop: '1%',
    bottom: '14%'


},

})
