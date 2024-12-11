import { Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGEPATH } from '../../assets/Theme'
import Header from '../../Components/Header';


const { height, width } = Dimensions.get('window');
const OnlineSupport = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    navigate={() => props.navigation.goBack()}
                />
                <Text style={styles.logintext}>How could we help you today ?</Text>


             
                <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%',marginLeft:'5%' }}>
                        <Image source={IMAGEPATH.fraud} style={{ width:20, height: 22 }} />
                        <Text style={styles.Password}>Security and fraud</Text>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%' ,marginLeft:'5%'}}>
                        <Image source={IMAGEPATH.userprofile} style={{ width: 20, height: 21 }} />
                        <Text style={styles.Password}>Account management</Text>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%',marginLeft:'5%' }}>
                        <Image source={IMAGEPATH.fraud} style={{  width:20, height: 22 }} />
                        <Text style={[styles.Password]}>Security and fraud</Text>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%',marginLeft:'5%' }}>
                    <Image source={IMAGEPATH.userprofile} style={{ width: 20, height: 21 }} />
                    <Text style={styles.Password}>Account management</Text>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%',marginLeft:'5%' }}>
                    <Image source={IMAGEPATH.fraud} style={{  width:20, height: 22 }} />
                        <Text style={[styles.Password]}>Security and fraud</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%',marginLeft:'5%' }}>
                        <Image source={IMAGEPATH.chat} style={{ width:23, height: 23 }} />
                        <Text style={styles.Password}>Chat with us</Text>
                    </TouchableOpacity>
                    </View>









            </View>
        </SafeAreaView>
    )
}

export default OnlineSupport

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '2%',
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '16%',
        lineHeight: 32.97,
    },
    Password: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginLeft: '10%'
    
      },
      viewStyle: {
        width: width * 0.82,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        marginVertical: '2.5%'
        // right: 16,
    },
})