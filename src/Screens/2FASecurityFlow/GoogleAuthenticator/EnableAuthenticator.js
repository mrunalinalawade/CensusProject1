
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/Header';
import { IMAGEPATH } from '../../../assets/Theme';
import WholeButton1 from '../../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const EnableAuthenticator = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
 
            <View style={styles.mainviewStyle}>
                <Header
                    navigate={() => props.navigation.goBack()}
                
                />
                <Text style={styles.logintext}>Authenticator App verification</Text>
                <Image source={IMAGEPATH.Coloring} style={{ width: 90, height: 80, alignSelf: 'center', marginTop: height * 0.1 }} />
                <Text style={styles.textStyel}>Instead of waiting for text messages, get verification codes from google authenticator app, It works even if your phone is offline</Text>
                <WholeButton1 Label={'Enable'} Action={()=>{props.navigation.navigate('VerifyAuthenticator')}} styles={{ width: width * 0.9,marginTop:height*0.36 }} />
                </View>
                
                </SafeAreaView>


  )
}

export default EnableAuthenticator

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
        marginTop: '16%',
        lineHeight: 32.97,
    },
    textStyel: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        alignSelf: 'center',
        textAlign:'center',
        marginVertical:'6%'

    },

})