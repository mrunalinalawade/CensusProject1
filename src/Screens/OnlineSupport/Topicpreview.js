import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Topicpreview = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    navigate={() => props.navigation.goBack()}
                />
                <Text style={styles.logintext}>How to trade ?</Text>
                <Text style={styles.active}>Active</Text>

                <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '2%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%',marginLeft:'5%' }}>
                        <Image source={IMAGEPATH.chat} style={{ width:23, height: 23 }} />
                        <Text style={styles.Password}>Continue chat</Text>
                    </TouchableOpacity>
                    </View>

            </View>
        </SafeAreaView>


    )
}

export default Topicpreview

const styles = StyleSheet.create({
    mainviewStyle: {
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
    active:{
        color:'#2F9ED6',
        fontSize: 18,
        fontWeight: '400',
        marginTop: '10%',

    },
    Password: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginLeft: '8%'
    
      },
})