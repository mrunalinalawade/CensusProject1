import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { VECTOR_ICONS } from '../../assets/Theme';
import COLORS from '../../assets/colors/Colors';
import ToggleSwitch from 'toggle-switch-react-native'


const { height, width } = Dimensions.get('window');
const Soundsandvibration = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.66, }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <VECTOR_ICONS.AntDesign name="arrowleft" size={30} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <Text style={[styles.signStyle1]}>Sounds and Vibration</Text>
                </View>


                <Text style={styles.vibrate}>Vibration</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '5%'}}>
                    <Text style={styles.signStyle1}>Face ID</Text>
                    <ToggleSwitch
                        isOn={false}
                        onColor="rgba(118, 140, 92, 1)"
                        offColor="rgba(255, 255, 255, 0.6)"
                        // labelStyle={{ color: "black", fontWeight: "900" }}
                        size="large"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>

                <Text style={styles.vibrate}>Vibration</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '5%'}}>
                    <Text style={styles.signStyle1}>P2P alert</Text>
                    <ToggleSwitch
                        isOn={false}
                        onColor="rgba(118, 140, 92, 1)"
                        offColor="rgba(255, 255, 255, 0.6)"
                        // labelStyle={{ color: "black", fontWeight: "900" }}
                        size="large"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '5%'}}>
                    <Text style={styles.signStyle1}>Login</Text>
                    <ToggleSwitch
                        isOn={false}
                        onColor="rgba(118, 140, 92, 1)"
                        offColor="rgba(255, 255, 255, 0.6)"
                        // labelStyle={{ color: "black", fontWeight: "900" }}
                        size="large"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '5%'}}>
                    <View>
                    <Text style={styles.signStyle1}>Asset receipt</Text>
                    <Text style={[styles.vibrate,{width:width*0.6,marginTop: '3%'}]}>Includes: Deposits, BitTrans bonuses, and borrowing funds</Text>
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

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '5%'}}>
                    <View>
                    <Text style={styles.signStyle1}>Transfers</Text>
                    <Text style={[styles.vibrate,{width:width*0.64,marginTop: '3%'}]}>When transferring funs and lending funds</Text>
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

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '5%'}}>
                    <View>
                    <Text style={styles.signStyle1}>Order Cancelation</Text>
                    <Text style={[styles.vibrate,{width:width*0.64,marginTop: '4%'}]}>When canceling spot, margin, futures, and lending orders</Text>
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

export default Soundsandvibration

const styles = StyleSheet.create({
    mainviewStyle: {
        // justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        marginTop: '4%'

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

    },
 
})