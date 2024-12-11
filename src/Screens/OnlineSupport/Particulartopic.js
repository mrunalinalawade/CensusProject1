import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH } from '../../assets/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const Particulartopic = (props) => {
  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.mainviewStyle}>
        <Header navigate={() => props.navigation.goBack()} />
        <Text style={styles.logintext}>How do i issue a {'\n'}card?</Text>

        <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>
          <Text style={styles.Password}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

          <Text style={styles.Password1}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly Pockets.{'\n\n\n'}
            demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>

          <Text style={[styles.Password, { marginTop: '10%' }]}>To set up a new pocket:</Text>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={styles.Password1}>1.</Text>
            <Text style={styles.Password1}>  Placeholder before the final copy is {'\n'}  available.</Text>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={styles.Password1}>2.</Text>
            <Text style={styles.Password1}>  Placeholder before the final copy is {'\n'}  available.</Text>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={styles.Password1}>3.</Text>
            <Text style={styles.Password1}>  Placeholder before the final copy is {'\n'}  available.</Text>
          </View>
        </View>
        <Text style={styles.Password12}>Helpful?</Text>

        <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: width * 0.33, justifyContent: 'space-between', marginTop: '9%' }}>
          <TouchableOpacity onPress={() => { refRBSheet2.current.open() }}>

            <Image source={IMAGEPATH.Good} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
          <Image source={IMAGEPATH.bad} style={{ width: 50, height: 50 }} />


        </View>
        <Text style={styles.Password12}>I need more help?</Text>

        <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '6%' }}>
          <TouchableOpacity onPress={() => { refRBSheet1.current.open() }} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', marginLeft: '5%' }}>
            <Image source={IMAGEPATH.chat} style={{ width: 23, height: 23 }} />
            <Text style={[styles.Password, { marginLeft: '8%' }]}>Chat with us</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>



      <RBSheet
        ref={refRBSheet1}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={685}
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
        <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center', padding: '3%', }}>
          <Text style={[styles.logintext3, { width: width * 0.9 }]}>Keep your {'\n'}information safe</Text>
          <Text style={[styles.signStyle, { marginTop: '6%', width: width * 0.9 }]}>Never share with us details of your bank or rival card, including card number, expiry date, and CCV</Text>


          <Image source={IMAGEPATH.infosafe} style={{ width: 200, height: 200, marginVertical: height * 0.15 }} />
          <WholeButton1 Label={'Okay, Got it'} Action={() => { }} styles={{ width: width * 0.9, }} />

        </View>
      </RBSheet>



      <RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={605}
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
        <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center', padding: '3%', }}>
          <Text style={[styles.logintext3, { width: width * 0.9, fontSize: 22, lineHeight: 30 }]}>How was your support experience?</Text>
          <Text style={[styles.signStyle, { marginTop: '4%', width: width * 0.9 }]}>Please rate our support to help us improve</Text>
          <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', marginTop: '4%', borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Image source={IMAGEPATH.confusedface} style={{ width: 80, height: 80 }} />
            <Image source={IMAGEPATH.smilingface} style={{ width: 80, height: 80 }} />
            <Image source={IMAGEPATH.starstruck} style={{ width: 80, height: 80 }} />
          </View>
          <Text style={[styles.logintext3, { width: width * 0.9, fontSize: 22, lineHeight: 30 }]}>We are sorry, how could {'\n'}we do better?</Text>
          <View style={{flexDirection:'row', justifyContent: 'space-between',width: width * 0.88,marginTop:'9%'}}>
          <View style={{backgroundColor:'#2A2B2F',borderRadius:20,padding:'4%'}}>
            <Text style={styles.signupStyle}>Improve support team</Text>
          </View>
          <View style={{backgroundColor:'#2A2B2F',borderRadius:20,padding:'4%'}}>
            <Text style={styles.signupStyle}>Improve Product</Text>
          </View>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between',width: width * 0.76,marginTop:'5%',alignSelf:'flex-start'}}>
          <View style={{backgroundColor:'#2A2B2F',borderRadius:20,padding:'4%'}}>
            <Text style={styles.signupStyle}>Faster Replies</Text>
          </View>
          <View style={{backgroundColor:'#2A2B2F',borderRadius:20,padding:'4%'}}>
            <Text style={styles.signupStyle}>Agent’s Approach</Text>
          </View>
          </View>
          <View style={{backgroundColor:'#2A2B2F',borderRadius:20,padding:'4%',alignSelf:'flex-start',marginTop:'5%'}}>
            <Text style={styles.signupStyle}>Explain Better</Text>
          </View>
          


          <WholeButton1 Label={'Submit & end chat'} Action={() => { }} styles={{ width: width * 0.9, }} />

        </View>
      </RBSheet>
    </SafeAreaView>
  )
}

export default Particulartopic

const styles = StyleSheet.create({
  mainviewStyle: {
    width: width * 0.9,
    alignSelf: 'center',
    // marginVertical: '2%',
    marginBottom: '5%'
  },
  logintext: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    marginTop: '9%',
    // lineHeight: 32.97
  },
  Password: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  Password1: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '9%',
  },
  Password12: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    marginTop: '14%',

  },
  logintext3: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    marginTop: '8%',
    lineHeight: 42.97,

  },
  signupStyle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#fff',
    marginHorizontal:'2%'
  },
  signStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',

  },


})