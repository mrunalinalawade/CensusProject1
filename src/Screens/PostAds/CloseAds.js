import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH } from '../../assets/Theme';

const { height, width } = Dimensions.get('window');
const CloseAds = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    // Add={true}
                    textlabel={'Support'}
                    navigate={() => props.navigation.goBack()}
                />
                 <Image source={IMAGEPATH.EmptyAddress} style={{ width: 110, height: 110, alignSelf: 'center', marginTop: height * 0.16 }} />
                 <Text style={styles.textStyel}>You have no Ad history yet</Text>



                <TouchableOpacity onPress={()=>{props.navigation.navigate('SetTypeandPrice')}} style={{ backgroundColor: 'rgba(118, 140, 92, 1)', borderRadius: 8, padding: '5%', alignItems: 'center',width:width*0.3 , marginTop:'8%',alignSelf:'center'}}>
                    <Text style={styles.chatStyle}>Post Ad</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default CloseAds

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
    },
    chatStyle: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '500',
        marginHorizontal: '4%',
       


    },
    textStyel: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        alignSelf: 'center',
        marginTop: '3%'

    },
})