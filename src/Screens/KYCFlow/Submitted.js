import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native'
import React from 'react'
import { IMAGEPATH } from '../../assets/Theme'
import WholeButton1 from '../../Components/WholeButton1'
import Header from '../../Components/Header'


const { height, width } = Dimensions.get('window');
const Submitted = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={{ flex: 1 }}>
                <View style={styles.mainviewStyle}>
                <Header   navigate={() => props.navigation.goBack()}/>
                    <View style={styles.inputStyle}>
                        <Image source={IMAGEPATH.Checkmaark} style={{ marginLeft: '5%' }} />
                        <Text style={styles.account}>Submitted</Text>
                        <Text style={[styles.account,{fontSize:14,marginTop:'3%'}]}>Verification in progress, check back in bit</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop:height*0.34 }}>
                            <Image source={IMAGEPATH.Telegram} style={{height:17,width:17,}} />
                            <Text style={styles.account3}>Stay informed about the latest money-making insights by  <Text style={[styles.account3,{color:'#2F9ED6'}]}>joining our telegram group</Text></Text>
                        </View>
                    <WholeButton1 Label={'Next'} Action={() => props.navigation.navigate("BottomTabbar", { screen: 'Home' })} styles={{ width: width * 0.9 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Submitted

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '6%',
    },
    logoStyle: {
        // marginTop: 84.43,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    account: {
        fontSize: 22,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 1)',
        // lineHeight: 20,
        marginTop: '6%'
    },
    inputStyle: {
        marginTop: height * 0.2,
        alignSelf: 'center',
        width:width*0.9,
        alignItems:'center'
    },
    account3: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        // lineHeight: 20,
        marginLeft: '3%',


    },
})