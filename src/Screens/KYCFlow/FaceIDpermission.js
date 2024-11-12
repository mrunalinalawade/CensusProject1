import { StyleSheet, Text, View ,SafeAreaView,Dimensions, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import WholeButton1 from '../../Components/WholeButton1'
import { IMAGEPATH } from '../../assets/Theme';
const { height, width } = Dimensions.get('window');
const FaceIDpermission = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
    <View style={{ flex: 1 }}>
        <View style={styles.mainviewStyle}>
          <Text style={styles.logintext}>Login with Face ID</Text>
          <Image source={IMAGEPATH.Face} style={{height:100,width:100,alignSelf:'center',marginTop:height*0.25}}/>
          <WholeButton1 Label={'Enable now'} Action={()=>{props.navigation.navigate('KYCIdentityverification')}} styles={{ width: width * 0.9 , marginVertical: '5%',marginTop:height*0.32,}} />
          <TouchableOpacity onPress={()=>{props.navigation.navigate('Login')}}><Text style={styles.logintext1}>Maybe later</Text></TouchableOpacity> 
        </View>
    
    </View>

  </SafeAreaView>
  )
}

export default FaceIDpermission

const styles = StyleSheet.create({
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        marginTop: '14%',
        lineHeight: 32.97,
      },
      mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '6%',
      },
      logintext1:{
        fontSize: 14,
        fontWeight: '500',
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        alignSelf:'center'
      }
})