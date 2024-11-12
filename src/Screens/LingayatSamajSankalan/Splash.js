import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import COLORS from '../../assets/colors/Colors'
import { IMAGEPATH } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Viewdata')
        }, 3000)
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>

            <View style={styles.logoStyle}>
                <View style={{width:width*0.9,alignSelf:'center',  backgroundColor: '#DAEAFF',padding :'6%',borderRadius:10}}>
                <Text style={{ color: '#2372B5', fontSize: 25, alignSelf: 'center', width: '90%', textAlign: 'center', letterSpacing: 1 }}>लिंगायत संघर्ष समिती </Text>
                <Text style={{ color: '#2372B5', fontSize: 25, alignSelf: 'center', width: '90%', textAlign: 'center', letterSpacing: 1 }}>व </Text>
                <Text style={{ color: '#2372B5', fontSize: 25, alignSelf: 'center', width: '90%', textAlign: 'center', letterSpacing: 1 }}>
                वीरशैव इंटरनॅशनल असोशिएशन 
                </Text>
                <Text style={{ color: '#2372B5', fontSize: 25, alignSelf: 'center', width: '90%', textAlign: 'center', letterSpacing: 1 }}>सादर करीत आहे.</Text>
                <Text style={{ color: '#2372B5', fontSize: 25, alignSelf: 'center', width: '90%', textAlign: 'center', letterSpacing: 1 ,marginTop:'10%'}}>वीरशैव लिंगायत समाजाची </Text>
                <Text style={{ color: '#2372B5', fontSize: 25, alignSelf: 'center', width: '90%', textAlign: 'center', letterSpacing: 1 }}>खाने सुमारी </Text>
                <Text style={{ color: '#2372B5', fontSize: 25, alignSelf: 'center', width: '90%', textAlign: 'center', letterSpacing: 1 }}>(२०२४)</Text>
                

                </View>
               
                <View style={styles.viewStyle}></View>
                <View style={styles.viewStyle1}></View>
                <Text style={{ color: '#2372B5', fontSize: 25, alignSelf: 'center', width: '90%',  letterSpacing: 1,marginLeft:'7%',marginTop:'6%' }}>मुख्य प्रायोजक </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'5%'}}> 
                <Image source={IMAGEPATH.Logo} style={styles.imgStyle} />
                <Text style={{ color: '#2372B5', fontSize: 25, alignSelf: 'center', width: '50%', textAlign: 'center', letterSpacing: 1 }}>अर्थरिद्धी नागरी सहकारी पतसंस्था</Text>
                

                </View>
                <View style={styles.viewStyle}></View>
                <View style={styles.viewStyle1}></View>
              





            </View>


        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    logoStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.04,
    },

    imgStyle: {
        width: 180,
        height:180,
        resizeMode: 'contain',
        // right: ,
        // backgroundColor:'red'
    },
    viewStyle: {
        width: width ,
        backgroundColor: '#2372B5',
        height: 1.5,
        marginTop:'8%'
    
    
      },
      viewStyle1: {
        width: width ,
        backgroundColor: '#2372B5',
        height: 1.5,marginTop:'0.2%'
   
    
    
      },

})