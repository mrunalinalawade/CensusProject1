import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'

const { height, width } = Dimensions.get('window');
const Termsofuse = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
    <View style={{ flex: 1 }}>
 
        <View style={styles.mainviewStyle}>
          <Header
            navigate={() => props.navigation.goBack()} />
          <Text style={styles.logintext}>Terms of use</Text>
          <Text style={styles.text}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
            
     a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. {'\n\n'}
            
        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        {'\n\n'}The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>



          </View>
          </View>
          </SafeAreaView>
          
  )
}

export default Termsofuse

const styles = StyleSheet.create({
    mainviewStyle: {
        // justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
       
      },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '15%',
        lineHeight: 32.97,
      },
      text:{
        color: 'rgba(255, 255, 255, 0.6)',
         fontSize: 12, fontWeight: '400',
        lineHeight:18,
        marginTop:'10%',
        width:width*0.9,
       

      },
})