import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Header from '../../Components/Header'
import { VECTOR_ICONS } from '../../assets/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';

const { height, width } = Dimensions.get('window');
const Settings = (props) => {
    const refRBSheet1 = useRef();
    const refRBSheet3 = useRef();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
        <View style={styles.mainviewStyle}>
          <Header
            navigate={() => props.navigation.goBack()} />
          <Text style={styles.logintext}>Settings</Text>


          <View style={{ backgroundColor: 'rgba(34, 35, 42, 1)', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('Language')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Language</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                            <Text style={styles.lang}>Language</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                        </View>
                        
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity   onPress={()=>{props.navigation.navigate('Currency')}}style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Currency</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                            <Text style={styles.lang}>USD ($)</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>

                    <TouchableOpacity onPress={()=>{props.navigation.navigate('Soundsandvibration')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Sounds and vibration</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>

                    <TouchableOpacity   onPress={()=>{props.navigation.navigate('Clipboard')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Clipboard</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                    </TouchableOpacity>

                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity   onPress={()=>{props.navigation.navigate('System')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Notifications</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                    </TouchableOpacity>

                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity  onPress={() => { refRBSheet3.current.open() }}style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Theme</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                            <Text style={styles.lang}>Dark Theme</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity onPress={() => { refRBSheet1.current.open() }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Volume Unit</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                            <Text style={styles.lang}>Quote Currency</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                        </View>
                    </TouchableOpacity>

                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity   onPress={()=>{props.navigation.navigate('Systempermissions')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>System permission</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity   onPress={()=>{props.navigation.navigate('AboutUs')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>About Us</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity   onPress={()=>{props.navigation.navigate('System')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>System</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} />
                    </TouchableOpacity>
                </View>



          </View>

          <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={200}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2,
                        height: 100
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center', marginTop: '4%' }}>
                    <Text style={styles.logintext1}>Volume units</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '9%' ,width: width * 0.9,}}>
                        <Text style={styles.contact}>Quote currency</Text>
                        <VECTOR_ICONS.AntDesign name={'check'} size={20} color={'#FFFFFF'}   />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' ,width: width * 0.9,}}>
                        <Text style={styles.contact}>Fiat currency: USD ($)</Text>
                    </View>

                    </View>
                    </RBSheet>


                    <RBSheet
                ref={refRBSheet3}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={200}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2,
                        height: 100
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center', marginTop: '4%' }}>
                    <Text style={styles.logintext1}>Select theme</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '9%' ,width: width * 0.9,}}>
                        <Text style={styles.contact}>Light Theme</Text>
                        <VECTOR_ICONS.AntDesign name={'check'} size={20} color={'#FFFFFF'}   />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' ,width: width * 0.9,}}>
                        <Text style={styles.contact}>Dark Theme</Text>
                    </View>

                    </View>
                    </RBSheet>
          </SafeAreaView>

  )
}

export default Settings

const styles = StyleSheet.create({
    mainviewStyle: {
        // justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
       
      },
      logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '15%',
        lineHeight: 32.97,
      },
      contact: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400'
    },
    viewStyle: {
        width: width * 0.82,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        marginVertical: '2.5%'
        // right: 16,
    },
    lang:{
        color:'rgba(255, 255, 255, 0.6)',
          fontSize: 12,
        fontWeight: '400',
        right:7
    },
    contact: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400'
    },
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        alignSelf: 'flex-start',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
})