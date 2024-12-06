import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native'
import React from 'react'
import Header1 from '../../Components/Header1'
import { IMAGEPATH } from '../../assets/Theme';
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const RecieveFund = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header1
                    textlabel={'Receive'}
                    label={true}
                    navigate={() => props.navigation.goBack()}
                />

                <Image source={IMAGEPATH.golden} style={{ width: 35, height: 25, alignSelf: 'center', marginTop: '12%' }} />
                <Text style={styles.logintext1}>USDT</Text>
                <View style={{ backgroundColor: '#2C2E36', borderRadius: 5, padding: '3.5%', width: width * 0.25, alignSelf: 'center', alignItems: 'center', marginVertical: '4%' }}>
                    <Text style={[styles.signupStyle, { color: '#fff', fontSize: 10 }]}>BNB Chain</Text>
                </View>

                
                <Image source={IMAGEPATH.Rectangle} style={{ width:100, height:100, alignSelf: 'center', marginVertical: '8%' }} />



                <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>
                    <View>
                        <Text style={styles.signStyle1}>Your address</Text>
                        <Text style={[styles.crptoStyle, { width: width * 0.6 }]}>wddasdafefdfefegdffdvfdbgfngnsdfasdascsdfcsdfs</Text>
                    </View>
                    <Image source={IMAGEPATH.Copy} style={{ width: 18, height: 20, right: 10 }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: '4%', justifyContent: 'space-between',  width: width * 0.9, backgroundColor: '#2E2F36', borderRadius: 5, padding: '4%', marginVertical: '1%' }}>
            <Image source={IMAGEPATH.Square} style={{ width: 20, height: 20,marginTop:'3%' }} />
            <Text style={[styles.account, { color: 'rgba(255, 255, 255, 0.6)', width: width * 0.75 }]}>Only send BNB Chain network assets to this address. Other assets will be lost forever</Text>

          </View>





          <WholeButton1 Label={'Share'} Action={()=>{}} styles={{ width: width * 0.9,marginTop:'20%' }} />















            </View>
        </SafeAreaView>

    )
}

export default RecieveFund

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
    },
    logintext1: {
        fontSize: 20,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        alignSelf: 'center',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
    signStyle1: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 18,
        marginTop: '3%',

    },
    crptoStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginTop: '2%',

    },
    account: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        marginVertical: '1.5%'
      },
})