
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/Header';
import { IMAGEPATH } from '../../../assets/Theme';
import WholeButton1 from '../../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const AddAuthenticatorAppverification = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
 
            <View style={styles.mainviewStyle}>
                <Header
                    navigate={() => props.navigation.goBack()}
                
                />
                <Text style={styles.logintext}>Authenticator App verification</Text>
                <Image source={IMAGEPATH.EmptyAddress} style={{ width: 110, height: 110, alignSelf: 'center', marginTop: height * 0.16 }} />
                <Text style={styles.textStyel}>No record found</Text>
                <WholeButton1 Label={'Add Authenticator'} Action={()=>{props.navigation.naviagte('AddTradingPassword')}} styles={{ width: width * 0.9,marginTop:height*0.34 }} />
                </View>
                
                </SafeAreaView>


  )
}

export default AddAuthenticatorAppverification

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
        marginTop: '3%'

    },

})