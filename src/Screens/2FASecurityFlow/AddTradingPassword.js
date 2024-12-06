import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import WholeButton1 from '../../Components/WholeButton1';
import { IMAGEPATH } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const AddTradingPassword = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    navigate={() => props.navigation.goBack()}
                />
                <Text style={styles.logintext}>Trading Password</Text>

                <View style={{ marginTop: '10%',backgroundColor:'rgba(34, 35, 42, 1)' ,padding:'4%',borderRadius:7}}>

                    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:'2%' }}>
                        <Image source={IMAGEPATH.verified} style={{ width: 25, height: 25 }} />
                        <Text style={{ marginLeft: '4%', color: 'rgba(255, 255, 255, 1)', fontSize: 12, fontWeight: '400' }}>**********</Text>
                    </View>
                    <Image source={IMAGEPATH.editext}  style={{ width: 20, height: 20,alignSelf:'flex-end' ,right:10}} />

                    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:'2%', bottom:'1%'}}>
                        <Text style={styles.addd}>Added:</Text>
                        <Text style={[styles.addd, { marginLeft: '1%' }]}>December 7, 2023</Text>
                    </View>

                </View>


                <WholeButton1 Label={'Set for 2FA'} Action={() => { props.navigation.navigate('Changetradingpassword') }} styles={{ width: width * 0.9, marginTop: height * 0.54 }} />
            </View>
        </SafeAreaView>
    )
}

export default AddTradingPassword

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
    addd: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 10,
        fontWeight: '400'
    }
})