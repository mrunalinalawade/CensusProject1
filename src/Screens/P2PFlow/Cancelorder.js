import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import WholeButton1 from '../../Components/WholeButton1';
import RBSheet from 'react-native-raw-bottom-sheet';


const { height, width } = Dimensions.get('window');
const Cancelorder = (props) => {
  const refRBSheet3 = useRef();

  const Confirm = () => {
    refRBSheet3.current.open()
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={{ flex: 1 }}>
        <View style={styles.mainviewStyle}>
          <Header navigate={() => props.navigation.goBack()} />
          <Text style={styles.logintext}>Select reason to cancel</Text>
          <ScrollView showsVerticalScrollIndicator={false} style={{ height: height * 0.67, }} >
            <Text style={styles.order}>Tips for order cancellation</Text>
            <Text style={styles.account}>Due to buyer</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>I do not want to trade anymore</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>I do not meet the requirements of the advertiser’s tradingterms and condition</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>There is technical or network error with the paymentplatform</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>I have not paid but clicked ‘transferred’</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>Other reasons</Text>
            </View>


            <Text style={styles.account}>Due to seller</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>Seller is asking for extra fee</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>Problem with seller’s payment method in unsuccessful payments</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>Seller can not release the order due to network issue. The seller has refunded the amount</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>Not response from the seller</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, alignSelf: 'center' }}>
              <VECTOR_ICONS.FontAwesome name={'circle-thin'} color={'rgba(255, 255, 255, 0.4)'} size={25} />
              <Text style={styles.tips}>Seller’s payment account is invalid/frozen</Text>
            </View>

          </ScrollView>

          <View style={[styles.viewStyle1,]}></View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '3%', }}>
            <VECTOR_ICONS.FontAwesome name={'square-o'} color={'#424349'} size={25} />
            <Text style={[styles.tips, { marginLeft: '4%' }]}>I have not paid the seller / have received seller’s refund</Text>
          </View>

          <WholeButton1 Label={'Confirm cancellation'} Action={Confirm} styles={{ width: width * 0.9, bottom: '2%' }} />

        </View>
      </View>

      <RBSheet
        ref={refRBSheet3}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={500}
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
        <View style={{ width: width * 0.95, alignSelf: 'center', alignItems: 'center', padding: '3%', }}>
         

          <Image source={IMAGEPATH.extramark} style={{ width: 100, height: 100, marginLeft: '3%', marginTop: '9%', }} />
          <Text style={[styles.logintext3, { alignSelf: 'center' }]}>Cancel order</Text>

          <Text style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: 12,
            fontWeight: '400', alignSelf: 'center', marginVertical: '4%', textAlign: 'center'
          }}>If you have already paid the seller, please do not cancel the order or exceed the time limit 3 times in a day,
            you order function will be disabled for the remainder of the day, and your personal completion rate will be affected.
            however, if the order is canceled due to the seller’s reasons, the system will re-evaculate the situation.<Text style={{
              color: 'rgba(118, 140, 92, 1)',
              fontSize: 12,
              fontWeight: '500', alignSelf: 'center'
            }}>View more</Text></Text>
             <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'flex-start' ,marginTop:'6%'}}>
              <VECTOR_ICONS.AntDesign name={'checksquare'} color={'#FFFFFF'} size={20} />
              <Text style={styles.tips}>Do not show again for 7 days</Text>

          </View>
          <WholeButton1 Label={'Cancel order'} Action={() => { }} styles={{ width: width * 0.9, padding: '3%', }} />



        
            <WholeButton1 Label={'Not now'} Action={() => { }} styles={{ width: width * 0.9, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)',marginTop:'0%',bottom:'3%' }} />
            
          
        </View>
      </RBSheet >

    </SafeAreaView>



  )
}

export default Cancelorder

const styles = StyleSheet.create({
  tips: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: '4%',
    lineHeight: 15
  },
  mainviewStyle: {
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    // marginVertical: '6%',
  },
  logintext: {
    fontSize: 32,
    fontWeight: '600',
    // fontFamily: FONTS.semiBold,
    color: '#fff',
    marginTop: '13%',
    lineHeight: 32.97,
  },
  account: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    // lineHeight: 20,
    marginTop: '16%'
  },
  order: {
    color: '#2F9ED6',
    fontSize: 12,
    fontWeight: '400', marginTop: '6%'

  },
  viewStyle1: {
    width: width,
    backgroundColor: 'rgba(69, 71, 79, 1)',
    height: 1.5,
    right: 16,
    marginTop: '3%',
    // bottom: "5%"
  },
  logintext3: {
    fontSize: 22,
    fontWeight: '600',

    color: '#fff',
    marginTop: '4%',
    lineHeight: 32.97,

  },
})


