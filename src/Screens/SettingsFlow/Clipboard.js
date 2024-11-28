import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header';
import ToggleSwitch from 'toggle-switch-react-native'

const { height, width } = Dimensions.get('window');
const Clipboard = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Clipboard'}
                    // label4={true}
                    navigate={() => props.navigation.goBack()} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '15%' }}>
                    <View>
                        <Text style={styles.signStyle1}>Allow access</Text>
                        <Text style={[styles.vibrate, { width: width * 0.64, marginTop: '3%' }]}>If disabled, BitTrans will be unable to read the information on your clipboard.</Text>
                    </View>
                    <ToggleSwitch
                        isOn={false}
                        onColor="rgba(118, 140, 92, 1)"
                        offColor="rgba(255, 255, 255, 0.6)"
                        // labelStyle={{ color: "black", fontWeight: "900" }}
                        size="large"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Clipboard

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',
    },
    signStyle1: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',

    },
    vibrate: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: '500',
        marginTop: '10%'

    }


})