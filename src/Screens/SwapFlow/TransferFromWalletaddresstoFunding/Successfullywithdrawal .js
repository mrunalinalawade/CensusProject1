import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native'
import React from 'react'
import WholeButton1 from '../../../Components/WholeButton1';
import Header from '../../../Components/Header';
import { IMAGEPATH } from '../../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Successfullywithdrawal = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={{ flex: 1 }}>
                <View style={styles.mainviewStyle}>
                <Header   navigate={() => props.navigation.goBack()}/>
                    <View style={styles.inputStyle}>
                        <Image source={IMAGEPATH.Checkmaark} style={{ marginLeft: '5%' }} />
                        <Text style={styles.account}>Successfully withdrawal </Text>
                        <Text style={[styles.account3]}>View details</Text>
                    </View>

                    
                    <WholeButton1 Label={'Okay, thank you'} Action={() => props.navigation.navigate('Home')} styles={{ width: width * 0.9,marginTop:height*0.4 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Successfullywithdrawal

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
        fontWeight: '500',
        color: '#2F9ED6',
         marginTop: '4%'


    },
})