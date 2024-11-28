import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'



const { height, width } = Dimensions.get('window');
const System = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'System'}
                    navigate={() => props.navigation.goBack()} />
                <View style={styles.ViewStylew2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>App version</Text>
                        <Text style={styles.tect}>V3.109.0</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>Source</Text>
                        <Text style={styles.tect}>App Store</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>Language</Text>
                        <Text style={styles.tect}>English</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>OS</Text>
                        <Text style={styles.tect}>IOS</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>OS Version</Text>
                        <Text style={styles.tect}>18.0.1</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>Model</Text>
                        <Text style={styles.tect}>iphone 15 plus</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>Resolution</Text>
                        <Text style={styles.tect}>430*932</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>Network</Text>
                        <Text style={styles.tect}>Wifi</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>IP</Text>
                        <Text style={styles.tect}>27.122.61.68</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>Carrier</Text>
                        <Text style={styles.tect}>--</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%', width: width * 0.8, }}>
                        <Text style={styles.contact}>Request time</Text>
                        <Text style={styles.tect}>228ms</Text>
                    </View>



















                </View>


            </View>

        </SafeAreaView>
    )
}

export default System

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',

    },
    ViewStylew2: {
        // flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: width * 0.9,
        borderWidth: 1.5,
        borderColor: '#3A3D4B',
        alignSelf: 'flex-start',
        padding: '4%',
        borderRadius: 10,
        marginTop: '8%',

    },
    tect: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500'

    },
    contact: {

        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '400'

    }
})