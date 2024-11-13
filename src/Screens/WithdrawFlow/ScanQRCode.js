import { StyleSheet, Text, View ,SafeAreaView,Dimensions} from 'react-native'
import React from 'react'
import Header from '../../Components/Header'

const { height, width } = Dimensions.get('window');
const ScanQRCode = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
   
    
        <View style={styles.mainviewStyle}>
          <Header
         
            navigate={() => props.navigation.goBack()}
        
          />
          <Text style={styles.logintext}>Scan QR Code</Text>
       
          </View>
         
          </SafeAreaView>
  )
}

export default ScanQRCode

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '6%',
      },
})